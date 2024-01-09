const argon = require("argon2");
const jwt = require("jsonwebtoken");

const hashingOptions = {
  type: argon.argon2id,
  memoryCost: 19 * 2 ** 10 /* 19 Mio en kio (19 * 1024 kio) */,
  timeCost: 2,
  parallelism: 1,
};

const hashPassword = async (req, res, next) => {
  try {
    const { Password } = req.body;
    const hash = await argon.hash(Password, hashingOptions);
    req.body.Password = hash;
    next();
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const comparePassword = async (hash, password) => {
  return argon.verify(hash, password);
};

const isAuth = async (req, res, next) => {
  try {
    const token = req.cookies["auth-token"];
    const decoded = jwt.verify(token, process.env.APP_SECRET);
    req.body.userID = decoded.id;
    next();
  } catch (error) {
    res.status(401).json(error.message);
  }
};

module.exports = {
  hashPassword,
  comparePassword,
  isAuth,
};
