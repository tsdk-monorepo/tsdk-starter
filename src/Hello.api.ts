import { type RequestInfo, genRoute } from "./gen-route";
import {
  GetHelloReq,
  GetHelloRes,
  GetHelloConfig,
  UpdateHelloReq,
  UpdateHelloRes,
  UpdateHelloConfig,
} from "./Hello.apiconf";

const DB = {
  data: "Hello World",
};

export function setupHelloAPI() {
  genRoute<GetHelloReq, GetHelloRes>(
    GetHelloConfig,
    async (reqInfo: Readonly<RequestInfo>, data) => {
      return { result: DB.data };
    }
  );

  genRoute<UpdateHelloReq, UpdateHelloRes>(
    UpdateHelloConfig,
    async (reqInfo: Readonly<RequestInfo>, data) => {
      DB.data = data.payload;
      return { result: data.payload };
    }
  );
}
