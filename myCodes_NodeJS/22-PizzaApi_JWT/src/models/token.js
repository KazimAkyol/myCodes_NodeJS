"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const { mongoose } = require("../configs/dbConnection");
/* ------------------------------------------------------- */

const TokenSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true,
        index: true,
    },

    token: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        index: true,
    },
}, { collection: "tokens", timestamps: true });

module.exports = mongoose.model("Token", TokenSchema);

