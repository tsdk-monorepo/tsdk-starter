import { ZodError } from "zod";
import {
  genRouteFactory,
  getRouteEventName,
  ObjectLiteral,
  Protocol,
} from "tsdk-server-adapters";
import { ProtocolTypes } from "@/src/shared/tsdk-helper";
import { APIConfig, APITypesKey } from "@/src/shared/tsdk-types";

async function authMiddleware(
  protocol: Protocol,
  apiConfig: APIConfig,
  reqInfo: RequestInfo
) {
  if (protocol === "socket.io" || protocol === "ws") {
    // only parse once for socket
  }
  if (!apiConfig.needAuth) {
    return Promise.resolve();
  }
  if (!reqInfo.token) {
    return Promise.reject(new AuthError());
  }

  return Promise.resolve();
}

const middlewares = [authMiddleware];

export const genRouteObj = genRouteFactory<APIConfig, RequestInfo>(
  onErrorHandler,
  ProtocolTypes,
  middlewares,
  APITypesKey
);

export const routeBus = genRouteObj.routeBus;

export const genRoute = genRouteObj.genRoute;

export interface RequestInfo {
  type: string;
  ip: string;
  lang: string;
  username?: string;
  userId?: number;
  token?: string;
}
export type ReadonlyRequestInfo = Readonly<RequestInfo>;

class CustomError extends Error {
  statusCode: number;
}

function onErrorHandler(
  e: CustomError,
  {
    protocol,
    send,
    msgId,
  }: Parameters<Parameters<typeof genRouteFactory>[0]>[1]
) {
  if (e instanceof ZodError) {
    return send({
      _id: msgId,
      status: 400,
      result: {
        msg: e.errors,
      },
    });
  }

  let status = e.statusCode || 500;
  const msg = e.message;

  if (e instanceof AuthError) {
    status = 401;
  }
  return send({ _id: msgId, status, result: { msg } });
}

class AuthError extends Error {
  message = "AuthError";
}
