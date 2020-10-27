import { IAcaoRepository } from "../../data/repository";
import { IAcaoEntity } from "../../entities";
import { DomainRegisterType } from "../initDomain";

export class AcaoDomain implements IAcaoDomain {
  acaoRepository: IAcaoRepository;

  constructor(props: DomainRegisterType) {
    this.acaoRepository = props.acaoRepository;
  }

  async GetAcoesPorUsuarioAsync(
    idUsuario: number
  ): Promise<Array<IAcaoEntity>> {
    return await this.acaoRepository.getAcoesPorUsuarioIdAsync(idUsuario);
  }
  async AddNovaAcaoAsync(acaoEntity: IAcaoEntity): Promise<IAcaoEntity> {
    return await this.acaoRepository.addAcaoAsync(acaoEntity);
  }
}

export interface IAcaoDomain {
  AddNovaAcaoAsync(acaoEntity: IAcaoEntity): Promise<IAcaoEntity>;
  GetAcoesPorUsuarioAsync(idUsuario: number): Promise<Array<IAcaoEntity>>;
}
