import awilix,{ Lifetime,AwilixContainer } from "awilix";
import * as express from 'express';
import { Router } from "express";
import AuthController from "./auth/authController";

export interface ApiRegisterType
{
    authController:AuthController,
    router:Router
}


export default (container: AwilixContainer) => {
    container.register({
        authController: awilix.asClass(AuthController,{ lifetime: Lifetime.SINGLETON }),
        router: awilix.asFunction(express.Router(),{ lifetime: Lifetime.SINGLETON }),
      })
};
