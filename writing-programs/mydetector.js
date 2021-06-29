
/**
 * i just want to creat a system that collects phone number or whatever digits
 * the user should not be allowed to enter letters or special carachters other than numbers 
 * the system should identifay whether the input includes any characters other than numbers
 * if didIncludes then it pop out a message
*/

//i just want to know if we can use the 'for of' method and .includes combined to detect if there was ristricted characters included as an input
//this is because .includes that i used below couldn't work properly & it is messy to list every character separating with qotation and coma.still that doesen't work
let input=null;
let message;
let ristrictedLetters='abcdefghijklmnopqrstuvwxyz';
while(true){
  input=prompt('enter your phone number');
if(input.includes('a','b','c','d','e','f','g','h','i','j','k','l',)){
  input=prompt('Entering letters and special characters are not allowed');
  
  continue;
}else {
  input= alert("Your phone number is" + ` ${input}` );
  break;
  }
 }
 // this program is not yet done it needs more exploration and amendment 