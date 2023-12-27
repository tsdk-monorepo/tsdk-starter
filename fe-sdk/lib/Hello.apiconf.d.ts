import { z } from "zod";
import { APIConfig } from "./shared/tsdk-helper";
/**
 * Get hello ({@link APIConfig})
 * @category hello
 */
export declare const GetHelloConfig: APIConfig;
/**
 *
 * @category hello
 */
export type GetHelloReq = {};
/**
 *
 * @category hello
 */
export type GetHelloRes = {
    result: string;
};
/**
 * Update hello ({@link APIConfig})
 * @category hello
 */
export declare const UpdateHelloConfig: {
    type: "user";
    method: "post";
    path: string;
    description: string;
    category: string;
    needAuth: boolean;
    schema: z.ZodObject<{
        payload: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        payload: string;
    }, {
        payload: string;
    }>;
};
/**
 *
 * @category hello
 */
export type UpdateHelloReq = z.infer<typeof UpdateHelloConfig.schema>;
/**
 *
 * @category hello
 */
export type UpdateHelloRes = {
    result: string;
};
