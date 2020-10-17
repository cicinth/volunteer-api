import { assert, expect } from "chai";
import { ValidarUtil } from "../src/util";

describe("Validações Teste", () => {
  it("CPF valido", () => {
    assert.isTrue(ValidarUtil.isCPFValido("191.191.191.00"));
  });
  it("CPF inválido", () => {
    assert.isNotTrue(ValidarUtil.isCPFValido(""));
    assert.isNotTrue(ValidarUtil.isCPFValido("191.191.191.11"));
  });

  it("CNPJ valido", () => {
    assert.isTrue(ValidarUtil.isCNPJValido("63.626.234/0001-69"));
  });
  it("CNPJ inválido", () => {
    assert.isNotTrue(ValidarUtil.isCNPJValido(""));
    assert.isNotTrue(ValidarUtil.isCNPJValido("63.626.555/0001-11"));
  });

  it("E-mail valido", () => {
    assert.isTrue(
      ValidarUtil.isEmailValido("sophiebarbararaquelnovaes_@velc.com.br")
    );
  });
  it("E-mail inválido", () => {
    assert.isNotTrue(ValidarUtil.isEmailValido(""));
    assert.isNotTrue(
      ValidarUtil.isEmailValido("sophi!!@ebarbararaquelnovaes_@velc.com.br")
    );
  });

  it("Celular valido", () => {
    assert.isTrue(ValidarUtil.isCelularValido("11988884444"));
  });
  it("Celular inválido", () => {
    assert.isNotTrue(ValidarUtil.isCelularValido(""));
    assert.isNotTrue(ValidarUtil.isCelularValido("555558888"));
  });
});
