import { Router } from "express";
import { ApiRegisterType } from "../initApi";

export default (opts:ApiRegisterType) =>{
    opts.router.get("/autenticar",async (req, res)=> opts.authController.autenticar);
}