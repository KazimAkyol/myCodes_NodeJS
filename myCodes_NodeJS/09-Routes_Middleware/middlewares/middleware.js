"use strict";

/* ------------------------------------------------------------------------ *
                           EXPRESSJS - MIDDLEWARES
/* ------------------------------------------------------------------------ */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT;

/* ------------------------------------------------------------------------ */
//* Middleware functions must has three parameters.
//* Last parameter is for next()

//* Route-Middleware
app.get("/", (req, res, next) => {
  console.log("Middleware started.");
  next();
});

//* Route-Path
app.get("/", (req, res) => {
  console.log("Route started.");

  res.send({
    message: "Hello Cohort DE-10",
  });
});

/* ------------------------------------------------------------------------ */

//* Sending data from middleware to others routes.
app.get("/", (req, res, next) => {
  if (req.query.username) {
    req.username = req.query?.username;
    next();
  } else {
    req.send({
      message: "username is wrong",
    });
  }
});
/* ------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------ */

app.listen(PORT, () => console.log("Running at: http://127.0.0.1:" + PORT));
