let myInput = document.getElementById("psw");
let length = document.getElementById("length");
let letter = document.getElementById("letter");
let capital = document.getElementById("capital");
let number = document.getElementById("number");
let length1 = document.getElementById("length1");
let symbol = document.getElementById("symbol");

myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}


myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}


myInput.onkeyup = function() {
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }

  if(myInput.value.length <= 28) {
    length1.classList.remove("invalid");
    length1.classList.add("valid");
  } else {
    length1.classList.remove("valid");
    length1.classList.add("invalid");
  }

  if(myInput.value.match(/[A-Z]/g)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  if(myInput.value.match(/[a-z]/g)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  if(myInput.value.match(/[0-9]/g)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  if(myInput.value.match(/[~`!#$%\^&*+=\-\[\]\\';.,/{}|\\":<>\?]/g)) {  
    symbol.classList.remove("invalid");
    symbol.classList.add("valid");
  } else {
    symbol.classList.remove("valid");
    symbol.classList.add("invalid");
  }

}