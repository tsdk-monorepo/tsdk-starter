import useSWR, { SWRConfiguration } from "swr";
import useSWRMutation, { SWRMutationConfiguration } from "swr/mutation";

import {
  GetHello,
  GetHelloReq,
  GetHelloRes,
  UpdateHello,
  UpdateHelloReq,
  UpdateHelloRes,
} from "@/lib/user-api";

export function useGetHello(
  payload: GetHelloReq,
  options?: SWRConfiguration<GetHelloRes>
) {
  return useSWR(
    { url: GetHello.config.path, arg: payload },
    ({ arg }) => {
      return GetHello(arg);
    },
    options
  );
}

export function useUpdateHello(
  options?: SWRMutationConfiguration<
    UpdateHelloRes,
    { arg: UpdateHelloReq },
    string
  >
) {
  return useSWRMutation(
    UpdateHello.config.path,
    (url, { arg }: { arg: UpdateHelloReq }) => {
      return UpdateHello(arg);
    },
    options
  );
}
