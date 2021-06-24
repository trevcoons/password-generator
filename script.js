// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function lengthPrompt(){
  var length = 0;
  var meetsConditions = false;

  do {
    length = prompt("How many characters would you like your password to contain?", "Length must be 8 to 128 characters");

    if (length === null) {
      break;
     } else if (length >= 8 && length <= 128) {
              meetsConditions = true;
            }
} while (!meetsConditions);

  return length;
}