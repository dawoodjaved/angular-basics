//Require Mongoose
var mongoose = require("mongoose");

//Define a schema
var Schema = mongoose.Schema;

var UserModelSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});

var User = mongoose.model("users", UserModelSchema);

module.exports = { User };
