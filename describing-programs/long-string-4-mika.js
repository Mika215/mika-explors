/** This program asks the user to enter an input which contains more than 5 characters.
 * then it alerts back the given input as well as the length of the characters embraced with.
 * the user is allowed to enter even an empty sting as far as it is more than 5 times(in the case of entering 6 empty spaces with out a valid character)
 * Conditions !!
 * the user can not cancel
 * inorder to go out of the ever rotating loop the user must enter more than five characters
 */

/*- - - - declaring variable to store program data - - - */
//declaring and init variable 'phrase' with an empty string
//this variable will later have another value based on what the user has entered
let phrase = "";
/*- - - - gathering user input - - - */
//declaring and init variable 'longEnough' with a boolean False.
let longEnough = false;
//setting our while condition to while not longEnough
//this line is used to check if the user entered long enough characters.
//it is integreted with the next function call(propmt)
while (!longEnough) {
  //assigning variable 'phrase' to the input which is going to be collacted through the fucntion call propmt
  //this line informs as well us enables the user what he/she should enter as an input
  phrase = prompt("enter anything longer than 5 characters");
  //reading variable 'phrase' and compares it's value against null using strict equality operator (path one)
  //this is to make sure that user didn't cancel
  if (phrase === null) {
    //if the user cancelled this line alerts the user to follow certain instructions(no escape)
    alert("there is no escape");
    /*- - - - checking if user input long enough characters - - - */
  } else if (
    //reading variable 'phrase' and comparing its value's length(characters) with '5' using the less than or equals to operator(path two)
    phrase.length <= 5
  ) {
    //alerting a message to the user
    //if variable 'phrase'(the input) is less than or equals to 5 then it reminds back the user that it is too short
    alert("too short");
  }
  // assigning variable 'longEnough' with a boolean true
  //this is path three and it is applicable when the two previous paths(path 1&2) are not compatable
  //when the input is not null and not less than or equals to five then it will be turned out 'true'(longEnough)
  //this leads us to the end of the program's mission
  else {
    longEnough = true;
  }
}
/* - - - -  generet and alert the final out put - - - -*/
// reading variable 'phrase',reading the lenght of it's value and  alerting a concatinated message to the user
//when the user inputs long enough character(more than 5) it counts the exact lenght of characters in the phrase and it displays it back to the user concatinated with additional sting message
alert('"' + phrase + '" is ' + phrase.length + " characters long");
