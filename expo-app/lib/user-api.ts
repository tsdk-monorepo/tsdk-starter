import axios, { XiorError as AxiosError } from "xior";
import { setHandler, setAxiosInstance, axiosHandler } from "fe-sdk";
import Constants from "expo-constants";

export * from "fe-sdk/lib/user-api";
export * from "fe-sdk/lib/apiconf-refs";
export * from "fe-sdk/lib/entity-refs";
export * from "fe-sdk/lib/shared-refs";

const host = Constants.expoGoConfig?.debuggerHost?.split(":")?.[0];
const API_URL = process.env.EXPO_PUBLIC_API_URL || "";

export const baseURL =
  host &&
  (host.startsWith("192.168") ||
    host.startsWith("10.") ||
    host.startsWith("172.")) &&
  (API_URL.indexOf("localhost") > -1 || API_URL.indexOf("127.0.0.1") > -1)
    ? "http://" + host + ":" + (API_URL.split(":").pop() || "")
    : API_URL;

console.log("baseURL", baseURL);

export const apiType = "user";
export const apiURL = baseURL + `/api/${apiType}`;

const axiosInstance = axios.create({
  baseURL: apiURL,
  headers: {},
});

axiosInstance.interceptors.response.use(
  (res) => res,
  (error: AxiosError) => {
    throw new Error(
      (error?.response?.data as { msg: string })?.msg || error?.message
    );
  }
);

setAxiosInstance(axiosInstance);
setHandler(axiosHandler);
