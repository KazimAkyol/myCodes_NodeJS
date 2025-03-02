"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

// Call Models:
const { BlogCategory, BlogPost } = require("../models/blogModel");

module.exports = {
  list: async (req, res) => {
    const result = await BlogCategory.find();

    res.status(200).send({
      error: false,
      result,
    });
  },

  // CRUD ->

  create: async (req, res) => {
    const result = await BlogCategory.create(req.body); //* create edecegim veriyi req.body ile Thunder'dan aliyorum.

    res.status(201).send({
      error: false,
      result,
    });
  },

  read: async (req, res) => {
    // await BlogCategory.findOne({...filter})
    // const result = await BlogCategory.findOne({ _id: req.params.categoryId });
    const result = await BlogCategory.findById(req.params.categoryId);

    res.status(200).send({
      error: false,
      result,
    });
  },

  update: async (req, res) => {
    // const result = await BlogCategory.updateOne({ ...filter }, { ...data });

    //* response from updateOne (Thunder document reading) :
    //     "result": {
    //     "acknowledged": true, // if update methods ends successfuly
    //     "modifiedCount": 1, // if returns 0 : no any data updated cause data is already up to date.
    //     "upsertedId": null,
    //     "upsertedCount": 0,
    //     "matchedCount": 1 // number of data matches with our filter.
    //   },

    const result = await BlogCategory.updateOne(
      { _id: req.params.categoryId },
      req.body
    );

    res.status(202).send({
      error: false,
      result,
      new: await BlogCategory.findById(req.params.categoryId), //* update ettikten sonra elimizdeki mevcut data'nin son durumunu görebilmek icin.
    });
  },

  delete: async (req, res) => {
    // await BlogCategory.deleteOne({ ...filter });
    const result = await BlogCategory.deleteOne({ _id: req.params.categoryId });

    //* response from deleteOne (Thunder document reading) :
    //     "result": {
    //     "acknowledged": true, // if delete methods ends succesfuly
    //     "deletedCount": 1 // if returns 0 : no any data delete cause data is not found or already deleted.
    //   },

    if (result.deletedCount) {
      res.sendStatus(204);
    } else {
      res.errorStatusCode = 404;
      throw new Error("Data is not found or already deleted.");
    }
  },
};
