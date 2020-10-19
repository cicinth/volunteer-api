import { IAutenticarApplication } from "../../application";
import * as express from "express";
import AutenticarController from "../controllers/autenticarController";
export default (appExpress:express.Router,autenticarController: AutenticarController)  => {
  appExpress.get("/autenticar", (req,res)=> autenticarController.autenticarAsync(req,res));
}
