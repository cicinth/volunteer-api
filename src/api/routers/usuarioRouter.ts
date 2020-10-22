import * as express from "express";
import UsuarioController from "../controllers/usuarioController";
import { verificarJWT } from "./jwt/jwtUtil";

export default (
  appExpress: express.Router,
  usuarioController: UsuarioController
) => {
  appExpress.get("/usuario", verificarJWT, (req, res) =>
    usuarioController.usuarioAsync(req, res)
  );
};
