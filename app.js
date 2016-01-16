// express
var express = require('express');
var app = express();

// public paths
var path = require('path');
app.use(express.static(path.join(__dirname, '/public')));

// index routes
app.get("/", function(req, res){
  res.send("hello world")
})

// listening on port
var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
