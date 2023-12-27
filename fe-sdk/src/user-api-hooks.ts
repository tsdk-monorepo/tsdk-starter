
    
    import useSWR, { SWRConfiguration } from "swr";
      import useSWRMutation, { SWRMutationConfiguration } from "swr/mutation";
      import { AxiosRequestConfig } from "axios";
    
    
    
    import {
        
          GetHelloConfig,
          type GetHelloReq,
          type GetHelloRes,
        
          UpdateHelloConfig,
          type UpdateHelloReq,
          type UpdateHelloRes,
        
      } from './apiconf-refs';
    import {
      
          GetHello,
        
          UpdateHello,
        
    } from './user-api';
    
    
        
/** 
 * Get hello
 * 
 * @category hello
 */
export function useGetHello(
payload: GetHelloReq | undefined,
options?: SWRConfiguration<GetHelloRes | undefined>,
requestConfig?: AxiosRequestConfig<GetHelloReq>,
needTrim?: boolean
) {
return useSWR(
  () => ({ url: GetHello.config.path, arg: payload }),
  ({ arg }) => {
    if (typeof arg === 'undefined') return undefined;
    return GetHello(arg, requestConfig, needTrim);
  },
  options
);
}
        
        
        
        
            /** 
             * Update hello
             * 
             * @category hello
             */
            export function useUpdateHello(
              options?: SWRMutationConfiguration<
                UpdateHelloRes,
                Error,
                string,
                UpdateHelloReq
              >,
              requestConfig?: AxiosRequestConfig<UpdateHelloReq>,
              needTrim?: boolean
            ) {
              return useSWRMutation(
                UpdateHello.config.path,
                (url, { arg }: { arg: UpdateHelloReq }) => {
                  return UpdateHello(arg, requestConfig, needTrim);
                },
                options
              );
            }
        
        
    