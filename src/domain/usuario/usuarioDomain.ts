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
    email: string,
    senha: string
  ): Promise<IUsuarioEntity> {
    if (!email) {
      throw Error("Usuário não pode ser vazio");
    }

    const usuarioEntity = await this.usuarioRepository.getUsuarioPorEmailAsync(email);
    if (
      !usuarioEntity ||
      usuarioEntity.senha !== this.criptografiaDomain.criptografar(senha)
    ) {
      throw Error("Usuário ou senha inválidos");
    }

    return usuarioEntity;
  }
}
