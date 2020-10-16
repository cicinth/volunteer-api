import { ValidarUtil } from "../../../util";
import { IModel } from "../interface/iModel";
import { ValidoModel } from "../validoModel";

export class CadastrarUsuarioModel implements IModel {
  email?: string;
  nome?: string;
  tipoPessoa?: "FISICA" | "JURIDICA";
  cpfCnpj?: string;
  celular?: string;
  senha?: string;

  isValido(): ValidoModel {
    if (!this.email)
      return { isValido: false, mensagem: "Email deve ser preenchido" };
    if (!this.nome)
      return { isValido: false, mensagem: "Nome deve ser preenchido" };
    if (!this.tipoPessoa)
      return { isValido: false, mensagem: "TipoPessoa deve ser preenchido" };
    if (!this.cpfCnpj)
      return { isValido: false, mensagem: "CPF/CNPJ deve ser preenchido" };
    if (!this.celular)
      return { isValido: false, mensagem: "Celular deve ser preenchido" };
    if (!this.senha)
      return { isValido: false, mensagem: "Senha deve ser preenchida" };

    if (this.tipoPessoa === "FISICA") {
      if (!ValidarUtil.isCPFValido(this.cpfCnpj))
        return { isValido: false, mensagem: "Digite um CPF válido" };
    }
    if (this.tipoPessoa === "JURIDICA") {
      if (!ValidarUtil.isCNPJValido(this.cpfCnpj))
        return { isValido: false, mensagem: "Digite um CNPJ válido" };
    }

    if (!ValidarUtil.isEmailValido(this.email))
      return { isValido: false, mensagem: "Digite um Email válido" };

    if (!ValidarUtil.isCelularValido(this.celular))
      return { isValido: false, mensagem: "Digite um Celular válido" };

    return {
      isValido: true,
    };
  }
}
