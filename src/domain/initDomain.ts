import * as awilix from "awilix";
import { Lifetime } from "awilix";
import { IUsuarioRepository, UsuarioRepositoryFake } from "../data/repository";
import { UsuarioDomain, IUsuarioDomain } from "./usuario/usuarioDomain";

export interface DomainRegisterType
{
  autenticarDomain:IUsuarioDomain,
  usuarioRepository:IUsuarioRepository
  criptografiaDomain:ICriptografiaDomain
}

export default (container: awilix.AwilixContainer) => {
    
    container.register({
        authController: awilix.asClass<IUsuarioDomain>(UsuarioDomain,{ lifetime: Lifetime.SINGLETON }),
        criptografiaDomain:awilix.asClass<ICriptografiaDomain>(CriptografiaDomain,{ lifetime: Lifetime.SINGLETON }),
      })
};