import * as awilix from "awilix";
import { Lifetime } from "awilix";
import { IUsuarioRepository, UsuarioRepository, UsuarioRepositoryFake } from "./repository/usuario/usuarioRepository";

export default (container: awilix.AwilixContainer) => {
    container.register({
        usuarioRepository: awilix.asClass<IUsuarioRepository>(UsuarioRepository,{ lifetime: Lifetime.SINGLETON }),
      })
};

export const initDataFake = (container: awilix.AwilixContainer) => {
    container.register({
        usuarioRepository: awilix.asClass<IUsuarioRepository>(UsuarioRepositoryFake,{ lifetime: Lifetime.SINGLETON }),
      })
};