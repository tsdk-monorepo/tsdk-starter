"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateHelloConfig = exports.GetHelloConfig = void 0;
var zod_1 = require("zod");
var tsdk_helper_1 = require("./shared/tsdk-helper");
/**
 * Get hello ({@link APIConfig})
 * @category hello
 */
exports.GetHelloConfig = {
    type: "user",
    method: "get",
    path: (0, tsdk_helper_1.transformPath)("GetHello"),
    description: "Get hello",
    category: "hello",
    needAuth: false,
};
// --------- GetHello END ---------
/**
 * Update hello ({@link APIConfig})
 * @category hello
 */
exports.UpdateHelloConfig = {
    type: "user",
    method: "post",
    path: (0, tsdk_helper_1.transformPath)("UpdateHello"),
    description: "Update hello",
    category: "hello",
    needAuth: false,
    schema: zod_1.z.object({
        payload: zod_1.z.string().min(1),
    }),
};
// --------- UpdateHello END ---------
