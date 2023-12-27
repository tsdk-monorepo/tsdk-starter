/**
 *
 * api-user.ts
 * fe-sdk@1.0.0
 *
 **/
import { type GetHelloReq, type GetHelloRes, type UpdateHelloRes } from './apiconf-refs';
/**
 * Get hello
 *
 * @category hello
 */
export declare const GetHello: {
    (data: GetHelloReq, requestConfig?: import("./shared-refs").ObjectLiteral | import("./axios").RequestConfig<GetHelloReq> | undefined, needTrim?: boolean | undefined): Promise<GetHelloRes>;
    config: import("./shared-refs").APIConfig;
};
/**
 * Update hello
 *
 * @category hello
 */
export declare const UpdateHello: {
    (data: {
        payload: string;
    }, requestConfig?: import("./shared-refs").ObjectLiteral | import("./axios").RequestConfig<{
        payload: string;
    }> | undefined, needTrim?: boolean | undefined): Promise<UpdateHelloRes>;
    config: import("./shared-refs").APIConfig;
};
