import * as awilix from "awilix";
import { Lifetime } from "awilix";
import { IUsuarioDomain } from "../domain";
import {
  AutenticarApplication,
  IAutenticarApplication,
} from "./autentincarApplication";

export interface ApplicationRegisterType {
  usuarioDomain: IUsuarioDomain;
}

export default (container: awilix.AwilixContainer) => {
  container.register({
    autenticarApplication: awilix.asClass<IAutenticarApplication>(
      AutenticarApplication,
      { lifetime: "SINGLETON" }
    ),
  });
};
