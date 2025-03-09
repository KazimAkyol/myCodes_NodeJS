"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */

const Department = require('../models/department.model')

module.exports = {
  list: async (req, res) => {

    const result = await res.getModelList(Department)
    
    res.status(200).send({
      error: false,
      details: await res.getModelListDetails(Department),
      result
    });
  },

  create: async (req, res) => {

    res.status().send({
      error: false,
    });
  },
  
  read: async (req, res) => {

    res.status().send({
      error: false,
    });
  },

  update: async (req, res) => {

    res.status().send({
      error: false,
    });
  },

  delete: async (req, res) => {

    res.status().send({
      error: false,
    });
  },
};
