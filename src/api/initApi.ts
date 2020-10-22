import * as awilix from "awilix";
import * as express from "express";
import { IAutenticarApplication } from "../application";
import AutenticarController from "./controllers/autenticarController";
import autenticarRouter from "./routers/autenticarRouter";
import usuarioRouter from "./routers/usuarioRouter";


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
  const server = appExpress.listen(process.env.EXPRESS_PORT, function () {
    var host = (<any>server.address()).address;
    var port = (<any>server.address()).port;
    console.log("App listening at http://%s:%s", host, port);
  });

  var autenticarController = container.resolve<AutenticarController>(
    "autenticarController"
  );

  var usuarioController = container.resolve<UsuarioController>(
    "usuarioController"
  );


  autenticarRouter(appExpress,autenticarController);
  usuarioRouter(appExpress,autenticarController);
  
};
