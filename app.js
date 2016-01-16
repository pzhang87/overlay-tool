// express
var express = require('express');
var app = express();

// public paths
var path = require('path');
app.use(express.static(path.join(__dirname, '/public')));

//db requirements
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://127.0.0.1:27017/overlay-tool');
var Team = require("./models/team");
var Match = require("./models/match");

// index routes
app.get("/", function(req, res){
  res.send("ESPORTS overlay backend")
})

app.get("/teams", function(req, res){
  Team.find({}).then(function(teams){
    res.json(teams);
  })
});

app.get("/matches", function(req, res){
  Match.find({}).then(function(matches){
    res.json(matches);
  })
});

// listening on port
var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
