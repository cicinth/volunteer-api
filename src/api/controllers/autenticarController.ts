import { AutenticarUsuarioModel } from "../../application/model";
import { IAutenticarApplication } from "../../application";
import { ApiRegisterType } from "../initApi";

export default class AutenticarController {
 autenticarApplication: IAutenticarApplication;
  constructor(opts: ApiRegisterType) {
    this.autenticarApplication = opts.autenticarApplication;
  }

  public autenticar(req: any, res: any): void {
    const { usuario, senha } = req.body;

    const autenticarModel = new AutenticarUsuarioModel();
    autenticarModel.documento = usuario;
    autenticarModel.senha = senha;
    
      const usuarioAutenticado = this.autenticarApplication.autenticarUsuario(autenticarModel);
      res.json(usuarioAutenticado);
  }
}
