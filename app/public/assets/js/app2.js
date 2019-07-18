console.log("working")


$("#submit").on("click", function (event) {
    event.preventDefault();
    answers = []

  
    // input from the text box, into the array and re-render buttons
    //get data from each select
    for (var i = 1; i < 11; i++) {
        var id = "#answerSelect" + i
        var score = $(id).val()
        //push number to an array
        answers.push(parseInt(score));


    }

    console.log("user anwers", answers)

    //sends info to the server
    $.ajax({
        method: "POST",
        url: "/api/friends",
        data: { name: $("#name-input").val().trim(), photo: $("#pic-link").val().trim(), scores: answers }
    }).then(function (response) {

        console.log(response);
       
        
        
        var recentMatch = {
            name: $("#name-input").val().trim(), 
            photo: $("#pic-link").val().trim(), 
            match: response 
    
        }
        addRecent(recentMatch)
        displayFriend(response)
        console.log("recent Match " , recentMatch.match, recentMatch.name)
    })

  
    
});

$("#close").on("click", function (event) {
    event.preventDefault();
 
    console.log("close")
});

function addRecent(recentMatch){
    
    $("#recent-match").append(`<h3> ${recentMatch.name}'s best match is ${recentMatch.match.name}!</h3>`)
    $("#recent-match").append(`<img class="recent-pic" src='${recentMatch.photo}' alt="recent match"/>`)

}


function displayFriend(bestMatch){

    console.log("display", bestMatch);
    $('#matchModal').modal();
    $("#modalBody").html(`<div><h3> ${bestMatch.name}`);
    $("#modalBody").append(`<img src='${bestMatch.photo}'class='friendPic'/>`);

    
}

