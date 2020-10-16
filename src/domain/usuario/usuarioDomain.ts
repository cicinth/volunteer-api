import { IUsuarioEntity } from "../../entities";
import { IUsuarioRepository } from "../../data/repository";
import { DomainRegisterType } from "../initDomain";
import { ICriptografiaDomain } from "../criptografia/criptografiaDomain";

export interface IUsuarioDomain {
  cadastrarUsuarioAsync(usuarioEntity: IUsuarioEntity): Promise<void>;
  autenticarUsuarioAsync(
    usuario: string,
    senha: string
  ): Promise<IUsuarioEntity>;
}

export class UsuarioDomain implements IUsuarioDomain {
  usuarioRepository: IUsuarioRepository;
  criptografiaDomain: ICriptografiaDomain;

  constructor(props: DomainRegisterType) {
    this.usuarioRepository = props.usuarioRepository;
    this.criptografiaDomain = props.criptografiaDomain;
  }

  async cadastrarUsuarioAsync(usuarioEntity: IUsuarioEntity): Promise<void> {
    usuarioEntity.senha = this.criptografiaDomain.criptografar(
      usuarioEntity.senha!
    );

    await this.usuarioRepository.addUsuarioAsync(usuarioEntity);
  }

  async autenticarUsuarioAsync(
    usuario: string,
    senha: string
  ): Promise<IUsuarioEntity> {
    if (!usuario) {
      throw "Usuário não pode ser vazio";
    }

    const usuarioEntity = await this.usuarioRepository.getUsuarioAsync(usuario);
    if (
      !usuarioEntity ||
      usuarioEntity.senha !== this.criptografiaDomain.criptografar(senha)
    ) {
      throw "Usuário ou senha inválidos";
    }

    return usuarioEntity;
  }
}
