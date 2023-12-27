import { SWRConfiguration } from "swr";
import { SWRMutationConfiguration } from "swr/mutation";
import { AxiosRequestConfig } from "axios";
import { type GetHelloReq, type GetHelloRes, type UpdateHelloReq, type UpdateHelloRes } from './apiconf-refs';
/**
 * Get hello
 *
 * @category hello
 */
export declare function useGetHello(payload: GetHelloReq | undefined, options?: SWRConfiguration<GetHelloRes | undefined>, requestConfig?: AxiosRequestConfig<GetHelloReq>, needTrim?: boolean): import("swr/_internal").SWRResponse<GetHelloRes | undefined, any, Partial<import("swr/_internal").PublicConfiguration<GetHelloRes | undefined, any, import("swr/_internal").BareFetcher<any>>> | undefined>;
/**
 * Update hello
 *
 * @category hello
 */
export declare function useUpdateHello(options?: SWRMutationConfiguration<UpdateHelloRes, Error, string, UpdateHelloReq>, requestConfig?: AxiosRequestConfig<UpdateHelloReq>, needTrim?: boolean): import("swr/mutation").SWRMutationResponse<UpdateHelloRes, Error, string, {
    payload: string;
}>;
