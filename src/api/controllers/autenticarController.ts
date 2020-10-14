import { IAutenticarApplication } from "../../application";
import { ApiRegisterType } from "../initApi";

export default class AutenticarController {
 autenticarApplication: IAutenticarApplication;
  constructor(opts: ApiRegisterType) {
    this.autenticarApplication = opts.autenticarApplication;
  }

  public autenticar(req: any, res: any): void {
    const { usuario, senha } = req.body;
      const usuarioAutenticado = this.autenticarApplication.autenticarUsuario(
        usuario,
        senha
      );
      res.end(usuarioAutenticado);
  }
}
