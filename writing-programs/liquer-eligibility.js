/**
 * this is a simple program that simulates an online liquor shop
 * it checks whether the user(buyer) is eligible to buy the alcoholic products or not
 * the minimum age to be eligible to buy the alcoholic products is 18 years
 * users who doesn't qualify the minimum age will be informed that they are not welcome 
 */
console.log("--displaying welcome message to the user--");
alert(
  "welcome to our online liquor shop\n\nplease confirm that you are eligible to buy our alcoholic products"
);
console.log("--gathering users raw input--");
const promptMessage = prompt("Please enter your age in digits");
const userInput = promptMessage;
console.log("userInput: ", typeof userInput, userInput);

if (userInput === null || userInput === "") {
  const noInputMessage = "You did not enter any data!";
  console.log("--user didnot enter any input--");
  alert(noInputMessage);
} else {
  const userAge = Number(userInput);
  console.log("userAge converted: ", typeof userAge, userAge);
  const minimumAge = 18;
  if (Number.isNaN(userAge)) {
    const isNaNMessage = '"' + userInput + '" is not a number';

    alert(isNaNMessage);
  } else if (userAge < minimumAge) {
    const notEligibleMessage =
      '"' +
      userAge +
      ' years old"You are not eligible to buy alcoholic products \n\nTry non alcoholic bevarages';
    console.log(
      '--displaying not eligible message to the user aged: "' +
        userAge +
        '"years old--'
    );
    alert(notEligibleMessage);
  } else {
    const eligibleMessage =
      "thanks for confirming your age\n\nPlease drink responsibly \n\nDo not drink and Drive!";
    console.log(
      '--displaying eligible message to the user aged: "' +
        userAge +
        '"years old--'
    );
    alert(eligibleMessage);
  }
}