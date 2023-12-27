"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtocolTypes = exports.trimAndRemoveUndefined = exports.isObject = exports.transformPath = exports.checkMethodHasBody = exports.hasBodyMethods = void 0;
var change_case_1 = require("change-case");
__exportStar(require("./tsdk-types"), exports);
exports.hasBodyMethods = {
    post: true,
    put: true,
    patch: true,
    delete: true,
    options: true,
};
function checkMethodHasBody(method) {
    return exports.hasBodyMethods[method.toLowerCase()];
}
exports.checkMethodHasBody = checkMethodHasBody;
function transformPath(path) {
    return "/".concat((0, change_case_1.paramCase)(path));
}
exports.transformPath = transformPath;
function isObject(data) {
    var result = typeof data === 'object' &&
        !Array.isArray(data) &&
        data !== null &&
        !(data instanceof FormData) &&
        Object.keys(data).length > 0;
    return result;
}
exports.isObject = isObject;
/**
 * remove undefined field or trim string value
 *
 * @param data - the object data
 */
var trimAndRemoveUndefined = function (data) {
    if (!isObject(data))
        return data;
    var newData = {};
    Object.keys(data).forEach(function (k) {
        var valueType = typeof data[k];
        if (valueType === 'string') {
            newData[k] = data[k].trim();
        }
        else if (valueType !== 'undefined') {
            newData[k] = data[k];
        }
    });
    return newData;
};
exports.trimAndRemoveUndefined = trimAndRemoveUndefined;
exports.ProtocolTypes = {
    request: 'REQ:',
    response: 'RES:',
    set: 'SET:',
};
