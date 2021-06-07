//Require Mongoose
var mongoose = require("mongoose");

//Define a schema
var Schema = mongoose.Schema;

var ItemsModelSchema = new Schema({
  itemName: String,
  itemType: String,
  itemCompany: String,
  itemPrice: Number,
  itemImageUrl: String,
  userId: String,
});

var Item = mongoose.model("items", ItemsModelSchema);
module.exports = { Item };
