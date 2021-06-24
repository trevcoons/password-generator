// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function initialPrompt(){
  var length = 0;
  var conditionSatisfied = false;

  do {
    length = prompt("How many characters would you like your password to contain?", "Must be a minimum of 8 to maximum of 128 characters");

    if (length === null) {
      break;
     } else if (length >= 8 && length <= 128) {
              conditionSatisfied = true;
            }
} while (!conditionSatisfied);

  return length;
}

function characterPrompt() {
  var typeOfCharacter;
  var conditionSatisfied = false;
  var types = ["lowercase", "uppercase", "numeric", "special"];

  do {
    typeOfCharacter = prompt("At a minimum, choose one of four character types for your password:", "lowercase," + 
    " uppercase, numeric, and/or special");

    typeOfCharacter = typeOfCharacter.toLowerCase();
    if (typeOfCharacter === null) {
      break;
    }

    for (var i = 0; i< types.length; i++) {
      if (!typeOfCharacter.includes(types[i])) {
        types.splice(i, 1);
        i--;
      }
    }

    if (types.length !== 0){
      conditionSatisfied = true;
    } else {
      types = ["lowercase", "uppercase", "numeric", "special"];
    }

  } while (!conditionSatisfied)

  return types;
}
function generatePassword() {
  var length = initialPrompt();
  var types = characterPrompt();
  console.log(types);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);