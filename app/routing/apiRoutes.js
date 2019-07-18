
var friends = require("../data/friends")

var total = 0;
var compatibilityScore;
var totalArr = [];

function friendCompare(answers) {

 
}




module.exports = function (app) {

  // A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });


  // A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

  app.post("/api/friends", function (req, res) {
    // var bestMatch = friendCompare(req.body)
    var answers = req.body.scores;

   
    // console.log(`Total score is ${total}`)
    //closest match - chooses that friend
    var bestMatch = {
      name: "",
      photo: "",
      compatibility: 1000
    }
    compatibilityScore = 0;
  
    console.log("best Match" ,bestMatch);
  
    for (var i = 0; i < friends.length; i++) {
      var currentFriend = friends[i];
      console.log(currentFriend.name);
  
      console.log("in friend compare: " + bestMatch.compatibility)
  
      for (var j = 0; j < answers.length; j++) {
        // console.log("j answers", answers)
        //user and one friend
        compatibilityScore += Math.abs(answers[j] - currentFriend.scores[j]);

        // compatibilityScore += Math.abs(parseInt(answers[j]) - parseInt(currentFriend.scores[j]));
  
        console.log(`difference of index ${answers[j]} = ${compatibilityScore}`)
        console.log(compatibilityScore)
        
        // totalArr.push(compatibilityScore);
        // console.log("totalArr  ", totalArr)
  
       
        
      }


      console.log("FINAL CS " + compatibilityScore)
     

      if (compatibilityScore <= bestMatch.compatibility) {
        bestMatch.name = currentFriend.name;
        bestMatch.photo = currentFriend.photo;
        bestMatch.compatibility = compatibilityScore;

      }
      console.log(bestMatch.compatibility)
    }
  
    // console.log(total)
    // console.log(compatibilityScore)
    //variable keeping track of best match
    //variable keeping track of what the difference was
    //function is this friend a better match
    //return bestMatch
  
  
    // console.log("your best match is: " , bestMatch)
 


    console.log(req.body.scores)
    res.json(bestMatch);


    //need to find the api route

  });

};
