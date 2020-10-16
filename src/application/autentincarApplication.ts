import { IUsuarioEntity } from "../entities";
import { IUsuarioDomain } from "../domain";
import { ApplicationRegisterType } from "./initApplication";
import { IUsuarioAutenticadoModel } from "./model/usuarioAutenticadoModel";
import { AutenticarUsuarioModel } from "./model/autenticar/autenticarUsuarioModel";
import { CadastrarUsuarioModel } from "./model";

export interface IAutenticarApplication {
  cadastrarNovoUsuario(cadastrarUsuarioModel: CadastrarUsuarioModel): void;
  autenticarUsuario(
    autenticarUsuarioModel: AutenticarUsuarioModel
  ): IUsuarioAutenticadoModel;
}

export class AutenticarApplication implements IAutenticarApplication {
  usuarioDomain: IUsuarioDomain;

  constructor(props: ApplicationRegisterType) {
    this.usuarioDomain = props.usuarioDomain;
  }
  
  cadastrarNovoUsuario(cadastrarUsuarioModel: CadastrarUsuarioModel): void {
    throw new Error("Method not implemented.");
  }

  autenticarUsuario(
    autenticarUsuarioModel: AutenticarUsuarioModel
  ): IUsuarioAutenticadoModel {
    const validoModel = autenticarUsuarioModel.isValido();
    if (!validoModel.isValido) throw validoModel.mensagem;

    const usuarioEntity: IUsuarioEntity = this.usuarioDomain.autenticarUsuario(
      autenticarUsuarioModel.documento!,
      autenticarUsuarioModel.senha!
    );

    const token = "";

    const usuarioAutenticadoModel = {
      nome: usuarioEntity.nome!,
      sobrenome: usuarioEntity.sobrenome!,
      email: usuarioEntity.email!,
      token: token,
    };

    return usuarioAutenticadoModel;
  }
}
