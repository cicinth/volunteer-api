import * as awilix from "awilix";
import initDomain from "./domain/initDomain";
import initData, { initDataFake } from "./data/initData";
import initApplication from "./application/initApplication";
import initApi from "./api/initApi";
// Create the container and set the injectionMode to PROXY (which is also the default).

function ValidarEnv(){
  let isError = false;
  if (!process.env.SECRET) {
    console.error("Env. [SECRET]:STRING não está definido");
    isError = true;
  }

  if (!process.env.SESSION_USR_EXPIRE_IN) {
    console.error("Env. [SESSION_USR_EXPIRE_IN]:NUMBER não está definido");
    isError = true;
  }

  if (!process.env.EXPRESS_PORT) {
    console.warn("Env. [EXPRESS_PORT]:NUMBER não está definido será usado a porta 3000");
    process.env.EXPRESS_PORT = "3000";
  }

  return isError;
}

export default (() => {

  if(ValidarEnv())
  {
    return;
  }

  const container = awilix.createContainer({
    injectionMode: awilix.InjectionMode.PROXY,
  });

  initDataFake(container);
  initDomain(container);
  initApplication(container);
  initApi(container);
})();

export const TesteDiInit = () => {
  const container = awilix.createContainer({
    injectionMode: awilix.InjectionMode.PROXY,
  });

  initDataFake(container);
  initDomain(container);
  initApplication(container);
  return container;
};
