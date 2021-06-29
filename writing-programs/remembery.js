alert(
    "Remembery game\n you will be allowed to enter three different phrases \nthen you will be asked to enter one of them again \nIf you guess correctly then you will win the game "
  );
  
  const phrase1 = prompt("enter your first phrase to remember");
  const phrase2 = prompt("enter a second phrase to remember");
  const phrase3 = prompt("enter a third phrase to remember");
  
  alert(
    "well done! you have submited three phrases\n\nnow get ready to remeber one of the phrases"
  );
  
  let expectedGuess = "";
  const randomizedPhrase = Math.round(Math.random() * 2) + 1;
  
  if (randomizedPhrase === 1) {
    expectedGuess = phrase1;
  } else if (randomizedPhrase === 2) {
    expectedGuess = phrase2;
  } else if (randomizedPhrase === 3) {
    expectedGuess = phrase3;
  }
  
  const userGuess = prompt("guess what phrase " + randomizedPhrase + " was!");
  
  if (userGuess === expectedGuess) {
    alert(
      "congrtas! you have correctly guessed phrase " +
        randomizedPhrase +
        ' it was "' +
        expectedGuess +
        '" '
    );
  } else {
    alert("Nooop! try again next time");
  }
  