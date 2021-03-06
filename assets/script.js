// Assignment Code
var generateBtn = document.querySelector("#generate");
var enter;
var confirmNumber;
var confirmCharacter;
var confirmLowercase;
var confirmUppercase;
var choices = [];
var password = "";
var outputPassword = document.querySelector("#password");

// list of special characters
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// list of numbered characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// list of alphabetical characters
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// space is for uppcase version, also displaying function for uppercase conversion
space = [];


// utilized jscript book for map
var toUpper = function (x) {
  return x.toUpperCase();
};
alpha2 = alpha.map(toUpper);

// write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log({ password })
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  // asks for user input
  choices = [];
  enter = parseInt(prompt("How many characters would you like in your password? Choose between 8 and 128 characters."));
  if (enter < 8 || enter > 128) {
    alert('not a valid input, please try again');
    return "";
  }

  // following questions asked for password preference

  confirmNumber = confirm("Will this contain numbers?");
  confirmCharacter = confirm("Will this contain special characters?");
  confirmUppercase = confirm("Will this contain uppercase letters?");
  confirmLowercase = confirm("Will this contain lowercase letters?");

  console.log(confirmNumber, confirmCharacter, confirmUppercase, confirmLowercase);

  // worked with tutor on .push and spread operator

  if (confirmCharacter) {
    choices.push(...character)
  }
  if (confirmNumber) {
    choices.push(...number)
  }
  if (confirmLowercase) {
    choices.push(...alpha)
  }
  if (confirmUppercase) {
    choices.push(...alpha2)
  }

  if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
    alert("You must choose a criteria!");
    return "";
  }
  // random variable selection and random selection for every variable
  var password = "";
  for (var i = 0; i < enter; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password += pickChoices;
    console.log(password)

  }
  return password;
}