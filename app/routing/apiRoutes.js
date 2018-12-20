// Your apiRoutes.js file should contain two routes:

// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var friends = require("../data/friends.js")
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;


// Sets up the Express app to handle data parsing
//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());







module.exports = function(app) {

  // A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

//   app.post("/api/friends", function(req, res) {


 

//   });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

//   app.post("/api/clear", function(req, res) {
//     // Empty out the arrays of data
//     tableData.length = [];
//     waitListData.length = [];

//     res.json({ ok: true });
//   });
};
