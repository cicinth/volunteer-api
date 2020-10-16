export interface IUsuarioEntity {
  id: string | undefined;
  nome?: string;
  celular?: string;
  dtNascimento?: Date;
  email?: string;
  senha?: string;
  cpfCnpj?:string;
  tipoPessoa?: "FISICA" | "JURIDICA";
}
