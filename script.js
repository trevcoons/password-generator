// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function initialPrompt(){
  var characterLength = 0;
  var conditionSatisfied = false;

  do {
    characterLength = prompt("How many characters would you like your password to contain?", "Must be a minimum of 8 to maximum of 128 characters");

    if (characterLength === null) {
      break;
     } else if (characterLength >= 8 && characterLength <= 128) {
              conditionSatisfied = true;
            }
} while (!conditionSatisfied);

  return characterLength;
}

function secondPrompt() {
  var typeOfCharacter;
  var conditionSatisfied = false;
  var characterTypes = ["lowercase", "uppercase", "numeric", "special"];

  do {
    typeOfCharacter = prompt("At a minimum, choose one of four character types for your password:", "lowercase," + 
    " uppercase, numeric, and/or special");
    console.log(typeOfCharacter)
    typeOfCharacter = typeOfCharacter.toLowerCase();
    if (typeOfCharacter === null) {
      break;
    }

    for (var i = 0; i < characterTypes.length; i++) {
      if (!typeOfCharacter.includes(characterTypes[i])) {
        characterTypes.splice(i, 1);
        i--;
      }
    }

    if (characterTypes.length !== 0){
      conditionSatisfied = true;
    } else {
      characterTypes = ["lowercase", "uppercase", "numeric", "special"];
    }

  } while (!conditionSatisfied)

  return characterTypes;
}

function createPassword(characterLength, characterTypes) {
  var password = "";
  var charTypes = {
    letterCharacter: "abcdefghijklmnopqrstuvwxyz",
    numberCharacter: "0123456789",
    specialCharacter: "+_)(*&^%$#@!~|}{\][';:?></.,-="
  };

  var stringC = "";
  if (characterTypes.includes("lowercase")) {
    stringC += charTypes["letterCharacter"];
  }
  if (characterTypes.includes("uppercase")) {
    stringC += charTypes["letterCharacter"].toUpperCase();
  }
  if (characterTypes.includes("numeric")) {
    stringC += charTypes["numberCharacter"];
  }
  if (characterTypes.includes("special")) {
    stringC += charTypes["specialCharacter"]
  }
  console.log(stringC);
  var randomize;

  for (var i = 0; i < characterLength; i++) {
    randomize = Math.floor(Math.random() * stringC.length);

    password += stringC.charAt(randomize);
  }
  return password;
}

function generatePassword() {
  var characterLength = initialPrompt();
  var characterTypes = secondPrompt();

  return createPassword(characterLength, characterTypes);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
