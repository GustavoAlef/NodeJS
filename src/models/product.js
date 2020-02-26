const mongoose = require("mongoose");
const mongoPaginate = require('mongoose-paginate');

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

productSchema.plugin(mongoPaginate);

mongoose.model("Product", productSchema); //diz pra aplicacao que existe esse model no bd
