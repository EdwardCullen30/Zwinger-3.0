//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();



app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));


app.get("/", function(req, res) {



  res.render(path.join(__dirname + '/index.html'));

});

app.engine('html', require('ejs').renderFile);



app.listen(3000, function() {
  console.log("Server started on port 3000");
});

app.get("/signup", function(req, res) {
    res.render(path.join(__dirname + '/signup.html'));
   });
