"use strict";
const { Model } = require("mongoose");
/* -------------------------------------------------------
             EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const { populate } = require("../models/userModel");

//* QUERY HANDLER MIDDLEWARE:

module.exports = (req, res, next) => {
  //* FILTERING & SEARCHING & SORTING & PAGINATION

  //* Filter: mutlak esitlik arar.
  //* Search: kismi esitlik arar.

  //* FILTERING:
  // URL?filter[fieldName1]=value1&filter[fieldName2]=value2 //* istedigim kadar filtering yapabilirim.
  const filter = req.query?.filter || {}; //* undefined gelmemesi icin bos obje {} döndürür.

  //* SEARCHING:
  // URL?search[fieldName1]=value1&search[fieldName2]=value2
  // https://www.mongodb.com/docs/manual/reference/operator/query/regex/
  // { "<field>": { "$regex": "pattern" } } -> { title: {"$regex":"test 1"}}

  const search = req.query?.search || {};

  //* mongoDB'nin istedigi bir sekilde search-query yazilir:
  for (let kex in search) search[key] = { $regex: search[key] };

  //* SORTING:
  // URL?sort[fieldName1]=asc[fieldName2]=desc
  const sort = req.query?.sort || {};

  //* PAGINATION:
  //URL?page=3&limit=15&skip=20

  // LIMIT:
  let limit = Number(req.query?.limit);
  limit = limit > 0 ? limit : Number(process.env?.PAGE_SIZE) || 20;

  // PAGE:
  let page = Number(req.query?.page);
  page = page > 0 ? page : 1;

  // SKIP:
  let skip = Number(req.query?.skip);
  skip = skip > 0 ? skip : (page - 1) * limit;

  // getModelList:
  res.getModelList = async (Model, populate = null) => {
    return await Model.find({ ...filter }, { ...search })
      .sort(sort)
      .skip(skip)
      .limit(limit)
      .populate(populate);
  };

  // getModelListDetails:

  res.getModelListDetail = async function(params) {

    const data = await Model.find()
  }


  next();
};
