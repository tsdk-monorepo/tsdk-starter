"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getID = void 0;
/**
 * The `methods` sort order should same with
 * `packages/tsdk-server-adapters/src/socket.io-adapter.ts`
 */
var methods = ['get', 'post', 'delete', 'put', 'patch', 'head', 'options'];
var methodsMap = {};
methods.forEach(function (i, idx) {
    methodsMap[i] = idx;
});
var ID = 0;
function getID(method, path) {
    var lowCaseMethod = method.toLowerCase();
    var methodIdx = methodsMap[lowCaseMethod];
    return "".concat(methodIdx, ":").concat(path, ":").concat(++ID).concat(Date.now().toString(36).slice(-4) + Math.random().toString(36).slice(-4));
}
exports.getID = getID;
