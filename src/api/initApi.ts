import * as awilix from "awilix";
import * as express from "express";
import { IAutenticarApplication } from "../application";
import AutenticarController from "./controllers/autenticarController";
import autenticarRouter from "./routers/autenticarRouter";

export interface ApiRegisterType {
  autenticarApplication: IAutenticarApplication;
}

export default (container: awilix.AwilixContainer) => {
  const appExpress = express.default();
  container.register({
    appExpress: awilix.asValue(appExpress),
    autenticarController: awilix.asClass(AutenticarController, {
      lifetime: "SINGLETON",
    }),
  });
  appExpress.use(express.json());
  const server = appExpress.listen(8081, function () {
    var host = (<any>server.address()).address;
    var port = (<any>server.address()).port;
    console.log("Example app listening at http://%s:%s", host, port);
  });

  autenticarRouter(appExpress,container.resolve("autenticarController"))
};
