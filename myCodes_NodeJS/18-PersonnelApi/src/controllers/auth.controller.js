"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */

const Personnel = require("../models/personnel.model");

module.exports = {
    login: async (req,res) => {

        res.status(200).send({
            error: false
        })
    }
}