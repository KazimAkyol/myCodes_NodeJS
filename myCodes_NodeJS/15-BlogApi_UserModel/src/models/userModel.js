"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const mongoose = require("mongoose");

/* -------------------------------------------------------*/

const userSchema = new mongoose.Schema(
  {
    // _id: ,

    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      trim: true,
      required: true,
    },

    firstName: String,

    lastName: String,
  },
  {
    collection: "users",
  }
);

module.exports = mongoose("User", userSchema);
