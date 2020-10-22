import * as jwt from "jsonwebtoken";

export function verificarJWT(req: any, res: any, next: any) {
  var token = req.headers["x-access-token"];
  if (!token)
    return res
      .status(401)
      .json({ auth: false, message: "Token não foi enviado" });

  var secret: jwt.Secret = process.env.SECRET!;
  jwt.verify(token, secret, function (err: any, decoded: any) {
    if (err)
      return res
        .status(500)
        .json({ auth: false, message: "Falha na autenticação com o token" });

    res.json(decoded.usuario);
    next();
  });
}
