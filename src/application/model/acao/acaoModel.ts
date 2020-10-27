import { AcaoImagemModel } from "./acaoImagemModel";

export class AcaoModel {
  id?: string;
  nome?: string;
  descricao?: string;
  acaoImagemModel?: Array<AcaoImagemModel>;
}
