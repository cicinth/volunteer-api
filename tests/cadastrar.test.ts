import { assert, expect } from "chai";
import { TesteDiInit } from "../src";
import { IAutenticarApplication } from "../src/application";
import { CadastrarUsuarioModel } from "../src/application/model";

const container = TesteDiInit();

const autenticarApplication = container.resolve<IAutenticarApplication>(
  "autenticarApplication"
);

const getCadastrarUsuarioModelCPF = (): CadastrarUsuarioModel => {
  const cadastrarUsuarioModelCPF = new CadastrarUsuarioModel();
  cadastrarUsuarioModelCPF.tipoPessoa = "FISICA";
  cadastrarUsuarioModelCPF.cpfCnpj = "191.191.191-00";
  cadastrarUsuarioModelCPF.celular = "(11) 98654-0484";
  cadastrarUsuarioModelCPF.nome = "Sophie Novaes";
  cadastrarUsuarioModelCPF.email = "sophiebarbararaquelnovaes_@velc.com.br";
  cadastrarUsuarioModelCPF.senha = "q1a1z1";
  cadastrarUsuarioModelCPF.dtNascimento = new Date();
  return cadastrarUsuarioModelCPF;
};
const getCadastrarUsuarioModelCNPJ = (): CadastrarUsuarioModel => {
  const cadastrarUsuarioModelCNPJ = new CadastrarUsuarioModel();
  cadastrarUsuarioModelCNPJ.tipoPessoa = "JURIDICA";
  cadastrarUsuarioModelCNPJ.cpfCnpj = "26.358.437/0001-95";
  cadastrarUsuarioModelCNPJ.celular = "(11) 98654-0484";
  cadastrarUsuarioModelCNPJ.nome = "Amanda e Luan Comercio de Bebidas ME";
  cadastrarUsuarioModelCNPJ.email =
    "financeiro@amandaeluancomerciodebebidasme.com.br";
  cadastrarUsuarioModelCNPJ.senha = "q1a1z1";
  cadastrarUsuarioModelCNPJ.dtNascimento = new Date();
  return cadastrarUsuarioModelCNPJ;
};

describe("Cadastrar Usuário Pessoa Fisica Teste", () => {
  it("cadastrar usuário sem senha", () => {
    const cadastrarUsuarioModel = getCadastrarUsuarioModelCPF();
    cadastrarUsuarioModel.senha = undefined;

    autenticarApplication
      .cadastrarNovoUsuarioAsync(cadastrarUsuarioModel)
      .catch((ex) => {
        assert.equal(ex.message, "Senha deve ser preenchida");
      });
  });

  it("cadastrar usuário sem email", () => {
    const cadastrarUsuarioModel = getCadastrarUsuarioModelCPF();
    cadastrarUsuarioModel.email = undefined;

    autenticarApplication
      .cadastrarNovoUsuarioAsync(cadastrarUsuarioModel)
      .catch((ex) => {
        assert.equal(ex.message, "Email deve ser preenchido");
      });
  });
  it("cadastrar usuário sem tipoPessoa", () => {
    const cadastrarUsuarioModel = getCadastrarUsuarioModelCPF();
    cadastrarUsuarioModel.tipoPessoa = undefined;

    autenticarApplication
      .cadastrarNovoUsuarioAsync(cadastrarUsuarioModel)
      .catch((ex) => {
        assert.equal(ex.message, "TipoPessoa deve ser preenchido");
      });
  });

  it("cadastrar usuário sem cpf", () => {
    const cadastrarUsuarioModel = getCadastrarUsuarioModelCPF();
    cadastrarUsuarioModel.cpfCnpj = undefined;

    autenticarApplication
      .cadastrarNovoUsuarioAsync(cadastrarUsuarioModel)
      .catch((ex) => {
        assert.equal(ex.message, "CPF/CNPJ deve ser preenchido");
      });
  });

  it("cadastrar usuário com cpf inválido", () => {
    const cadastrarUsuarioModel = getCadastrarUsuarioModelCPF();
    cadastrarUsuarioModel.cpfCnpj = "191.191.191-11";

    autenticarApplication
      .cadastrarNovoUsuarioAsync(cadastrarUsuarioModel)
      .catch((ex) => {
        assert.equal(ex.message, "Digite um CPF válido");
      });
  });

  it("cadastrar usuário sem celular", () => {
    const cadastrarUsuarioModel = getCadastrarUsuarioModelCPF();
    cadastrarUsuarioModel.celular = undefined;

    autenticarApplication
      .cadastrarNovoUsuarioAsync(cadastrarUsuarioModel)
      .catch((ex) => {
        assert.equal(ex.message, "Celular deve ser preenchido");
      });
  });
  it("cadastrar usuário sem nome", () => {
    const cadastrarUsuarioModel = getCadastrarUsuarioModelCPF();
    cadastrarUsuarioModel.nome = undefined;
    autenticarApplication
      .cadastrarNovoUsuarioAsync(cadastrarUsuarioModel)
      .catch((ex) => {
        assert.equal(ex.message, "Nome deve ser preenchido");
      });
  });
  it("cadastrar usuário vazio", () => {
    const cadastrarUsuarioModel = new CadastrarUsuarioModel();
    autenticarApplication
      .cadastrarNovoUsuarioAsync(cadastrarUsuarioModel)
      .catch((ex) => {
        assert.Throw(() => {
          throw ex;
        });
      });
  });

  it("cadastrar usuário sucesso", () => {
    const cadastrarUsuarioModel = getCadastrarUsuarioModelCPF();
    autenticarApplication
      .cadastrarNovoUsuarioAsync(cadastrarUsuarioModel)
      .then(() => {
        assert.ok(true);
      })
      .catch((ex) => {
        assert.fail(ex.message);
      });
  });
});

describe("Cadastrar Usuário Pessoa Juridica Teste", () => {
  it("cadastrar usuário sem cnpj", () => {
    const cadastrarUsuarioModel = getCadastrarUsuarioModelCNPJ();
    cadastrarUsuarioModel.cpfCnpj = undefined;
    autenticarApplication
      .cadastrarNovoUsuarioAsync(cadastrarUsuarioModel)
      .catch((ex) => {
        assert.equal(ex.message, "CPF/CNPJ deve ser preenchido");
      });
  });

  it("cadastrar usuário com cnpj inválido", () => {
    const cadastrarUsuarioModel = getCadastrarUsuarioModelCNPJ();
    cadastrarUsuarioModel.cpfCnpj = "26.328.457/0001-95";
    autenticarApplication
      .cadastrarNovoUsuarioAsync(cadastrarUsuarioModel)
      .catch((ex) => {
        assert.equal(ex.message, "Digite um CNPJ válido");
      });
  });

  it("cadastrar usuário sucesso", () => {
    const cadastrarUsuarioModel = getCadastrarUsuarioModelCNPJ();
    autenticarApplication.cadastrarNovoUsuarioAsync(
      cadastrarUsuarioModel
    ).then(()=>{
      assert.ok(true);
    }).catch(ex=>{
      assert.fail(ex.message);
    })
  });
});
