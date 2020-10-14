import { IUsuarioEntity } from "../entities";
import { IUsuarioDomain } from "../domain";
import { ApplicationRegisterType } from "./initApplication";
import { IUsuarioAutenticadoModel } from "./model/usuarioAutenticadoModel";

export interface IAutenticarApplication {
  autenticarUsuario(usuario: string, senha: string): IUsuarioAutenticadoModel;
}

export class AutenticarApplication implements IAutenticarApplication {
  usuarioDomain: IUsuarioDomain;

  constructor(props: ApplicationRegisterType) {
    this.usuarioDomain = props.usuarioDomain;
  }

  autenticarUsuario(usuario: string, senha: string): IUsuarioAutenticadoModel {
    if (!usuario) throw "usuario deve ser preenchido";
    if (!senha) throw "senha deve ser preenchida";

    const usuarioEntity: IUsuarioEntity = this.usuarioDomain.autenticarUsuario(
      usuario,
      senha
    );

    const token = "";

    return {
      nome: usuarioEntity.nome!,
      sobrenome: usuarioEntity.sobrenome!,
      email: usuarioEntity.email!,
      token: token,
    };
  }
}
