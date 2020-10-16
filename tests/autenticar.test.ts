import { assert, expect } from "chai";
import { TesteDiInit } from "../src";
import { IAutenticarApplication } from "../src/application";
import { AutenticarUsuarioModel } from "../src/application/model/autenticar/autenticarUsuarioModel";

const container = TesteDiInit();

const autenticarApplication = container.resolve<IAutenticarApplication>(
  "autenticarApplication"
);

const dados = {
  documento: "sophiebarbararaquelnovaes_@velc.com.br",
  senha: "q1a1z1",
};

describe("Autenticar Teste", () => {
  it("usuário em branco", () => {
    const autenticarModel = new AutenticarUsuarioModel();
    autenticarModel.documento = "";
    autenticarModel.senha = dados.senha;

    assert.Throw(
      () => autenticarApplication.autenticarUsuario(autenticarModel),
      "Usuario deve ser preenchido"
    );
  });

  it("senha em branco", () => {
    const autenticarModel = new AutenticarUsuarioModel();
    autenticarModel.documento = dados.documento;
    autenticarModel.senha = "";
    assert.Throw(
      () => autenticarApplication.autenticarUsuario(autenticarModel),
      "Senha deve ser preenchida"
    );
  });

  it("usuário ou senha inválidos", () => {
    const autenticarModel = new AutenticarUsuarioModel();
    autenticarModel.documento = "teste123";
    autenticarModel.senha = "123123123";

    assert.Throw(
      () => autenticarApplication.autenticarUsuario(autenticarModel),
      "Usuário ou senha inválidos"
    );
  });

  it("usuário autenticado com sucesso", () => {
    const autenticarModel = new AutenticarUsuarioModel();
    autenticarModel.documento = dados.documento;
    autenticarModel.senha = dados.senha;

    const usuario = autenticarApplication.autenticarUsuario(autenticarModel);
    assert.isTrue(usuario.nome);
    assert.isTrue(usuario.sobrenome);
    assert.isTrue(usuario.email);
    assert.isTrue(usuario.token);
  });
});
