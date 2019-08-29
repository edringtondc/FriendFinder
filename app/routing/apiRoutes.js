
var friends = require("../data/friends")
var compatibilityScore;


module.exports = function (app) {

  // A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });


  //POST routes/api/friends. This will be used to handle incoming survey results. 
  //This route will also be used to handle the compatibility logic.
  app.post("/api/friends", function (req, res) {
    var answers = req.body.scores;

  

    //closest match - chooses that friend
    var bestMatch = {
      name: "",
      photo: "",
      compatibility: 1000
    }

    compatibilityScore = 0;
  
    // console.log("best Match" ,bestMatch);
  
    for (var i = 0; i < friends.length; i++) {
      var currentFriend = friends[i];
      // console.log(currentFriend.name);
  
      // console.log("in friend compare: " + bestMatch.compatibility)
      
      for (var j = 0; j < answers.length; j++) {
        // console.log("j answers:", answers)

        //user and one friend
        compatibilityScore += Math.abs(answers[j] - currentFriend.scores[j]);

        // console.log(`difference of index ${answers[j]} = ${compatibilityScore}`)

        // console.log(compatibilityScore)
        
      }
      // console.log("FINAL CS " + compatibilityScore)
     

      if (compatibilityScore <= bestMatch.compatibility) {
        bestMatch.name = currentFriend.name;
        bestMatch.photo = currentFriend.photo;
        bestMatch.compatibility = compatibilityScore;

      }
      // console.log(bestMatch.compatibility)
    }

    // console.log("your best match is: " , bestMatch)
    // console.log(req.body.scores)

    //send the results as json
    res.json(bestMatch);

  });

};
