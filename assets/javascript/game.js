
$(document).ready(function () {

    var wins = 0;
    var losses = 0;
    var sumtotal = 0;
    var red = 0;
    var yellow = 0;
    var blue = 0;
    var green = 0;


    function checkScore() {
        if (sumtotal === compNumber) {
            wins++;
            $("#result").html("You win!");
            $("#wins").html(wins);
            console.log("You won!");
            sumtotal = 0;
            randomize();
        }

        else if (sumtotal > compNumber) {
            losses++;
            $("#result").html("You loose!");
            $("#losses").html(losses);
            console.log("You loose!");
            sumtotal = 0;
            randomize();
        }

        else {
            $("#result").html("");
        }

    };



    function randomize() {
        compNumber = Math.floor(Math.random() * 120) + 19;
        console.log("Computer number: " + compNumber);
        $("#newNumber").html(compNumber);
        red = Math.floor(Math.random() * 12) + 1;
        yellow = Math.floor(Math.random() * 12) + 1;
        blue = Math.floor(Math.random() * 12) + 1;
        green = Math.floor(Math.random() * 12) + 1;
        //console log values of each gem 
        console.log("red: " + red);
        console.log("yellow: " + yellow);
        console.log("blue: " + blue);
        console.log("green: " + green);
        $("#tally").html("");

    };
    randomize();

    $("#redgem").on("click", function () {
        sumtotal = sumtotal + red;
        console.log(sumtotal);
        $("#tally").html(sumtotal);
        checkScore();
    });

    $("#yellowgem").on("click", function () {
        sumtotal = sumtotal + yellow;
        console.log(sumtotal);
        $("#tally").html(sumtotal);
        checkScore();
    });

    $("#bluegem").on("click", function () {
        sumtotal = sumtotal + green;
        console.log(sumtotal);
        $("#tally").html(sumtotal);
        checkScore();
    });

    $("#greengem").on("click", function () {
        sumtotal = sumtotal + blue;
        console.log(sumtotal);
        $("#tally").html(sumtotal);
        checkScore();
    });



}

);

