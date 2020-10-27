import { expect } from "chai";
import { ValidarUtil } from "../../src/util";

describe("Validações Teste", () => {
  it("CPF valido", () => {
    expect(ValidarUtil.isCPFValido("191.191.191.00")).eq(true);
  });
  it("CPF inválido", () => {
    expect(ValidarUtil.isCPFValido("")).eq(false);
    expect(ValidarUtil.isCPFValido("111.222.333.44")).eq(false);
  });

  it("CNPJ valido", () => {
    expect(ValidarUtil.isCNPJValido("63.626.234/0001-69")).eq(true);
  });
  it("CNPJ inválido", () => {
    expect(ValidarUtil.isCNPJValido("")).eq(false);
    expect(ValidarUtil.isCNPJValido("63.626.555/0001-11")).eq(false);
  });

  it("E-mail valido", () => {
      expect(ValidarUtil.isEmailValido("sophiebarbararaquelnovaes_@velc.com.br")).eq(true);
  });
  it("E-mail inválido", () => {
    expect(ValidarUtil.isEmailValido("")).eq(false);
    expect(ValidarUtil.isEmailValido("sophi!!@ebarbararaquelnovaes_@velc.com.br")).eq(false);
  });

  it("Celular valido", () => {
    expect(ValidarUtil.isCelularValido("11988884444")).eq(true);
  });
  it("Celular inválido", () => {
    expect(ValidarUtil.isCelularValido("")).eq(false);
    expect(ValidarUtil.isCelularValido("555558888")).eq(false);
  });
});
