"use strict";
/* -----------------------------------------------------------------------
                 EXPRESSJS - BLOG Project with Mongoose
-------------------------------------------------------------------------- */

/* ----------------------------------------------------------------------- */

const mongoose = require("mongoose");

/* ----------------------------------------------------------------------- */
//* BlogCtegory Schema

// Create Schema
const blogCategorySchema = new mongoose.Schema(
  {
    //_id: ,
    name: {
      type: String, // varchar
      trim: true,
      required: true,
    },
  },
  {
    collection: "BlogCategories",
  }
);

// Set Model
const BlogCategory = mongoose.model("BlogCategory", blogCategorySchema);

/* ----------------------------------------------------------------------- */
//* BlogPost Schema

// Create Schema

const blogPostSchema = new mongoose.Schema(
  {
    // _id: ,

    categoryId: {
      // default relation: ManyToOne
      type: mongoose.Schema.Types.ObjectId,
      ref: "BlogCategory",
      required: true,
      unique: true, // convert to OneToOne Relation.
    },

    title: {
      type: String,
      trim: true,
      required: true,
    },

    content: {
      type: String,
      trim: true,
      required: true,
    },

    // createdAt,
    // updatedAt
  },
  {
    collection: "blogPosts",
    timestamps: true,
  }
);
