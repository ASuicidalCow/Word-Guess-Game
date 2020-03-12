window.onload = function () {

  var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n',
  'o','p','q','r','s','t','u','v','w','x','y','z'];

  var states;            // different states
  var getHint;           // get hint for word
  var word;              // selected word
  var getGuess;          // get the guess
  var geusses = [];      // stored guesses
  var lives;             // how many tries left
  var counterWins;       // counter for wins
  var counterLosses;     // counter for losses
  var spacesInWord;      // number of spaces in a word


  // get the elements
  var showlives = document.getElementById("#guessesLeft");
  var getHint = document.getElementById("#hint");
  var showClue = document.getElementById("#clue");


  
  var buttons = function() {
    myButtons = document.getElementById("buttons");
    letters = document.createElement("ul");
    for (var i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet';
      list = document.createElement("li");
      list.id = 'letter';
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }



  }







  }