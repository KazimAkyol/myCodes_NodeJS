"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const { mongoose } = require("../configs/dbConnection");
/* ------------------------------------------------------- */

const SaleSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    brandId: {
      type: mongoose.Schema.Types.ObjectId,
      red: "Brand",
      required: true,
    },

    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },

    quantity: {
      type: Number,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    priceTotal: {
      type: Number,
      set: function () {
        return this.quantity * this.price;
      }, //* create islemi yaptigimizda set metodu calisir. Eger data gönderilmezse calismaz.
      default: function () {
        return this.quantity * this.price;
      }, //* Data göndermediginde calisir.
      transform: function () {
        return this.quantity * this.price;
      }, //* update'de calisir.
    },
  },
  { collection: "sales", timestamps: true }
);

module.exports = mongoose.model("Sale", SaleSchema);
