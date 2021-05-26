/**
 * This program asks the user to enter a phrase and to make any possible changes in the typing and panctuation errors
 * after receiving the phrase the program alerts back the given "phrase" & asks the user to confirm if he/she wants to keep that phrase
 * if the user cancelled then it prompts out again and asks him/her to enter another phrase
 * if the user confirmed then the program checks each and every letter,panctuation & space(one character at time) in the phrase and asks confirmation if the user wants to keep each of them or to make any changes(edit)
 * while checking each character one by one the user might need to omit or replace a specific character by pressing "cancel" button
 * in this case the program "prompts" & ask the user to replace that specific character by entering a new character (the user can enter 'back space' or any other character)
 * the program saves any changes made through out the course of cheking and confirmation
 * finaly it alerts back the edited version of the phrase to the user
 * if the user didn't make any changes the program will return back the input as a finall output
 * conditions !!!!!
 * The user is obliged to enter something inorder to go out of the endless loop.
 * if the user canceled or click "OK" without enetering any thing (an empty string) then the program alerts him/her that it is obligatory to enter something
 */


/*- - - - declaring variable to store program data - - - - -*/
//declaring and init variable "input" with an empty string
//this variable will be assigned a different value later on depending on what the user has provided
let input = "";
/*- - - - gather user input - - - - -*/
//declaring and init variable 'userConfirmed' with a boolean(False)
let userConfirmed = false;
//setting our while condition to 'while not false'
while (!userConfirmed) {
  //assigning variable 'input' to and calling a function prompt to collect an input from the user
  //this line explains the user what to do and what to expect as an end result
  input = prompt("enter a phrase, you'll get a chance to fix your mistakes");
  // reading variable 'input' and compare it to an 'empty string' and to 'null'using the strict equality operator
  //setting our 'if' condition to 'if "input" is strictly equal to an empty sting or "input" is strictly equal to null'.
  // this is to check if the user enters an empty string or cancel
  /*- - - - checking if the user enter nothing - - - */
  if (input === "" || input === null) {
    //alerting a message to the user
    //this line reminds the user to follow certain instructions
    alert("nope, enter something");
    //setting our 'control flow' to continue
    //this line will be used as a controler(guard) to make sure that the user follows the above given instructions in the due process of gathering an input
    continue;
  }

  /*-- communicate the programs reaction to the user before starting data processing --*/

  //assigning variable 'userConfirmed' to.. and calling a function confirm to receive confirmation from the user
  //reading 'input' and displaying it to the user so that the user can read and confirm
  //the variable 'userConfirmed' will be assigned a differnt value depending on the confirmation of the user
  userConfirmed = confirm(
    'do you want to use this phrase?\n\n- "' + input + '"'
  );
}
/*------ Processing the collected data ------*/

//declaring and init variable "newPhrase" with an empty string
//this variable will be assigned a difernt value later on based on what the user has provided and will replace the prviously provided input
let newPhrase = "";
//using 'for of' loop to declare variable character and to assign its value to 'input'
//reading variable 'input'
//the for of loop will enable us to ittirate each and every character of the input during the process of checking and editing the phrase
for (let character of input) {
  //declaring and assigning variable "keepIt" to.. and calling function confirm
  //reading and concatinating variable 'input' and variable 'character' along withsome additional message using linebreaks ("do you want to keep")
  //it is also ittirating the characters of the input
  //the variable 'keepit' could be assigned a differnt value depending on the confirmation of the user
  //the ittiration with variable 'charachter' will enable us to interact with the user to get confirmation if he/she wants to keep each and every charachter
  let keepIt = confirm(input + '\n\n- do you want to keep "' + character + '"');
  //setting our 'if' condition to 'confirmed/true/keepIt'
  //based on the confirmation of the user this line will determine if our program should keep each character and assigne it as a value to to the variable 'keepIt'
  if (keepIt) {
    //reading both variable 'character' and variable 'newPhrase' then concatinating thier values
    // finally assigning their concatinated value to variable 'newPhrase'
    newPhrase = newPhrase + character;
  }
  //setting the second path (condition)
  //this line is a plan B it will be only executed in case the user change his/her mind and wants to voide the priviously entered input(intire phrase)
  else {
    //declaring and init variable "replacement" with null
    //this is to check that the user has indeed voide his privious input
    let replacement = null;
    //reading variable 'replacement' and comparing it to null using the strict equality operator
    //setting our while conditional to 'while variable "replacement" is strictly equal to null'
    while (replacement === null) {
      //assigning variable 'replacement' to..and calling function prompt to collect the new input/new phrase (value of replacement)
      replacement = prompt('enter a replacement for "' + character + '"');
    }
    //reading both variable 'replacement' and variable 'newPhrase' then concatinating thier values
    // then assigning their concatinated value to variable 'newPhrase
    newPhrase = newPhrase + replacement;
  }
}

/*------  Communicating back the processed data to the user ------*/

//alerting a concatinated message which contains the variable"newPhrase"
//this is the final step that we diplay the final version of the processed data(edited phrase)
alert('here is your new phrase:\n\n"' + newPhrase + '"');
