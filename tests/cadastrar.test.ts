import { assert, expect } from "chai";
import { TesteDiInit } from "../src";
import { IAutenticarApplication } from "../src/application";
import { CadastrarUsuarioModel } from "../src/application/model";

const container = TesteDiInit();

const autenticarApplication = container.resolve<IAutenticarApplication>(
  "autenticarApplication"
);

const cadastrarUsuarioModelCPF = new CadastrarUsuarioModel();
cadastrarUsuarioModelCPF.tipoPessoa = "FISICA";
cadastrarUsuarioModelCPF.cpfCnpj = "191.191.191-00";
cadastrarUsuarioModelCPF.celular = "(11) 98654-0484";
cadastrarUsuarioModelCPF.nome = "Sophie Novaes";
cadastrarUsuarioModelCPF.email = "sophiebarbararaquelnovaes_@velc.com.br";
cadastrarUsuarioModelCPF.senha = "q1a1z1";

const cadastrarUsuarioModelCNPJ = new CadastrarUsuarioModel();
cadastrarUsuarioModelCNPJ.tipoPessoa = "JURIDICA";
cadastrarUsuarioModelCNPJ.cpfCnpj = "26.358.437/0001-95";
cadastrarUsuarioModelCNPJ.celular = "(11) 98654-0484";
cadastrarUsuarioModelCNPJ.nome = "Amanda e Luan Comercio de Bebidas ME";
cadastrarUsuarioModelCNPJ.email = "financeiro@amandaeluancomerciodebebidasme.com.br";
cadastrarUsuarioModelCNPJ.senha = "q1a1z1";

describe("Cadastrar Usuário Pessoa Fisica Teste", () => {
  it("cadastrar usuário sem senha", () => {
    const cadastrarUsuarioModel = new CadastrarUsuarioModel();
    cadastrarUsuarioModel.tipoPessoa = cadastrarUsuarioModelCPF.tipoPessoa;
    cadastrarUsuarioModel.cpfCnpj = cadastrarUsuarioModelCPF.cpfCnpj;
    cadastrarUsuarioModel.celular = cadastrarUsuarioModelCPF.celular;
    cadastrarUsuarioModel.nome = cadastrarUsuarioModelCPF.nome;
    cadastrarUsuarioModel.email = cadastrarUsuarioModelCPF.email;
    cadastrarUsuarioModel.senha = undefined;

    assert.Throw(
      () => autenticarApplication.cadastrarNovoUsuario(cadastrarUsuarioModel),
      "Senha deve ser preenchida"
    );
  });
  it("cadastrar usuário sem email", () => {
    const cadastrarUsuarioModel = new CadastrarUsuarioModel();
    cadastrarUsuarioModel.tipoPessoa = cadastrarUsuarioModelCPF.tipoPessoa;
    cadastrarUsuarioModel.cpfCnpj = cadastrarUsuarioModelCPF.cpfCnpj;
    cadastrarUsuarioModel.celular = cadastrarUsuarioModelCPF.celular;
    cadastrarUsuarioModel.nome = cadastrarUsuarioModelCPF.nome;
    cadastrarUsuarioModel.email = undefined;
    cadastrarUsuarioModel.senha = cadastrarUsuarioModelCPF.senha;

    assert.Throw(
      () => autenticarApplication.cadastrarNovoUsuario(cadastrarUsuarioModel),
      "Email deve ser preenchido"
    );
  });
  it("cadastrar usuário sem tipoPessoa", () => {
    const cadastrarUsuarioModel = new CadastrarUsuarioModel();
    cadastrarUsuarioModel.tipoPessoa = undefined;
    cadastrarUsuarioModel.cpfCnpj = cadastrarUsuarioModelCPF.cpfCnpj;
    cadastrarUsuarioModel.celular = cadastrarUsuarioModelCPF.celular;
    cadastrarUsuarioModel.nome = cadastrarUsuarioModelCPF.nome;
    cadastrarUsuarioModel.email = cadastrarUsuarioModelCPF.email;
    cadastrarUsuarioModel.senha = cadastrarUsuarioModelCPF.senha;

    assert.Throw(
      () => autenticarApplication.cadastrarNovoUsuario(cadastrarUsuarioModel),
      "TipoPessoa deve ser preenchido"
    );
  });
  it("cadastrar usuário sem cpfCnpj", () => {
    const cadastrarUsuarioModel = new CadastrarUsuarioModel();
    cadastrarUsuarioModel.tipoPessoa = cadastrarUsuarioModelCPF.tipoPessoa;
    cadastrarUsuarioModel.cpfCnpj = undefined;
    cadastrarUsuarioModel.celular = cadastrarUsuarioModelCPF.celular;
    cadastrarUsuarioModel.nome = cadastrarUsuarioModelCPF.nome;
    cadastrarUsuarioModel.email = cadastrarUsuarioModelCPF.email;
    cadastrarUsuarioModel.senha = cadastrarUsuarioModelCPF.senha;

    assert.Throw(
      () => autenticarApplication.cadastrarNovoUsuario(cadastrarUsuarioModel),
      "CPF/CNPJ deve ser preenchido"
    );
  });
  it("cadastrar usuário sem celular", () => {
    const cadastrarUsuarioModel = new CadastrarUsuarioModel();
    cadastrarUsuarioModel.tipoPessoa = cadastrarUsuarioModelCPF.tipoPessoa;
    cadastrarUsuarioModel.cpfCnpj = cadastrarUsuarioModelCPF.cpfCnpj;
    cadastrarUsuarioModel.celular = undefined;
    cadastrarUsuarioModel.nome = cadastrarUsuarioModelCPF.nome;
    cadastrarUsuarioModel.email = cadastrarUsuarioModelCPF.email;
    cadastrarUsuarioModel.senha = cadastrarUsuarioModelCPF.senha;

    assert.Throw(
      () => autenticarApplication.cadastrarNovoUsuario(cadastrarUsuarioModel),
      "Celudar deve ser preenchido"
    );
  });
  it("cadastrar usuário sem nome", () => {
    const cadastrarUsuarioModel = new CadastrarUsuarioModel();
    cadastrarUsuarioModel.tipoPessoa = cadastrarUsuarioModelCPF.tipoPessoa;
    cadastrarUsuarioModel.cpfCnpj = cadastrarUsuarioModelCPF.cpfCnpj;
    cadastrarUsuarioModel.celular = cadastrarUsuarioModelCPF.nome;
    cadastrarUsuarioModel.nome = undefined;
    cadastrarUsuarioModel.email = cadastrarUsuarioModelCPF.email;
    cadastrarUsuarioModel.senha = cadastrarUsuarioModelCPF.senha;

    assert.Throw(
      () => autenticarApplication.cadastrarNovoUsuario(cadastrarUsuarioModel),
      "Celudar deve ser preenchido"
    );
  });
  it("cadastrar usuário vazio", () => {
    const cadastrarUsuarioModel = new CadastrarUsuarioModel();
    assert.Throw(() =>
      autenticarApplication.cadastrarNovoUsuario(cadastrarUsuarioModel)
    );
  });

  it("cadastrar usuário sucesso", () => {
    assert.doesNotThrow(() =>
    autenticarApplication.cadastrarNovoUsuario(cadastrarUsuarioModelCPF)
    );
  });
});

describe("Cadastrar Usuário Pessoa Juridica Teste", () => {
  it("cadastrar usuário sem senha", () => {
    const cadastrarUsuarioModel = new CadastrarUsuarioModel();
    cadastrarUsuarioModel.tipoPessoa = cadastrarUsuarioModelCNPJ.tipoPessoa;
    cadastrarUsuarioModel.cpfCnpj = cadastrarUsuarioModelCNPJ.cpfCnpj;
    cadastrarUsuarioModel.celular = cadastrarUsuarioModelCNPJ.celular;
    cadastrarUsuarioModel.nome = cadastrarUsuarioModelCNPJ.nome;
    cadastrarUsuarioModel.email = cadastrarUsuarioModelCNPJ.email;
    cadastrarUsuarioModel.senha = undefined;

    assert.Throw(
      () => autenticarApplication.cadastrarNovoUsuario(cadastrarUsuarioModel),
      "Senha deve ser preenchida"
    );
  });
  it("cadastrar usuário sem email", () => {
    const cadastrarUsuarioModel = new CadastrarUsuarioModel();
    cadastrarUsuarioModel.tipoPessoa = cadastrarUsuarioModelCNPJ.tipoPessoa;
    cadastrarUsuarioModel.cpfCnpj = cadastrarUsuarioModelCNPJ.cpfCnpj;
    cadastrarUsuarioModel.celular = cadastrarUsuarioModelCNPJ.celular;
    cadastrarUsuarioModel.nome = cadastrarUsuarioModelCNPJ.nome;
    cadastrarUsuarioModel.email = undefined;
    cadastrarUsuarioModel.senha = cadastrarUsuarioModelCNPJ.senha;

    assert.Throw(
      () => autenticarApplication.cadastrarNovoUsuario(cadastrarUsuarioModel),
      "Email deve ser preenchido"
    );
  });
  it("cadastrar usuário sem tipoPessoa", () => {
    const cadastrarUsuarioModel = new CadastrarUsuarioModel();
    cadastrarUsuarioModel.tipoPessoa = undefined;
    cadastrarUsuarioModel.cpfCnpj = cadastrarUsuarioModelCNPJ.cpfCnpj;
    cadastrarUsuarioModel.celular = cadastrarUsuarioModelCNPJ.celular;
    cadastrarUsuarioModel.nome = cadastrarUsuarioModelCNPJ.nome;
    cadastrarUsuarioModel.email = cadastrarUsuarioModelCNPJ.email;
    cadastrarUsuarioModel.senha = cadastrarUsuarioModelCNPJ.senha;

    assert.Throw(
      () => autenticarApplication.cadastrarNovoUsuario(cadastrarUsuarioModel),
      "TipoPessoa deve ser preenchido"
    );
  });
  it("cadastrar usuário sem cpfCnpj", () => {
    const cadastrarUsuarioModel = new CadastrarUsuarioModel();
    cadastrarUsuarioModel.tipoPessoa = cadastrarUsuarioModelCNPJ.tipoPessoa;
    cadastrarUsuarioModel.cpfCnpj = undefined;
    cadastrarUsuarioModel.celular = cadastrarUsuarioModelCNPJ.celular;
    cadastrarUsuarioModel.nome = cadastrarUsuarioModelCNPJ.nome;
    cadastrarUsuarioModel.email = cadastrarUsuarioModelCNPJ.email;
    cadastrarUsuarioModel.senha = cadastrarUsuarioModelCNPJ.senha;

    assert.Throw(
      () => autenticarApplication.cadastrarNovoUsuario(cadastrarUsuarioModel),
      "CPF/CNPJ deve ser preenchido"
    );
  });
  it("cadastrar usuário sem celular", () => {
    const cadastrarUsuarioModel = new CadastrarUsuarioModel();
    cadastrarUsuarioModel.tipoPessoa = cadastrarUsuarioModelCNPJ.tipoPessoa;
    cadastrarUsuarioModel.cpfCnpj = cadastrarUsuarioModelCNPJ.cpfCnpj;
    cadastrarUsuarioModel.celular = undefined;
    cadastrarUsuarioModel.nome = cadastrarUsuarioModelCNPJ.nome;
    cadastrarUsuarioModel.email = cadastrarUsuarioModelCNPJ.email;
    cadastrarUsuarioModel.senha = cadastrarUsuarioModelCNPJ.senha;

    assert.Throw(
      () => autenticarApplication.cadastrarNovoUsuario(cadastrarUsuarioModel),
      "Celudar deve ser preenchido"
    );
  });
  it("cadastrar usuário sem nome", () => {
    const cadastrarUsuarioModel = new CadastrarUsuarioModel();
    cadastrarUsuarioModel.tipoPessoa = cadastrarUsuarioModelCNPJ.tipoPessoa;
    cadastrarUsuarioModel.cpfCnpj = cadastrarUsuarioModelCNPJ.cpfCnpj;
    cadastrarUsuarioModel.celular = cadastrarUsuarioModelCNPJ.nome;
    cadastrarUsuarioModel.nome = undefined;
    cadastrarUsuarioModel.email = cadastrarUsuarioModelCNPJ.email;
    cadastrarUsuarioModel.senha = cadastrarUsuarioModelCNPJ.senha;

    assert.Throw(
      () => autenticarApplication.cadastrarNovoUsuario(cadastrarUsuarioModel),
      "Celudar deve ser preenchido"
    );
  });
  it("cadastrar usuário vazio", () => {
    const cadastrarUsuarioModel = new CadastrarUsuarioModel();
    assert.Throw(() =>
      autenticarApplication.cadastrarNovoUsuario(cadastrarUsuarioModel)
    );
  });

  it("cadastrar usuário sucesso", () => {
    assert.doesNotThrow(() =>
    autenticarApplication.cadastrarNovoUsuario(cadastrarUsuarioModelCPF)
    );
  });
});

