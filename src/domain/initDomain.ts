import * as awilix from "awilix";
import { Lifetime } from "awilix";
import { IAcaoDomain } from ".";
import { IAcaoRepository } from "../data/repository";
import { IUsuarioRepository } from "../data/repository";
import { AcaoDomain } from "./acoes/acaoDomain";
import { CriptografiaDomain, ICriptografiaDomain } from "./criptografia/criptografiaDomain";
import { UsuarioDomain, IUsuarioDomain } from "./usuario/usuarioDomain";

export interface DomainRegisterType
{
  usuarioDomain:IUsuarioDomain,
  criptografiaDomain:ICriptografiaDomain
  usuarioRepository:IUsuarioRepository,
  acaoRepository:IAcaoRepository
}

export default (container: awilix.AwilixContainer) => {
    
    container.register({
        usuarioDomain: awilix.asClass<IUsuarioDomain>(UsuarioDomain,{ lifetime: Lifetime.SINGLETON }),
        criptografiaDomain:awilix.asClass<ICriptografiaDomain>(CriptografiaDomain,{ lifetime: Lifetime.SINGLETON }),
        acaoDomain:awilix.asClass<IAcaoDomain>(AcaoDomain,{ lifetime: Lifetime.SINGLETON }),
      })
};