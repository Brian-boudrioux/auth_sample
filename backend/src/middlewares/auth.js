const argon = require("argon2");

const hashingOptions = {
  type: argon.argon2id,
  memoryCost: 19 * 2 ** 10 /* 19 Mio en kio (19 * 1024 kio) */,
  timeCost: 2,
  parallelism: 1,
};

const hashPassword = async (req, res, next) => {
  const { Password } = req.body;

  try {
    const hash = await argon.hash(Password, hashingOptions);
    req.body.Password = hash;
    next();
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = {
  hashPassword,
};
