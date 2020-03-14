
// array of letters
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
  // variables for tracking the wins and losses 
  var wins = 0;
  var losses = 0;
  var guesses = 10;
  
   var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
   console.log(computerGuess)

   //when the user presses a key it runs the function
   document.onkeypress = function(event){
     var userGuess = event.key;
     if (userGuess === computerGuess) {
       win();
     } else if(guesses - 1 === 0){
       lost();
     }else{
       fail(guess);
     }
      display();
     }
      function display(){
        var winsP = document.getElementById("wins");
        var lossesP =  document.getElementById("losses");
        var guesses = document.getElementById("guesses");
        winsP.innerHTML = wins;
        lossesP.innerHTML =  losses;
        guesses.innerHTML =  guesses;
        document.getElementById("lettersGuessed").innerHTML = lettersGuessed.join(",");
      
      }
    