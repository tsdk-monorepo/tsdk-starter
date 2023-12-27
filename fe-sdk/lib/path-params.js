"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseBracesParams = exports.parseParams = exports.pathParams = void 0;
function pathParams(path, data, symbol) {
    var newPath = path;
    var params = symbol === ':' ? parseParams(path) : parseBracesParams(path);
    if (params.length > 0) {
        params.forEach(function (item) {
            if (data[item.name] !== undefined) {
                newPath = newPath.replace("".concat(item.symbol), data[item.name]);
            }
        });
    }
    return newPath;
}
exports.pathParams = pathParams;
/** parse /:a/:b -> [{name: 'a', symbol: ':'},{name: 'b', symbol: ':'},] */
function parseParams(path) {
    var result = [];
    var symbol = ':';
    var arr = path.split(symbol);
    arr.forEach(function (item) {
        if (item && item !== '/') {
            var key_1 = item.split('/')[0];
            result.push({
                name: key_1,
                get symbol() {
                    return "".concat(symbol).concat(key_1);
                },
            });
        }
    });
    return result;
}
exports.parseParams = parseParams;
/** parse /{a}/{b} -> [{name: 'a', symbol: '{'},{name: 'b', symbol: '{'},] */
function parseBracesParams(path) {
    var result = [];
    var arr = path.match(/\{(.*?)\}/g);
    arr &&
        arr.forEach(function (item) {
            var key = item.slice(1, -1);
            result.push({
                name: key,
                get symbol() {
                    return "{".concat(key, "}");
                },
            });
        });
    return result;
}
exports.parseBracesParams = parseBracesParams;
