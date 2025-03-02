"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const router = require("express").Router();

const blogCategory = require("../controllers/blogController");

/* ------------------------------------------------------- */
// URL: /blog ->

router.route("/blog").get(blogCategory.list).post(blogCategory.create);

/* ------------------------------------------------------- */
module.exports = router;
