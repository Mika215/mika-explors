//this simple program takes the hight and weight of the user as an input and it returns back the BMI

console.log("--aime for a healthy weight--");
// collect hight data
let hight = null;
while (hight === null) {
  hight = prompt(
    "enter your hight(*in CM*)\n\n please do not forget to put a point between the meter and cm"
  );
  if (hight.includes(".") === false) {
    hight = prompt("please put a point between the meter and cm");
    if (hight === null) {
      continue;
    }
  }
}
//collect weight data
let weight = null;
while (weight === null) {
  weight = prompt("please enter your weight(*in KG*)");
}
//define the calculation of the BMI
let bodyMassIndex = weight / (hight * 2);
//return the final result based on the given input and the precasted calculation
if (bodyMassIndex <= 18.5) {
  alert('Ooopps!\n "' + bodyMassIndex + '"\n\nyou are Under weight');
} else if (bodyMassIndex >= 25 && bodyMassIndex < 30) {
  alert('Watchout!\n "' + bodyMassIndex + '"\n\nyou are over weight');
} else if (bodyMassIndex >= 30) {
  alert('Attention!\n "' + bodyMassIndex + '"\n\nyou are obese');
} else {
  alert('Congrats!\n "' + bodyMassIndex + '"\n\nyou got a healthy weight');
}
