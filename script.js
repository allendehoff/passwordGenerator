//variable targeting button
var generateBtn = document.querySelector("#generate");
//variable targeting password output field
var passwordText = document.querySelector("#password");

//function to generate password
function writePassword() {

  //prompt to determine how long the user wants their password to be and making sure it is an integer
  var pwlength = parseInt(prompt("How many characters would you like your new password to be? Pick a number 8 - 128."))

  //checks to make sure user selected a valid password length and break script if they did not
  if (pwlength === NaN || pwlength < 8 || pwlength > 128) {
    alert("Your password needs to be 8 - 128 charaters. Please select OK and press the 'Generate Password' button again.")
    return;
  }

  // sets empty strings to be filled and resets all variables to false so that program can be run multiple times without conflicts
  var randomCharacters = "";
  var characters = "";
  var uppercase = false
  var lowercase = false
  var nums = false
  var spchar = false

  //prompt for uppercase letters
  var uppercase = confirm("Would you like uppercase letters?")

  //promt for lowercase letters
  var lowercase = confirm("Would you like lowercase letters?")

  //prompt for numbers
  var nums = confirm("Would you like numbers?")

  //prompt for special characters
  var spchar = confirm("Would you like special characters?")

  //ensures that at least one of the types of characters were selected by the user
  if (!(uppercase || lowercase || nums || spchar)) {
    alert("You must select at least one type of character for your password. Please select OK and press the 'Generate Password' button again.")
    return;
  }

  //if user selects uppercase letters, adds uppercase letters to characters variable and adss one random uppercase to password
  if (uppercase === true) {
    var uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    characters += uppers
    randomCharacters += getChar(uppers)
  }

  //if user selects lowercase letters, adds lowercase letter to characters variable and adds one random lowercase to password
  if (lowercase === true) {
    var lowers = "abcdefghijklmnopqrstuvwxyz"
    characters += lowers
    randomCharacters += getChar(lowers)
  }

  //if user selects numbers, adds numbers to characters variable and adds on random number to password
  if (nums === true) {
    var numbers = "0123456789"
    characters += numbers
    randomCharacters += getChar(numbers)
  }

  //if uer selects special characters, adds special characters to characters variable and adds on random special character to password
  if (spchar === true) {
    var specials = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
    characters += specials
    randomCharacters += getChar(specials)
  }

  //loop that generates random characters from characters variable the number of times selected by the user less the number of characters added already
  for (var i = randomCharacters.length; i < pwlength; i++) {
    randomCharacters += getChar(characters)
  }


  //return result to the html text area for password
  passwordText.value = randomCharacters;
}

// adds event listener to generate password button and setTimeout makes sure that the form is cleared before running the program again
generateBtn.addEventListener("click", function(){
  passwordText.value = "";
  setTimeout(function(){ writePassword() }, 1);
});

//helper function to run helper function below on a specified string (made with tutor's guidance)
function getChar(str) {
  return str[getRandIndex(str)]
}

//helper function to select a random index position from a string (made with tutor's guidance)
function getRandIndex(str) {
  return Math.floor(Math.random() * str.length)
}
