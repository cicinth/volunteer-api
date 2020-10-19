import { AutenticarUsuarioModel } from "../../application/model";
import { IAutenticarApplication } from "../../application";
import { ApiRegisterType } from "../initApi";
import * as jwt from "jsonwebtoken";

export default class AutenticarController {
  autenticarApplication: IAutenticarApplication;
  constructor(opts: ApiRegisterType) {
    this.autenticarApplication = opts.autenticarApplication;
  }

  public async autenticarAsync(req: any, res: any): Promise<void> {
    const { usuario, senha } = req.body;

    const autenticarModel = new AutenticarUsuarioModel();
    autenticarModel.email = usuario;
    autenticarModel.senha = senha;

    try {
      const usuarioAutenticado = await this.autenticarApplication.autenticarUsuarioAsync(
        autenticarModel
      );
      var secret: jwt.Secret = process.env.SECRET!;

      var token = jwt.sign(
        {
          usuario: usuarioAutenticado,
        },
        secret,
        {
          expiresIn: parseInt(process.env.SESSION_USR_EXPIRE_IN || "300"), // expires in 5min
        }
      );

      return res.json({ auth: true, token: token });
    } catch (error) {
      return res.error(error);
    }
  }
}
