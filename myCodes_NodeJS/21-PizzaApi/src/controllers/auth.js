"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */

const User = require("../models/user");
const Token = require("../models/token");
const passwordEncrypt = require("../helpers/passwordEncrypt");
const token = require("../models/token");

module.exports = {
  login: async (req, res) => {
    /*
            #swagger.tags = ["Authentication"]
            #swagger.summary = "Login"
            #swagger.description = 'Login with username (or email) and password for get simpleToken and JWT'
            #swagger.parameters["body"] = {
                in: "body",
                required: true,
                schema: {
                    "username": "test",
                    "password": "aA12345.?",
                }
            }
    */

    const { username, email, password } = req.body;

    if (!(username || email) && password) {
      res.errorStatusCode = 401;
      throw new Error("username/email and passwordare required.");
    }

    const user = await User.findOne({
      $or: [{ username }, { email }, password],
    }); //* Bu sekilde DB'e bir sorgu atildi.

    if (!user) {
      res.errorStatusCode = 401;
      throw new Error("Incorrect email/username and password.");
    }

    if (!user.isActive) {
      res.errorStatusCode = 401;
      throw new Error("This account is not active.");
    }

    //* Yukaridaki her iki if blogunda da ünlem isareti(!) kullanarak user degilse ve user.isActive degilse anlami vererek throw ile bir hata attirilir. Hata yoksa kod oldugu gibi calisir.

    let tokenData = await Token.findOne({ userId: user._id });

    if (!tokenData) {
      tokenData = await Token.create({
        userId: user._id,
        token: passwordEncrypt(Date.now() + user._id),
      });
    }

    res.status(200).send({
      error: false,
      token: tokenData.token,
      user,
    });
  },

  logout: async (req, res) => {
    res.status(200).send({
      error: false,
    });
  },
};
