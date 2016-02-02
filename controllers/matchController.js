var mongoose = require('mongoose');
var teamController = require("./teamController")
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://127.0.0.1:27017/overlay-tool');
var Team = require("./models/team");
var Match = require("./models/match");
