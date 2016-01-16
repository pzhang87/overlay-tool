var mongoose = require('mongoose')
var conn = mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://127.0.0.1:27017/overlay-tool')
var MatchModel = require("../models/match")
var TeamModel = require("../models/team")

// conn.on("error", function(err){
//   console.log("Oops! Mongo threw an error. Is `mongod` running?");
//   console.log(err.message);
//   process.exit();
// });

MatchModel.remove({}, function(err){
  console.log(err)
});
TeamModel.remove({}, function(err){
  console.log(err)
});

var team1 = new TeamModel({
  name: "Princeton University",
  logo: "http://placecage.com/200/200",
  abbrv: "PTON",
  players: []
})

var team2 = new TeamModel({
  name: "UC San Diego",
  logo: "http://placecage.com/200/200",
  abbrv: "UCSD",
  players: []
})

var match = new MatchModel({
  current: true,
  game: "SC2",
  team1: team1.id,
  team2: team2.id,
  score1: 0,
  score2: 0
})

team1.save().then(function(){
  team2.save();
  console.log("match 1 saved!")
}).then(function(){
  match.save()
  console.log("match 2 saved!")
})
