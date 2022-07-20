// Assignment Code
var generateBtn = document.querySelector("#generate");

//initialize user object to use throughout.
var userPassword = {
  pwLength: 0,
  hasLower: false,
  hasUpper: false,
  hasNum: false,
  hasSC: false,
  password: "",

  //get user input here.
  getInputs: function () {
    var pwl = prompt("Please enter the length of the password you want from 8-128.");
    //is it set?  Is it less than 8 or greater than 128? is it No A Number?
    while (pwl === null || 8 > pwl || pwl > 128 || isNaN(pwl)) {
      //if it's null let's just cancel on out.
      if (pwl === null) {
        break;
      }
      // if it's not right let's try until lit is.
      pwl = prompt("Your value was not correct, please enter a length from 8 to 128 in numbers.");
    }
    //set the value here for use throughout.
    this.pwLength = pwl;
  }
}

// Write password to the #password input
function writePassword() {
  //let's  get the inputs.
  userPassword.getInputs();
  //let's output what we received from the user for debugging.
  console.log(userPassword)
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
