import { IAcaoEntity } from "../entities";
import { IAcaoDomain } from "../domain";
import { ApplicationRegisterType } from "./initApplication";
import { AcaoModel } from "./model/acao/acaoModel";
import { AddNovaAcaoModel } from "./model/acao/addNovaAcaoModel";

export interface IAcaoApplication {
  AddNovaAcaoAsync(acaoModel: AddNovaAcaoModel): Promise<AcaoModel>;
}

export class AcaoApplication implements IAcaoApplication {
  acaoDomain: IAcaoDomain;
  constructor(props: ApplicationRegisterType) {
    this.acaoDomain = props.acaoDomain;
  }
  async AddNovaAcaoAsync(acaoModel: AddNovaAcaoModel): Promise<AcaoModel> {
    const validoModel = acaoModel.isValido();
    if (!validoModel.isValido) throw Error(validoModel.mensagem)
    const acaoEntidade: IAcaoEntity = {
      nome: acaoModel.nome,
    };

    return await this.acaoDomain.AddNovaAcaoAsync(acaoEntidade);
  }
}
