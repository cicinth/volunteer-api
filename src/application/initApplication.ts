import * as awilix from "awilix";
import { Lifetime } from "awilix";
import { IAcaoDomain, IUsuarioDomain } from "../domain";
import { AcaoApplication, IAcaoApplication } from "./acaoApplication";
import {
  AutenticarApplication,
  IAutenticarApplication,
} from "./autentincarApplication";

export interface ApplicationRegisterType {
  usuarioDomain: IUsuarioDomain;
  acaoDomain: IAcaoDomain;
}

export default (container: awilix.AwilixContainer) => {
  container.register({
    autenticarApplication: awilix.asClass<IAutenticarApplication>(
      AutenticarApplication,
      { lifetime: "SINGLETON" }
    ),
    acaoApplication: awilix.asClass<IAcaoApplication>(AcaoApplication, {
      lifetime: "SINGLETON",
    }),
  });
};
