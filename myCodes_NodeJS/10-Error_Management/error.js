"use strict";
/* -------------------------------------------------------
                EXPRESSJS - ERROR MANAGEMENT
------------------------------------------------------- */

// $ npm init -y => create package.json
// $ npm i express dotenv
// $ echo PORT=8000 > .env
// cat > .gitignore && paste gitignore content & ctrl+c
// $ nodemon

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/*------------------------------------------------------ *
//* throw

//* 1- json veri göndermemiz lazim
//* 2-her hatada bizim bildigimiz formatta gönderilmeli

app.get("/user/:id", (req, res) => {
  const id = req.params.id;
  if (isNaN(id)) {
    res.errorStatusCode = 400;
    throw new Error("ID is not a number", { cause: "params.id=" + id });
  } else {
    res.send({
      error: false,
      id,
    });
  }
});

/*------------------------------------------------------ *
//* try-catch

app.get("/user/:id", (req, res, next) => {
  const id = req.params.id;

  try {
    if (isNaN(id)) {
      throw new Error("ID is not a number");
    } else {
      res.send({
        error: false,
        id,
      });
    }
  } catch (error) {
    // console.log(error);
    // res.send({
    //   error: true,
    //   message: error.message,
    // });
    //* to send this error to errorHandler middleware
    next(err); // if you send error in the next method, it goes directly to the error handler middleware function.
  }
});

//* middleware fonksiyonunun calismasi icin try-catch blogunda next(err) yazarak errorHandler'a yönlendirme yapilarak(middleware fonksiyonunun calisma sistemi) Terminal'de console'a yazilan yazi görülür. Burada 'error handler worked' yazdirildi.

/*------------------------------------------------------ *
//* async-functions

const asyncFn = async () => {
  throw new Error("Created error in async-fn");
};

app.get("/async", async (req, resizeBy, next) => {
  await asyncFn().catch(next);
});

/*------------------------------------------------------ */
//* express-async-errors

//* Proje durdurulur ve npm adresinden express-async-errors kurulumu (npm i express-async-errors) Terminal'de yapildiktan sonra nodemon ile tekrar calistirilir.
//* This module helps errorHandler to catch async errors.

require("express-async-errors");

app.get("/async", async (req, res, next) => {
  res.errorStatusCode = 400;
  throw new Error("Created error in self-async-fn");
});

/*------------------------------------------------------ */
/*------------------------------------------------------ */

app.listen(PORT, () => console.log("Running http://127.0.0.1:" + PORT));
