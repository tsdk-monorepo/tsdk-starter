"use strict";
/**
 *
 * api-user.ts
 * fe-sdk@1.0.0
 *
 **/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateHello = exports.GetHello = void 0;
var gen_api_1 = __importDefault(require("./gen-api"));
var apiconf_refs_1 = require("./apiconf-refs");
/**
 * Get hello
 *
 * @category hello
 */
exports.GetHello = (0, gen_api_1.default)(apiconf_refs_1.GetHelloConfig);
/**
 * Update hello
 *
 * @category hello
 */
exports.UpdateHello = (0, gen_api_1.default)(apiconf_refs_1.UpdateHelloConfig);
