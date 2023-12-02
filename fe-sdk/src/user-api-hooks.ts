
    
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
    
    
        
        
export function useGetHello(
payload: GetHelloReq,
options?: SWRConfiguration<GetHelloRes>,
requestConfig?: AxiosRequestConfig<GetHelloReq>,
needTrim?: boolean
) {
return useSWR(
  { url: GetHello.config.path, arg: payload },
  ({ arg }) => {
    return GetHello(arg, requestConfig, needTrim);
  },
  options
);
}
        
        
        
        
            export function useUpdateHello(
              options?: SWRMutationConfiguration<
                UpdateHelloRes,
                { arg: UpdateHelloReq },
                string
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
        
        
    