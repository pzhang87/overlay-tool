var mongoose = require('mongoose');
// mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://127.0.0.1:27017/pr-vods');

var Schema = mongoose.Schema,
    ObjectId = Schema.Types.ObjectId


//define schema for player
var TeamSchema = new Schema({
  name: String,
  logo: String,
  abbrv: String,
  players: Array
});

var MatchSchema = new Schema({
  current: Boolean,
  game: String,
  team1: String,
  team2: String,
  score1: Number,
  score2: Number
})

var Player = mongoose.model("Team", TeamSchema)
var Video = mongoose.model("Match", MatchSchema)
