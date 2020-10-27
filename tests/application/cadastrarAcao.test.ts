import { expect } from "chai";
import { TesteDiInit } from "../../src";
import { IAcaoApplication } from "../../src/application/acaoApplication";
import { AddNovaAcaoModel } from "../../src/application/model/acao/addNovaAcaoModel";

const container = TesteDiInit();

const acaoApplication = container.resolve<IAcaoApplication>("acaoApplication");

describe("Cadastrar ação", () => {
  it("cadastrar nova ação sem nome", () => {
    const addNovaAcaoModel = new AddNovaAcaoModel();
    acaoApplication.AddNovaAcaoAsync(addNovaAcaoModel).catch((ex) => {
      expect(ex.message).eq("Ação não pode ser cadastrada sem um nome");
    });
  });

  it("cadastrar nova ação", () => {
    const addNovaAcaoModel = new AddNovaAcaoModel();
    addNovaAcaoModel.nome = "Auxilio alimentação";

    acaoApplication.AddNovaAcaoAsync(addNovaAcaoModel).then(() => {
      expect(true).true;
    });
  });
});
