//Globals

//Wins and losses
var wins = 0;
var loss = 0;

//User and Target scores
var yourScore = 0;
var targetScore = 0;

//Storing var Crystals and each crystal as an object
var crystals = {
    crystalOne:{
        value: 0
    },

    crystalTwo:{
        value: 0
    },

    crystalThree:{
        value: 0
    },

    crystalFour:{
        value: 0
    }
}

//Functions

//Random number function
var random = function(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//Start game function
var start = function() {

    yourScore = 0;
    //Sets the target score between 19-120
    targetScore = random(19,120);

    //Gives crystals a random value between 1-12
    crystals.crystalOne.value = random(1,12);
    crystals.crystalTwo.value = random(1,12)
    crystals.crystalThree.value = random(1,12)
    crystals.crystalFour.value = random(1,12)

    //Updates html
    $("#yourScore").html(yourScore);
    $("#targetScore").html(targetScore);
}
//Function that adds the values to the html on user score and win/loss counter with checkwin function
var addValues = function(crystals) {

    yourScore = yourScore + crystals.value;
    $("#yourScore").html(yourScore);
    checkWin();
}
//Function with for loop if user wins or losses
var checkWin = function() {
    if(yourScore > targetScore) {

        alert("LOSER!");
        loss++;
        $("#lCounter").html(loss);
        start();
    }
    else if (yourScore == targetScore) {

        alert("WINNER!");
        wins++;
        $("#wCounter").html(wins);
        start();
    }
}

//start game function
start();

//Crystals into buttons and adding values with addValue function
$("#crystalOne").click(function() {
    addValues(crystals.crystalOne);
})
$("#crystalTwo").click(function() {
    addValues(crystals.crystalTwo);
})
$("#crystalThree").click(function() {
    addValues(crystals.crystalThree);
})
$("#crystalFour").click(function() {
    addValues(crystals.crystalFour);
})




