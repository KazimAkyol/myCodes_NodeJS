/* -------------------------------------------------------
        EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const router = require("express").Router(); //* router' tanimliyoruz
const auth = require("../controllers/authController"); //* 

/* ----------------------------------------------------- */
// URL: /auth ->

router.post("/login", auth.login);

/* ----------------------------------------------------- */

module.exports = router;
