export interface IUsuarioEntity {
  id: string;
  nome?: string;
  sobrenome?: string;
  email?: string;
  senha?: string;
  tipoPessoa?: "FISICA" | "JURIDICA";
}
