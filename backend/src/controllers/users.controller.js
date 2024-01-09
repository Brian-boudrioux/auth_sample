const argon = require("argon2");
const jwt = require("jsonwebtoken");
const userModel = require("../models/users.model");

const add = async (req, res, next) => {
  try {
    const user = req.body;
    const [result] = await userModel.insert(user);

    if (result.insertId) {
      const [[newUser]] = await userModel.findById(result.insertId);
      res.status(201).json(newUser);
    } else res.sendStatus(422);
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { Email, Password } = req.body;
    const [[user]] = await userModel.findByEmail(Email);
    if (!user) res.sendStatus(422);
    else if (await argon.verify(user.Password, Password)) {
      const token = jwt.sign(
        { id: user.id_Users, admin: user.Admin },
        process.env.APP_SECRET,
        { expiresIn: "30d" }
      );
      res.cookie("token", token, {
        expire: "30d",
        httpOnly: true,
        sameSite: "none",
        domain: process.env.FRONTEND_URL,
      });
      res.status(200).json(user);
    } else res.sendStatus(422);
  } catch (error) {
    next(error);
  }
};

const getAll = async (req, res, next) => {
  try {
    const [users] = await userModel.findAll();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  add,
  login,
  getAll,
};
