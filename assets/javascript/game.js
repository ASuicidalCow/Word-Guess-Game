
// array of letters
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
  // variables for tracking the wins and losses, and guesses
  var wins = 0;
  var losses = 0;
  var guessesLeft = 10;
  var guessedLetters = [];
  var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(computerGuess)
  var restart = function(){
    guessesLeft = 10;
    guessedLetters = [];
    computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(computerGuess)
  }
   //when the user presses a key it runs the function
   document.onkeypress = function(event){
     var userGuess = event.key.toLowerCase();
    guessedLetters.push(userGuess);
     if (userGuess === computerGuess) {
      wins++;
      guessesLeft = 9;
      alert("You Won!")
      restart();
      
     }
      else{
        guessesLeft--;
        
      }
      if(guessesLeft === 0){
        losses++;
        guessesLeft = 9;
        alert("Sorry you lost :(")
        restart();
      }
      
      document.getElementById("wins").innerHTML = "Wins: " + wins;
      document.getElementById("losses").innerHTML = "losses: " + losses;
      document.getElementById("guesses").innerHTML = "guesses: " + guessesLeft;
      document.getElementById("lettersGuessed").innerHTML = "Letters Guessed: " + guessedLetters;
      
     }
     