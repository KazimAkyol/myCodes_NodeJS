"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

// $ npm init -y => create package.json
// $ npm i express dotenv express-async-errors mongoose
// $ echo PORT=8000 > .env
// cat > .gitignore && paste gitignore content & ctrl+c
// $ nodemon

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */

// Parse data
app.use(express.json());

// Catch error from async
require("express-async-errors");

// DB Connection
// const dbConnection = require('./src/dbConnection');
// dbConnection()
require("./src/dbConnection")();

/* ------------------------------------------------------- */
//* SessionCookies
// https://expressjs.com/en/resources/middleware/cookie-session.html
// https://www.npmjs.com/package/cookie-session
// $ npm i cookie-session

const session = require("cookie-session"); // Session is a middleware

app.use(
  session({
    // Options
    secret: process.env.SECRET_KEY, // to encrypte cookies and session
    maxAge: 1000 * 60 * 60 * 24 * 2, // miliSeconds // 2 days
  })
);

/* ------------------------------------------------------- */
//* Routes

// Main route
app.all("/", (req, res) => {
  res.send({
    error: false,
    message: "WELCOME TO BLOG API",
    session: req.session,
  });
});

// blog & user & auth routes
app.use("/blog", require("./src/routes/blogRouter"));
app.use("/user", require("./src/routes/userRouter"));
app.use("/auth", require("./src/routes/authRouter"));

// Error Handler:
app.use(require("./src/middlewares/errorHandler"));

/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
