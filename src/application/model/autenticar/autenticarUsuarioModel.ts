import { IModel } from "../interface/iModel";
import { ValidoModel } from "../validoModel";

export class AutenticarUsuarioModel implements IModel {
  email?: string;
  senha?: string;


  isValido(): ValidoModel {
    if (!this.email)
      return { isValido: false, mensagem: "Documento deve ser preenchido" };
    if (!this.senha)
      return { isValido: false, mensagem: "Senha deve ser preenchida" };

    return {
      isValido: true,
    };
  }
}
