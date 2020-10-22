import {
  AutenticarUsuarioModel,
  CadastrarUsuarioModel,
} from "../../application/model";
import { IAutenticarApplication } from "../../application";
import { ApiRegisterType } from "../initApi";

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

  public async cadastrarAsync(req: any, res: any): Promise<void> {
    const {
      celular,
      cpfCnpj,
      dtNascimento,
      email,
      nome,
      senha,
      tipoPessoa,
    } = req.body;

    const cadastrarUsuarioModel = new CadastrarUsuarioModel();
    cadastrarUsuarioModel.celular = celular;
    cadastrarUsuarioModel.cpfCnpj = cpfCnpj;
    cadastrarUsuarioModel.dtNascimento = dtNascimento;
    cadastrarUsuarioModel.email = email;
    cadastrarUsuarioModel.nome = nome;
    cadastrarUsuarioModel.senha = senha;
    cadastrarUsuarioModel.tipoPessoa = tipoPessoa;

    try {
      await this.autenticarApplication.cadastrarNovoUsuarioAsync(
        cadastrarUsuarioModel
      );
      return res.json({
        status: true,
        mensagem: "Cadastro efetuado com sucesso",
      });
    } catch (error) {
      return res.error({ status: false, mensagem: error.message, error });
    }
  }
}
