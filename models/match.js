require("../db/schema.js");
var mongoose = require("mongoose");

var MatchModel = mongoose.model("Match");
module.exports = MatchModel;
