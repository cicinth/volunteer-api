const db = require("../../../config/database");

const crypto = require("crypto");
const DADOS_CRIPTOGRAFAR = {
  algoritmo : "aes256",
  segredo : "chaves"
};

const cipher = crypto.createCipher(DADOS_CRIPTOGRAFAR.algoritmo, DADOS_CRIPTOGRAFAR.segredo);

module.exports = createUser= async (req, res) => {
  const { email, password, type } = req.body;


  const senha =  cipher.update(password);
  const { rows } = await db.query(
    "INSERT INTO usuario (email, password, type) VALUES ($1, $2, $3)",
    [email, senha, type]
  );

  res.status(201).send({
    message: "User added successfully!",
    body: {
      product: { email, password, type }
    },
  });
};