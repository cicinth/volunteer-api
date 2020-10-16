import { IUsuarioEntity } from "../../entities";
import { IUsuarioRepository } from "../../data/repository";
import { DomainRegisterType } from "../initDomain";
import { ICriptografiaDomain } from "../criptografia/criptografiaDomain";

export interface IUsuarioDomain {
  autenticarUsuario(usuario: string, senha: string): IUsuarioEntity;
}

export class UsuarioDomain implements IUsuarioDomain {
  usuarioRepository: IUsuarioRepository;
  criptografiaDomain: ICriptografiaDomain;

  constructor(props: DomainRegisterType) {
    this.usuarioRepository = props.usuarioRepository;
    this.criptografiaDomain = props.criptografiaDomain;
  }

  autenticarUsuario(usuario: string, senha: string): IUsuarioEntity {
    if (!usuario) {
      throw "Usuário não pode ser vazio";
    }

    const usuarioEntity = this.usuarioRepository.getUsuario(usuario);
    if (
      !usuarioEntity ||
      usuarioEntity.senha !== this.criptografiaDomain.criptografar(senha)
    ) {
      throw "Usuário ou senha inválidos";
    }

    return usuarioEntity;
  }
}
