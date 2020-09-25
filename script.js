// Assignment Code
var generateBtn = document.querySelector("#generate");

// Create variables to refer to
var charLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "v", "w", "x", "y", "z"] ;

var charUpper = ["A", "B", "C","D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"] ;

var num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var sym = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"] ;


//Declaring my functions
var declareLength;
var declareSpecialCharacter;
var declareNumericCharacter;
var declareUpperCase;
var declareLowerCase;

// Create function to generate randoms
function getPasswordOptions() {
  var declareLength = prompt("Choose a password length. Must be between 8 and 120 characters (enter a number between 8 and 120)");

  while (declareLength < 7 || declareLength > 121) {
    alert("Password length must be between 8-120 characters Try again");
    var declareLength = prompt(
      "Please choose a length for your password. Must be between 8-120 characters."
    );
  }
  alert("Your password will contain " + declareLength + " characters");

  var declareSpecialCharacter = confirm(
    "Click OK if you would like to include special characters"
  );
    
  var declareNumericCharacter = confirm(
    "Click OK if you would like to include numeric characters"
  );
    
  var declareLowerCase = confirm(
    "Click OK if you would like to include lowercase characters"
  );
    
  var declareUpperCase = confirm(
    "Click OK if you would like to include uppercase characters"
  );

  // Loop if answer is outside the parameters

  while (
    declareUpperCase === false &&
    declareLowerCase === false &&
    declareSpecialCharacter === false &&
    declareNumericCharacter === false
  ) {
    alert("You must choose at least one parameter");
    var declareSpecialCharacter = confirm(
      "Click OK if you would like to include special characters"
    );
    var declareNumericCharacter = confirm(
      "Click OK if you would like to include numeric characters"
    );
    var declareLowerCase = confirm(
      "Click OK if you would like to include lowercase characters"
    );
    var declareUpperCase = confirm(
      "Click OK if you would like to include uppercase characters"
    );
  }
  //creating an object
var pwOptions = {
  declareLength : declareLength,
  declareSpecialCharacter : declareSpecialCharacter,
  declareNumericCharacter : declareNumericCharacter,
  declareUpperCase : declareUpperCase,
  declareLowerCase : declareLowerCase,
}  
return pwOptions;
}
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var result = arr[randomIndex];
  return result;
}

function generatePassword() {
  var options = getPasswordOptions();
  var result = [];
  var possibleChar = [];
  var guarChar = [];

  if (options.declareSpecialCharacter) {
    possibleChar = possibleChar.concat(sym);
    guarChar.push(getRandom(sym));
  }
  if (options.declareUpperCase) {
    possibleChar = possibleChar.concat(charUpper);
    guarChar.push(getRandom(charUpper));
  }
  if (options.declareLowerCase) {
    possibleChar = possibleChar.concat(charLower);
    guarChar.push(getRandom(charLower));
  }
  if (options.declareNumericCharacter) {
    possibleChar = possibleChar.concat(num);
    guarChar.push(getRandom(num));
  }

for (var i=0; i < options.declareLength; i++) {
    result.push(getRandom(possibleChar));
}

for (var i=0; i< guarChar.length; i++) {
    result[i] = guarChar[i]
}
return result.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

