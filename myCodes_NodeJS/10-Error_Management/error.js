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

/*------------------------------------------------------ */
//* throw

//* 1- json veri göndermemiz lazim
//* 2-her hatada bizim bildigimiz formatta gönderilmeli

app.get("/user/:id", (req, res) => {
  const id = req.params.id;
  if (isNaN(id)) {
    res.errorStatusCode = 400;
    throw new Error("ID is not a number", { cause: "paramas.id" + id });
  } else {
    res.send({
      error: false,
      id,
    });
  }
});

/*------------------------------------------------------ */
/*------------------------------------------------------ */
/*------------------------------------------------------ */
/*------------------------------------------------------ */
/*------------------------------------------------------ */

app.listen(PORT, () => console.log("Running http://127.0.0.1: + PORT"));
