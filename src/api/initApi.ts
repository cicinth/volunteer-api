import * as awilix from "awilix";
import * as express from "express";
import { IAutenticarApplication } from "../application";
import AutenticarController from "./controllers/autenticarController";
import autenticarRouter from "./routers/autenticarRouter";
import * as jwt from "jsonwebtoken";

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

  var autenticarController = container.resolve<AutenticarController>(
    "autenticarController"
  );

  appExpress.post(
    "/usuario/autenticar",
    async (req, res) => await autenticarController.autenticarAsync(req, res)
  );

  appExpress.get("/usuario", verifyJWT);
};

function verifyJWT(req: any, res: any, next: any) {
  var token = req.headers["x-access-token"];
  if (!token)
    return res.status(401).json({ auth: false, message: "No token provided." });

  var secret: jwt.Secret = process.env.SECRET!;
  jwt.verify(token, secret, function (err: any, decoded: any) {
    if (err)
      return res
        .status(500)
        .json({ auth: false, message: "Failed to authenticate token." });

        res.json(decoded.usuario);
    // se tudo estiver ok, salva no request para uso posterior
    // req.userId = decoded.id;
    next();
  });
}
