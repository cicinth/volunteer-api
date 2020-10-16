import { IUsuarioEntity } from "../entities";
import { IUsuarioDomain } from "../domain";
import { ApplicationRegisterType } from "./initApplication";
import { IUsuarioAutenticadoModel } from "./model/usuarioAutenticadoModel";
import { AutenticarUsuarioModel } from "./model/autenticar/autenticarUsuarioModel";
import { CadastrarUsuarioModel } from "./model";

export interface IAutenticarApplication {
  cadastrarNovoUsuarioAsync(
    cadastrarUsuarioModel: CadastrarUsuarioModel
  ): Promise<void>;
  autenticarUsuarioAsync(
    autenticarUsuarioModel: AutenticarUsuarioModel
  ): Promise<IUsuarioAutenticadoModel>;
}

export class AutenticarApplication implements IAutenticarApplication {
  usuarioDomain: IUsuarioDomain;

  constructor(props: ApplicationRegisterType) {
    this.usuarioDomain = props.usuarioDomain;
  }

  async cadastrarNovoUsuarioAsync(
    cadastrarUsuarioModel: CadastrarUsuarioModel
  ): Promise<void> {
    const validoModel = cadastrarUsuarioModel.isValido();
    if (!validoModel.isValido) throw validoModel.mensagem;

    const usuarioEntity: IUsuarioEntity = {
      id: undefined,
      email: cadastrarUsuarioModel.email,
      nome: cadastrarUsuarioModel.nome,
      tipoPessoa: cadastrarUsuarioModel.tipoPessoa,
      senha: cadastrarUsuarioModel.senha,
      celular: cadastrarUsuarioModel.celular,
      cpfCnpj: cadastrarUsuarioModel.cpfCnpj,
      dtNascimento: cadastrarUsuarioModel.dtNascimento,
    };

    await this.usuarioDomain.cadastrarUsuarioAsync(usuarioEntity);
  }

  async autenticarUsuarioAsync(
    autenticarUsuarioModel: AutenticarUsuarioModel
  ): Promise<IUsuarioAutenticadoModel> {
    const validoModel = autenticarUsuarioModel.isValido();
    if (!validoModel.isValido) throw validoModel.mensagem;

    const usuarioEntity: IUsuarioEntity = await this.usuarioDomain.autenticarUsuarioAsync(
      autenticarUsuarioModel.documento!,
      autenticarUsuarioModel.senha!
    );

    const token = "";

    const usuarioAutenticadoModel = {
      nome: usuarioEntity.nome!,
      email: usuarioEntity.email!,
      token: token,
    };

    return usuarioAutenticadoModel;
  }
}
