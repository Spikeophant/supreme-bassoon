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

    // set the value for lower, upper, num, and sc to the results of the alert popup.  We'll validate after.
    this.hasLower = confirm("Click okay to add lower case letters to your password.");
    this.hasUpper = confirm("Click okay to add upper case letters to your password.");
    this.hasNum = confirm("Click okay to add numbers to your password.");
    this.hasSC = confirm("Click okay to add special chars to your password. ex: !@#$");

    //validate the inputs above
    if (!this.hasLower && !this.hasUpper && !this.hasNum && !this.hasSC) {
      alert("You failed to add any character types to your password character pool, please click Generate password " +
      "Again and click okay on at least one character type.")
    }
  },

  // add method to check if we have data in our userPassword object.  If the pwLength is 0, we've never gathered data.
  // Or perhaps we intend to gather again.
  hasData: function () {
    return this.pwLength !== 0;
  },
  // Generate password
  generatePassword: function () {
    console.log("Generating Password.")
    //do we have the data we need to gen one?
    if (this.hasLower || this.hasUpper || this.hasNum || this.hasSC) {
      var passwordChars = "";
      if (this.hasLower) {
        passwordChars = passwordChars.concat("abcdefghijklmnopqrstuvwxyz");
      }
      if (this.hasUpper) {
        passwordChars = passwordChars.concat("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
      }
      if (this.hasNum) {
        passwordChars = passwordChars.concat("1234567890");
      }
      if (this.hasSC) {
        passwordChars = passwordChars.concat("!@#$%^&*(){}[]:;',.<>?/-_=+")
      }
      var pass = "";
      for (var i = 0; i < passwordChars.length; i++) {
        pass += passwordChars.charAt(Math.floor(Math.random() * this.pwLength))
      }
      this.password = pass;
    } else {
        alert("Something went wrong, please try again.");
        console.log("Something went wrong, please try again: ")
        console.log(this.userPassword)
      }
    }
}

// Write password to the #password input
function writePassword() {
  //let's  get the inputs.
  userPassword.getInputs();
  userPassword.generatePassword();
  //let's output what we received from the user for debugging.
  console.log(userPassword);
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = userPassword.password;

  //once we write password reset the truthiness of the object hasData method.
  userPassword.pwLength = 0;
  //remove password from memory.
  userPassword.password = "";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
