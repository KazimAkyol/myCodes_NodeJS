"use strict";
/* -------------------------------------------------------
         EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

/* ---------------------------------------------------- */

module.exports = {
  list: async (req, res) => {
    const result = await User.find();

    res.status(200).send({
      error: false,
      result,
    });
  },

  //* CRUD ->

  create: async (req, res) => {
    const result = await User.create(req.body);

    res.status(201).send({
      error: false,
      result,
    });
  },

  read: async (req, res) => {
    // await User.findOne({ ...filter });
    // const result = await User.findById({ _id: req.params.userId });
    const result = await User.findById(req.params.userId);

    res.status(200).send({
      error: false,
      result,
    });
  },

  update: async (req, res) => {
    // const result = await User.updateOne({ ...filter }, { data });

    //* response from updateOne (Thunder document reading) :
    //     "result": {
    //     "acknowledged": true, // if update methods ends successfuly
    //     "modifiedCount": 1, // if returns 0 : no any data updated cause data is already up to date.
    //     "upsertedId": null,
    //     "upsertedCount": 0,
    //     "matchedCount": 1 // number of data matches with our filter.
    //   },

    const result = await User.updateOne({ _id: req.params.userId }, req.body);

    res.status(202).send({
      error: false,
      result,
      new: await User.findById(req.params.userId),
    });
  },
};
