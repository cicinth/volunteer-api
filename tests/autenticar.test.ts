import { expect } from "chai";
import { TesteDiInit } from "../src";
import { IAutenticarApplication } from "../src/application";
import { AutenticarUsuarioModel } from "../src/application/model/autenticar/autenticarUsuarioModel";

const container = TesteDiInit();

const autenticarApplication = container.resolve<IAutenticarApplication>(
  "autenticarApplication"
);

const dados = {
  email: "sophiebarbararaquelnovaes_@velc.com.br",
  senha: "q1a1z1",
};

describe("Autenticar Teste", () => {
  it("usuário em branco", () => {
    const autenticarModel = new AutenticarUsuarioModel();
    autenticarModel.email = "";
    autenticarModel.senha = dados.senha;

    autenticarApplication.autenticarUsuarioAsync(autenticarModel)
    .catch((ex)=>{
      expect(ex.message).eq("Documento deve ser preenchido")
    })
    
  });

  it("senha em branco", () => {
    const autenticarModel = new AutenticarUsuarioModel();
    autenticarModel.email = dados.email;
    autenticarModel.senha = "";
    autenticarApplication.autenticarUsuarioAsync(autenticarModel)
    .catch((ex)=>{
      expect(ex.message).eq("Senha deve ser preenchida")
    })
  });

  it("usuário ou senha inválidos", () => {
    const autenticarModel = new AutenticarUsuarioModel();
    autenticarModel.email = "teste123";
    autenticarModel.senha = "123123123";

    autenticarApplication.autenticarUsuarioAsync(autenticarModel)
    .catch((ex)=>{
      expect(ex.message).eq("Usuário ou senha inválidos")
    });
    
  });

  it("usuário autenticado com sucesso", async () => {
    const autenticarModel = new AutenticarUsuarioModel();
    autenticarModel.email = dados.email;
    autenticarModel.senha = dados.senha;

    const usuario = await autenticarApplication.autenticarUsuarioAsync(
      autenticarModel
    );

    expect(usuario.email).eq(dados.email);
  });
});
