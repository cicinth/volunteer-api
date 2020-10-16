import { IUsuarioEntity } from "../../../entities";

export interface IUsuarioRepository {
  addUsuarioAsync(usuarioEntity: IUsuarioEntity): Promise<void>;
  getUsuarioAsync(login: string): Promise<IUsuarioEntity>;
}

export class UsuarioRepository implements IUsuarioRepository {
  addUsuarioAsync(usuarioEntity: IUsuarioEntity): Promise<void> {
    throw new Error("Method not implemented.");
  }
  getUsuarioAsync(login: string): Promise<IUsuarioEntity> {
    throw new Error("Method not implemented.");
  }
}

export class UsuarioRepositoryFake implements IUsuarioRepository {
  async addUsuarioAsync(usuarioEntity: IUsuarioEntity): Promise<void> {}
  async getUsuarioAsync(login: string): Promise<IUsuarioEntity> {
    const dados: Array<IUsuarioEntity> = [
      {
        id: "357119d753344e02b3f1b37f7eb90bfe",
        nome: "Sophie Novaes",
        email: "sophiebarbararaquelnovaes_@velc.com.br",
        senha: "adsdassdasdadsa",
        tipoPessoa: "FISICA",
        celular: "11986540484",
        cpfCnpj: "19119119100",
        dtNascimento: new Date(),
      },
    ];

    return new Promise((ok) => ok(dados.filter((x) => x.email === login)[0]));
  }
}
