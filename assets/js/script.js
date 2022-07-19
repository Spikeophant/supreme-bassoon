// Assignment Code
var generateBtn = document.querySelector("#generate");

//initialize user object to use throughout.

var userPassword = {
  pwLength: 0,
  hasLower: false,
  hasUpper: false,
  hasNum: false,
  hasSC: false,
  password: ""
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
