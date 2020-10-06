import awilix,{ Lifetime,AwilixContainer } from "awilix";
import * as express from 'express';
import { Router } from "express";
import AutenticarController from "./autenticar/autenticarController";

export interface ApiRegisterType
{
    authController:AutenticarController,
    router:Router
}


export default (container: AwilixContainer) => {
    container.register({
        authController: awilix.asClass(AutenticarController,{ lifetime: Lifetime.SINGLETON }),
        router: awilix.asFunction(express.Router(),{ lifetime: Lifetime.SINGLETON }),
      })
};
