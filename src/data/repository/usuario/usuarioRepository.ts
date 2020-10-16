import { IUsuarioEntity } from "../../../entities";

export interface IUsuarioRepository {
  getUsuario(login: string): IUsuarioEntity;
}

export class UsuarioRepository implements IUsuarioRepository {
  getUsuario(login: string): IUsuarioEntity {
    throw new Error("Method not implemented.");
  }
}

export class UsuarioRepositoryFake implements IUsuarioRepository {
  getUsuario(login: string): IUsuarioEntity {
    const dados: Array<IUsuarioEntity> = [
      {
        id: "357119d753344e02b3f1b37f7eb90bfe",
        nome: "Sophie",
        sobrenome: "Novaes",
        email: "sophiebarbararaquelnovaes_@velc.com.br",
        senha: "adsdassdasdadsa",
        tipoPessoa: "FISICA",
      },
    ];

    return dados.filter((x) => x.email === login)[0];
  }
}
