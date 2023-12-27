"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useUpdateHello = exports.useGetHello = void 0;
var swr_1 = __importDefault(require("swr"));
var mutation_1 = __importDefault(require("swr/mutation"));
var user_api_1 = require("./user-api");
/**
 * Get hello
 *
 * @category hello
 */
function useGetHello(payload, options, requestConfig, needTrim) {
    return (0, swr_1.default)(function () { return ({ url: user_api_1.GetHello.config.path, arg: payload }); }, function (_a) {
        var arg = _a.arg;
        if (typeof arg === 'undefined')
            return undefined;
        return (0, user_api_1.GetHello)(arg, requestConfig, needTrim);
    }, options);
}
exports.useGetHello = useGetHello;
/**
 * Update hello
 *
 * @category hello
 */
function useUpdateHello(options, requestConfig, needTrim) {
    return (0, mutation_1.default)(user_api_1.UpdateHello.config.path, function (url, _a) {
        var arg = _a.arg;
        return (0, user_api_1.UpdateHello)(arg, requestConfig, needTrim);
    }, options);
}
exports.useUpdateHello = useUpdateHello;
