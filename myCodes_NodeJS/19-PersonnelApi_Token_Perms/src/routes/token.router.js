"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
const router = require("express").Router();
const token = require("../controllers/token.controller");
const { isAdmin } = require("../middlewares/permissions");
/* ------------------------------------------------------- */
// URL: /tokens

router.use(isAdmin);  //* her bir route'dan önce isLogin permission'i kullanmak icin kisayolda bu sekilde yazilabilir.

router.route("/").get(token.list).post(token.create);

router
  .route("/:id")
  .get(token.read)
  .put(token.update)
  .patch(token.update)
  .delete(token.delete);

/* ------------------------------------------------------- */
module.exports = router;
