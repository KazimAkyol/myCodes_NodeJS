"use strict";

/* -------------------------------------------------------
         EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

// $ npm init -y
// $ npm i express dotenv express-async-errors
// $ echo PORT=8000 > .env
// $ npm i sequelize sqlite
// $ nodemon

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
//* Accept json data
app.use(express.json());

app.all("/", (req, res) => {
  res.send("WELCOME TO TODO API");
});

/* ------------------------------------------------------- */
//* Sequelize
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */

app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
