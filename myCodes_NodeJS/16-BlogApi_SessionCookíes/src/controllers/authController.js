"use strict";
/* -------------------------------------------------------
         EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
// Call Model;

const User = require("../models/userModel");

module.exports = {
  login: async (req, res) => {
    const { email, password } = req.body;

    //* email ve password'ü gönderip göndermedigini kontrol etmek icin:

    if (email && password) {
      const user = await User.findOne({ email, password }); // findOne runs set method as a defult

      //* Gönderilen Email ve Password DB ile eslesiyor mu? Register islemi yapan kullanici icin Login islemi basarilidir. Daha önce Register islemi yapmamis kullanici DB'de bulunamaz.

      if (user) {
        res.send({
          error: false,
          message: "login OK",
        });
      } else {
        res.errorStatusCode = 401;
        throw new Error("User credentials are wrong.");
      }
    } else {
      res.errorStatusCode = 401;
      throw new Error("Email and Password required.");
    }
  },

  logout: async (req, res) => {
    res.send({
      error: false,
    });
  },
};
