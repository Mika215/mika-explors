'use strict';
console.log('-- begin of my function--');
let watchMovies=alert('It seems that you want to watch movies online\n\nBut first you need to confirm if you are granted an access');

function checkAge(age){
//{}
if (age>=18){
  return true;
}else {
  return confirm('did you have permission from your parents');
}
}
let age=prompt('How old are you?')
if (checkAge(age)){
  alert('Access granted!\n\nEnjoy your time')
}else{
  alert('Access denied!\n\nYou are too young')
}


console.log('-- end --');