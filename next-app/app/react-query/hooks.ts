import {
  useQuery,
  useMutation,
  QueryClient,
  UndefinedInitialDataOptions,
  UseMutationOptions,
} from "@tanstack/react-query";
import {
  GetHello,
  GetHelloReq,
  GetHelloRes,
  UpdateHello,
  UpdateHelloReq,
  UpdateHelloRes,
} from "@/lib/user-api";
import { AxiosRequestConfig } from "axios";

export function useGetHello(
  payload: GetHelloReq,
  options?: UndefinedInitialDataOptions<GetHelloRes, Error>,
  queryClient?: QueryClient,
  requestConfig?: AxiosRequestConfig<GetHelloReq>,
  needTrim?: boolean
) {
  return useQuery(
    {
      ...(options || {}),
      queryKey: [GetHello.config.path, payload],
      queryFn() {
        return GetHello(payload, requestConfig, needTrim);
      },
    },
    queryClient
  );
}

export function useUpdateHello(
  options?: UseMutationOptions<
    UpdateHelloRes,
    Error,
    UpdateHelloReq,
    unknown
  >,
  queryClient?: QueryClient,
  requestConfig?: AxiosRequestConfig<UpdateHelloReq>,
  needTrim?: boolean
) {
  return useMutation(
    {
      ...(options || {}),
      mutationFn(payload) {
        return UpdateHello(payload, requestConfig, needTrim);
      },
    },
    queryClient
  );
}
