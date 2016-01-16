require("../db/schema.js");
var mongoose = require("mongoose");

var TeamModel = mongoose.model("Team");
module.exports = TeamModel;
