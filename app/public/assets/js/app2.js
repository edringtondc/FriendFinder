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
    console.log(answers)

    //sends info to the server
    $.ajax({
        method: "POST",
        url: "/api/friends",
        data: { name: $("#name-input").val().trim(), photo: $("#pic-link").val().trim(), scores: answers }
    }).then(function (response) {

        console.log(response);
        displayFriend(response)
        
    })
    
});


function displayFriend(bestMatch){

    $('#matchModal').modal();
    $("#modalBody").html(`<div><h3> ${bestMatch.closestMatch.name}`);
    $("#modalBody").append(`<img src= ${bestMatch.closestMatch.photo}/>`);
}

