import { IModel } from "../interface/iModel";
import { ValidoModel } from "../validoModel";

export class AddNovaAcaoModel implements IModel {
  id?: string;
  nome?: string;
  imagemBase64?: string;
  descricao?: string;
  

  isValido(): ValidoModel {
    if (!this.nome)
      return {
        isValido: false,
        mensagem: "Ação não pode ser cadastrada sem um nome",
      };

    return { isValido: true };
  }

}
