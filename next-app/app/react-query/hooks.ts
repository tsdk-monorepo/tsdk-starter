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
  UpdateHelloRes,
} from "@/lib/user-api";

export function useGetHello(
  payload: GetHelloReq,
  options?: UndefinedInitialDataOptions<GetHelloRes, Error>,
  queryClient?: QueryClient
) {
  return useQuery(
    {
      ...(options || {}),
      queryKey: [GetHello.config.path, payload],
      queryFn() {
        return GetHello(payload);
      },
    },
    queryClient
  );
}

export function useUpdateHello(
  options?: UseMutationOptions<
    UpdateHelloRes,
    Error,
    {
      payload: string;
    },
    unknown
  >,
  queryClient?: QueryClient
) {
  return useMutation(
    {
      ...(options || {}),
      mutationFn: UpdateHello,
    },
    queryClient
  );
}
