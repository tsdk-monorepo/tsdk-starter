"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.socketIOHandler = exports.getSocketIOInstance = exports.setSocketIOInstance = void 0;
var error_1 = require("./error");
var tsdk_helper_1 = require("./shared/tsdk-helper");
var utils_1 = require("./utils");
var socketIOInstance;
var QUEUEs = {};
/**
 * Set the io instance
 *
 * @example
 * ```ts
  const socket = io('https://server-domain.com', {
    transports: ['websocket'],
  });
  setSocketIOInstance(socket);
  ```
 *
 * @param instance - io
 */
var setSocketIOInstance = function (instance) {
    socketIOInstance = instance;
    socketIOInstance.off(tsdk_helper_1.ProtocolTypes.response);
    socketIOInstance.on(tsdk_helper_1.ProtocolTypes.response, function (_a) {
        var msgId = _a._id, status = _a.status, result = _a.result;
        if (msgId && QUEUEs[msgId]) {
            if (!status || status === 200) {
                QUEUEs[msgId].resolve(result);
            }
            else {
                QUEUEs[msgId].reject(result);
            }
            delete QUEUEs[msgId];
        }
    });
};
exports.setSocketIOInstance = setSocketIOInstance;
/**
 * Get socket.io-client instance
 *
 * @param instance - socekt.io-client instance
 * @returns The io
 */
var getSocketIOInstance = function () {
    return socketIOInstance;
};
exports.getSocketIOInstance = getSocketIOInstance;
function socketIOHandler(apiConfig, data, requestConfig, needTrim) {
    var ioInstance = (0, exports.getSocketIOInstance)();
    if (!ioInstance) {
        throw new error_1.NoHandlerError("Call `setSocketIOInstance` first");
    }
    return new Promise(function (resolve, reject) {
        if (!ioInstance.connected) {
            return reject(new error_1.NoConnectionError('No Connection'));
        }
        var msgId = (0, utils_1.getID)(apiConfig.method, apiConfig.path);
        ioInstance.emit(tsdk_helper_1.ProtocolTypes.request, {
            _id: msgId,
            payload: needTrim && data ? (0, tsdk_helper_1.trimAndRemoveUndefined)(data) : data,
        });
        var timer = (requestConfig === null || requestConfig === void 0 ? void 0 : requestConfig.timeout)
            ? setTimeout(function () {
                delete QUEUEs[msgId];
                reject(new error_1.TimeoutError('Request Timeout'));
            }, requestConfig.timeout)
            : -1;
        QUEUEs[msgId] = {
            resolve: function (res) {
                clearTimeout(timer);
                resolve(res);
            },
            reject: function (e) {
                clearTimeout(timer);
                reject(e);
            },
        };
    });
}
exports.socketIOHandler = socketIOHandler;
