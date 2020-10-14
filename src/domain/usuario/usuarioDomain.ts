import { IUsuarioEntity } from "../../entities";
import { IUsuarioRepository } from "../../data/repository";
import { DomainRegisterType } from "../initDomain";
import { ICriptografiaDomain } from "../criptografia/criptografiaDomain";

export interface IUsuarioDomain
{
    autenticarUsuario(usuario:string,senha:string):IUsuarioEntity
}

export class UsuarioDomain implements IUsuarioDomain
{
    usuarioRepository:IUsuarioRepository
    criptografiaDomain: ICriptografiaDomain;

    constructor(props:DomainRegisterType)
    {
        this.usuarioRepository = props.usuarioRepository;
        this.criptografiaDomain = props.criptografiaDomain;
    }

    autenticarUsuario(usuario:string,senha:string): IUsuarioEntity {
        const usuarioEntity = this.usuarioRepository.getUsuario(usuario);
            if(usuarioEntity.senha !== this.criptografiaDomain.criptografar(senha))
            {
                throw new Error("Usuário ou senha inválidos");
            }

        return usuarioEntity;
    }

}


