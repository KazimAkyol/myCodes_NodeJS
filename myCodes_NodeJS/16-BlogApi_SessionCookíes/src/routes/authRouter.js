/* -------------------------------------------------------
        EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const router = require("express").Router(); //* router'i tanimliyoruz.
const auth = require("../controllers/authController"); //* controller'da tanimlanan auth'u buraya cagiriyoruz.

/* ----------------------------------------------------- */
// URL: /auth ->

router.post("/login", auth.login);
router.all("logout", auth.logout);

/* ----------------------------------------------------- */

module.exports = router;
