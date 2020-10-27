import { IAcaoEntity } from "../../../entities";

export interface IAcaoRepository {
  addAcaoAsync(usuarioEntity: IAcaoEntity): Promise<IAcaoEntity>;
  getAcoesPorUsuarioIdAsync(idUsuario: number): Promise<Array<IAcaoEntity>>;
}

export class AcaoRepository implements IAcaoRepository {
  addAcaoAsync(usuarioEntity: IAcaoEntity): Promise<IAcaoEntity> {
    throw new Error("Method not implemented.");
  }
  getAcoesPorUsuarioIdAsync(idUsuario: number): Promise<IAcaoEntity[]> {
    throw new Error("Method not implemented.");
  }
}

export class AcaoRepositoryFake implements IAcaoRepository {
  addAcaoAsync(usuarioEntity: IAcaoEntity): Promise<IAcaoEntity> {
    return new Promise((ok) => ok({ id: "1234", nome: "Auxilio alimentação" }));
  }
  getAcoesPorUsuarioIdAsync(idUsuario: number): Promise<IAcaoEntity[]> {
    throw new Error("Method not implemented.");
  }
}
