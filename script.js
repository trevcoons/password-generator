// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function lengthPrompt(){
  var length = 0;
  var meetsConditions = false;

  do {
    length = prompt("How many characters would you like your password to contain?", "Must be a minimum of 8 to maximum of 128 characters");

    if (length === null) {
      break;
     } else if (length >= 8 && length <= 128) {
              meetsConditions = true;
            }
} while (!meetsConditions);

  return length;
}

function charTypePrompt() {
  var charTypes;
  var meetsConditions = false;
  var types = ["lowercase", "uppercase", "numeric", "special"];

  do {
    charTypes = prompt("At a minimum, choose one of four character types for your password:", "lowercase," + 
    " uppercase, numeric, and/or special");

    charTypes = charTypes.toLowerCase();
    if (charTypes === null) {
      break;
    }

    for (var i = 0; i< types.length; i++) {
      if (!charTypes.includes(types[i])) {
        types.splice(i, 1);
        i--;
      }
    }

    if (types.length !== 0){
      meetsConditions = true;
    } else {
      types = ["lowercase", "uppercase", "numeric", "special"];
    }

  } while (!meetsConditions)

  return types;
}
function generatePassword() {
  var length = lengthPrompt();
  var types = charTypePrompt();
  console.log(types);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);