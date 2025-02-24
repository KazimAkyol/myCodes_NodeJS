"use strict";

/* ------------------------------------------------------------------ *
                   EXPRESSJS - ROUTING
/* ------------------------------------------------------------------ */

//* express.Router()
// const express = require("express");
// const router = express.Router();

const router = require("express").Router(); //* router isminde bir degiskeni require yardimiyla express kütüphanesi dahil edilerek Router methodu cagirilarak tanimlanir.

router.get("/", (req, res) => res.send({ message: "Home Page" }));
router.get("/about", (req, res) => res.send({ message: "About Page" }));
router.get("/user/:id", (req, res) => res.send({ message: req.params.id }));
