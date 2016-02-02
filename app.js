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

//body parser
var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// index routes
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

app.post("/matches", function(req, res){
  Team.create({
    name: req.body.team1_name.toUpperCase(),
    logo: req.body.team1_logo,
    abbrv: req.body.team1_abbrv.toUpperCase(),
    players: req.body.team1_players.toUpperCase().split(", ")
  }, function(err, docs){
    if (err){
      throw err;
    }
    team1 = docs
    Team.create({
      name: req.body.team2_name.toUpperCase(),
      logo: req.body.team2_logo,
      abbrv: req.body.team2_abbrv.toUpperCase(),
      players: req.body.team2_players.toUpperCase().split(", ")
    },
    function(err, docs){
      if (err){
        throw err;
      }
      team2 = docs
      Match.create({
        game: req.body.game,
        team1: team1._id,
        team2: team2._id,
        score1: 0,
        score2: 0
      }, function(err, docs){
        if (err){
          throw err;
        }
        res.json(docs)
      })
    })
  })
})

//
app.use('/sc2/', csgoRouter);
app.use('/sc2/', dota2Router);
app.use('/sc2/', hsRouter);
app.use('/sc2/', lolRouter);
app.use('/sc2/', sc2Router);



// listening on port
var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
