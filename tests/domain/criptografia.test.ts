import { assert, expect } from "chai";
import { TesteDiInit } from "../../src";
import { ICriptografiaDomain } from "../../src/domain/criptografia/criptografiaDomain";

const container = TesteDiInit();

const criptografiaDomain = container.resolve<ICriptografiaDomain>(
  "criptografiaDomain"
);

const dados = {
  senha: "q1a1z1",
};

describe("Criptografia Teste", ()=>  {
  it("Criptografar senha", ()=>  {
    const senhaCriptografada = criptografiaDomain.criptografar(dados.senha);
    expect(senhaCriptografada != dados.senha)
  });
});
