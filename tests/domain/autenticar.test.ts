import { expect } from "chai";
import { TesteDiInit } from "../../src";
import { AutenticarUsuarioModel } from "../../src/application/model/autenticar/autenticarUsuarioModel";
import { IUsuarioDomain } from "../../src/domain";

const container = TesteDiInit();

const usuarioDomain = container.resolve<IUsuarioDomain>("usuarioDomain");

const dados = {
  email: "sophiebarbararaquelnovaes_@velc.com.br",
  senha: "q1a1z1",
};

describe("Autenticar Teste", () => {
  it("usuário em branco", () => {
    usuarioDomain.autenticarUsuarioAsync("", dados.senha).catch((ex) => {
      expect(ex.message).eq("Documento deve ser preenchido");
    });
  });

  it("senha em branco", () => {
    usuarioDomain.autenticarUsuarioAsync(dados.email, "").catch((ex) => {
      expect(ex.message).eq("Senha deve ser preenchida");
    });
  });

  it("usuário ou senha inválidos", () => {
    usuarioDomain
      .autenticarUsuarioAsync("teste123", "123123123")
      .catch((ex) => {
        expect(ex.message).eq("Usuário ou senha inválidos");
      });
  });

  it("usuário autenticado com sucesso", async () => {
    const usuario = await usuarioDomain.autenticarUsuarioAsync(
      dados.email,
      dados.senha
    );
    expect(usuario.email).eq(dados.email);
  });
});
