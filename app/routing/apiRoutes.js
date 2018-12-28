
var friends = require("../data/friends")
var answers = [];
var total = 0;
var compatibilityScore;
var totalArr = [];

function friendCompare(answers) {
  console.log(`Total score is ${total}`)
  //closest match - chooses that friend
  var bestMatch = {
    closestMatch: {},
    compatibility: 10000
  }
  console.log("in friend compare: " + bestMatch.compatibility)

  for (var i = 0; i < friends.length; i++) {



    for (var j = 0; j < answers.length; j++) {
      //user and one friend
      compatibilityScore = Math.abs(answers[j] - friends[i].scores[j]);

      console.log(`difference of index ${j} = ${compatibilityScore}`)
      totalArr.push(compatibilityScore);


      if (compatibilityScore <= bestMatch.compatibility) {
        bestMatch.closestMatch = friends[i];
        bestMatch.compatibility = compatibilityScore;

      }
    }

  }

  console.log(total)
  console.log(compatibilityScore)
  //variable keeping track of best match
  //variable keeping track of what the difference was
  //function is this friend a better match
  //return bestMatch


  console.log("your best match is: " + bestMatch)
  return bestMatch;
}




module.exports = function (app) {

  // A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });


  // A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

  app.post("/api/friends", function (req, res) {
    var bestMatch = friendCompare(req.body.scores)
    console.log(req.body)
    res.json(bestMatch);


    //need to find the api route

  });

};
