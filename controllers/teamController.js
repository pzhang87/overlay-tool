var mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://127.0.0.1:27017/overlay-tool');
var Team = require("./models/team");
var Match = require("./models/match");

function createTeam(team){
  Team.create(team, function(err, docs){
    if (err){
      throw err
    }
    else {
      return docs;
    }
  })
}

module.exports = teamController
