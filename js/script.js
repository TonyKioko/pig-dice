var scores, roundScore, activePlayer, diceRoll, gamePlaying;


initializeGame();

$(document).ready(function(){
  $(".btn-dice").click(function(){
    if(gamePlaying){
      diceRoll = Math.floor(Math.random()*6)+1;
      console.log(diceRoll);
      var diceShow = $(".dice");
      diceShow.attr("src",'images/throw-' + diceRoll + '.png')
      diceShow.show();
      $("#current-"+activePlayer).text(diceRoll);
      if (diceRoll !==1){
        roundScore +=diceRoll;
          // $("#score-"+activePlayer).text(roundScore);
      }else {
        nextGamer();
      }
    }

    console.log(roundScore);
  })




function initializeGame(){
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;
  $("#score-0").text(0);
  $("#score-1").text(0);
  $("#current-0").text(0);
  $("#current-1").text(0);
  $("#name-0").text("Player 1");
  $("#name-1").text("Player 2");
  $(".gamer-0-section").removeClass("winner");
  $(".gamer-1-section").removeClass("winner");
  $(".gamer-0-section").removeClass("active");
  $(".gamer-1-section").removeClass("active");
  $(".gamer-0-section").addClass("active");

}
