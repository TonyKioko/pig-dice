var scores, roundScore, activePlayer, diceRoll, gamePlaying;


initializeGame();

$(document).ready(function() {
  $(".btn-dice").click(function() {
    if (gamePlaying) {
      diceRoll = Math.floor(Math.random() * 6) + 1;
      console.log(diceRoll);
      var diceShow = $(".dice");
      diceShow.attr("src", 'images/throw-' + diceRoll + '.png')
      diceShow.show();
      $("#current-" + activePlayer).text(diceRoll);
      if (diceRoll !== 1) {
        roundScore += diceRoll;
        $("#roundscr-"+activePlayer).text(roundScore);
      } else {
        nextGamer();
      }
    }

    console.log(roundScore);
  })

  $(".btn-hold").click(function() {
    // alert("clicked Hold");
    if (gamePlaying) {
      scores[activePlayer] += roundScore;
      $("#score-" + activePlayer).text(scores[activePlayer]);
      $("#roundscr-0").text(0);
      $("#roundscr-1").text(0);
      var finalScore = parseInt($(".final-score").val());
      var winningScore;
      if (finalScore) {
          winningScore = finalScore;
      } else {
        winningScore = 50;
      }

      if (scores[activePlayer] >= winningScore) {
        $("#name-" + activePlayer).text("CONGRATULATIONS!!!");
        $(".dice").hide();
        $(".gamer-" + activePlayer + "-section").addClass("winner");
        $(".gamer-" + activePlayer + "-section").removeClass("active");
        // $("#roundscr-"+activePlayer).text(0);
        $("#roundscr-0").text(0);
        $("#roundscr-1").text(0);
        gamePlaying = false;
      } else {
        nextGamer();
      }
    }
  })
  $(".btn-new").click(function() {
    initializeGame();
    alert("new")
  })

})

var nextGamer = function() {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;
  $("#current-0").text(0);
  $("#current-1").text(0);
  $(".gamer-0-section").toggleClass("active");
  $(".gamer-1-section").toggleClass("active");
  // $(".player-0-panel").removeClass("active");
  // $(".player-1-panel").addClass("active");
  $(".dice").hide();
  $("#roundscr-0").text(0);
  $("#roundscr-1").text(0);
}

function initializeGame() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;
  $("#score-0").text(0);
  $("#score-1").text(0);
  $("#current-0").text(0);
  $("#current-1").text(0);
  $("#roundscr-0").text(0);
  $("#roundscr-1").text(0);
  $("#name-0").text("Player 1");
  $("#name-1").text("Player 2");
  $(".gamer-0-section").removeClass("winner");
  $(".gamer-1-section").removeClass("winner");
  $(".gamer-0-section").removeClass("active");
  $(".gamer-1-section").removeClass("active");
  $(".gamer-0-section").addClass("active");


}
