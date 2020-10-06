import { Router } from "express";
import { ApiRegisterType } from "../initApi";

export default (opts:ApiRegisterType) =>{
    opts.router.get("/autenticar",async (req, res)=> {

        const usuario = req.body.usuario;
        const senha = req.body.senha;

        opts.authController.autenticar(usuario,senha);        
    });
}