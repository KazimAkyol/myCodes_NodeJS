"use strict";
/* -------------------------------------------------------
         EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
// Call Model;

const User = require('../models/userModel')

module.exports = {
  login: async (req, res) => {

    const {email,password} = req.body

    //* email ve password'ü gönderip göndermedigini kontrol etmek icin:

    if (email && password) {

        const user = await User.findOne({email})

        if(user) {
            res.send({
                error: false,
              })
        }

        

    } else {
        res.errorStatusCode = 401
        throw new Error('Email and Password required.')
    }

    
  },

  logout: async (req, res) => {
    res.send({
      error: false,
    });
  },
};
