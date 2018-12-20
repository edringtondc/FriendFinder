
var friends = require("../data/friends.js")
var answers = [];
var total = 0;
var difference;
var totalArr = [];

function friendCompare(answers) {
  console.log(`Total score is ${total}`)
  //closest match - chooses that friend
var bestMatch
  for (var j = 0; j < friends.length; j++) {
    for (var i = 0; i < answers.length; i++) {

        difference = Math.abs(answers[i] - friends[j].scores[i])

        console.log(`difference of index ${i} = ${difference}`)
        totalArr.push(difference);


    }

}
  arrTotal(totalArr)
  console.log(total)
  // console.log(difference)
  //variable keeping track of best match
  //variable keeping track of what the difference was
  //function is this friend a better match
//return bestMatch
var bestMatch = "best Match is "
return bestMatch + total
}

function arrTotal(array) {
  for (var i = 0; i < array.length; i++) {

      total += array[i];
  }

  console.log("totaling array")
  return total;
}


module.exports = function(app) {

  // A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

  app.post("/api/friends", function(req, res) {
   var bestMatch = friendCompare(req.body.scores)
    console.log(req.body)
    res.json(bestMatch);


//need to find the api route

  });

};
