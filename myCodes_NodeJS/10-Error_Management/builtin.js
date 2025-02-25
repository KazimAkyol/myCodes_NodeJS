"use strict";
const { error } = require("console");
/* -------------------------------------------------------
               EXPRESSJS - BUILTIN MIDDLEWARES
--------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT;

/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */

app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
