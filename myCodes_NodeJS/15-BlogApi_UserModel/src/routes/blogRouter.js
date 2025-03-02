"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const router = require("express").Router();

const blogCategory = require("../controllers/blogController");

/* ------------------------------------------------------- */
// URL: /blog ->

router.route("/blog").get(blogCategory.list).post(blogCategory.create);

router
  .route("/blog/:categoryId")
  .get(blogCategory.read)
  .put(blogCategory.update)
  .delete(blogCategory.delete);

/* ------------------------------------------------------- */

// URL: /blog/post ->

router.route("/post").get(blogPost.list).post(blogPost.create);

router
  .route("/post/:postId")
  .get(blogPost.read)
  .put(blogPost.update)
  .delete(blogPost.delete);

/* ------------------------------------------------------- */
module.exports = router;
