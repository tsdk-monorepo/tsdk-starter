import http from "http";
import express, { Request } from "express";
import compression from 'compression';
import { Server } from "socket.io";
import { socketIOAdapterFactory } from "tsdk-server-adapters/lib/socket.io-adapter";
import { expressAdapterFactory } from "tsdk-server-adapters/lib/express-adapter";
import { checkMethodHasBody, ProtocolTypes } from "@/src/shared/tsdk-helper";
import { RequestInfo, routeBus } from "./gen-route";
import { setupHelloAPI } from "./Hello.api";

const port = 3030;

const app = express();
const server = http.createServer(app);

const io = new Server(server);
io.on("connection", (socket) => {
  const { address, query, headers } = socket.handshake;

  const reqInfo = {
    ip: address,
    lang: "zh-CN",
    token: query.token as string,
    type: query.type as string,
  };

  socketIOAdapterFactory<RequestInfo>({
    routeBus,
    getReqInfo() {
      return reqInfo;
    },
    getType(reqInfo) {
      return reqInfo.type;
    },
    getData(data) {
      return data;
    },
    protocolType: ProtocolTypes,
  })(socket);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.get("/", (req, res) => {
  res.end("hi, from express.");
});
app.use(
  "/api/:type",
  expressAdapterFactory<RequestInfo>({
    routeBus,
    getReqInfo(req: Request) {
      return {
        ip: req.ip as string,
        lang: "zh-CN",
        type: req.params.type,
        token: req.headers.authorization,
      };
    },
    getType(reqInfo) {
      return reqInfo.type;
    },
    async getData(req) {
      return checkMethodHasBody(req.method) ? req.body : req.query;
    },
  })
);

setupHelloAPI();

server.listen(port, () => {
  console.log(`Server listening at ${port}`);
});
