// Assignment Code
var generateBtn = document.querySelector("#generate"); //querySelector returns the first element within the doc that matches selector
var resetBtn = document.querySelector("#reset");
var copyBtn = document.querySelector("#copy");
var passwordLength = 0;
var includeLowercase = "";
var includeUppercase = "";
var includeNumbers = "";
var includeSpecialChar = "";
// var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
// "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O",
// "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = "0123456789";
var specialCharacters = "!\"#\$%\&\'()*+,-./:;<=>?@[\\]^_`{|}~";
// var specialCharacters = ["!","/","#","$","%", "&", "/'", "(", ")", "*", "+", "/,", "-",
//  ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", " \\", "]", "^", "_", "`", "{", "|", "}", "~"];


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  };
  
 // Add event listener to all buttons
generateBtn.addEventListener("click", writePassword);
resetBtn.addEventListener("click", resetButton)
copyBtn.addEventListener("click", copyPasswordText)

  //generates password
function generatePassword() {
    passwordLengthFunction();
    includeLowercaseFunction();
    includeUppercaseFunction();
    includeNumbersFunction();
    includeSpecialCharFunction();

    if(includeLowercase === "N" && includeUppercase === "N" && includeNumbers === "N" && includeSpecialChar === "N") {
        alert("You must choose 'Y' for at least one type of character to generate password. Please try again.");
        generatePassword();
    }

    var charactersInPassword = "";
    var countPasswordCharacters = passwordLength;

    for( var i = 0; i < passwordLength; i++){
    if(includeLowercase === "Y" && countPasswordCharacters > 0) {
        index = lowercaseLetters.charAt(Math.floor(Math.random()*lowercaseLetters.length));
        charactersInPassword = charactersInPassword.concat(index);
        countPasswordCharacters -= 1;
    };
    if(includeUppercase === "Y" && countPasswordCharacters > 0) {
        index = uppercaseLetters.charAt(Math.floor(Math.random()*uppercaseLetters.length));
        charactersInPassword = charactersInPassword.concat(index);
        countPasswordCharacters -= 1;
    };
    if(includeNumbers === "Y" && countPasswordCharacters > 0) {
        index = numbers.charAt(Math.floor(Math.random()*numbers.length));
        charactersInPassword = charactersInPassword.concat(index);
        countPasswordCharacters -= 1;
    };
    if(includeSpecialChar === "Y" && countPasswordCharacters > 0) {
        index = specialCharacters.charAt(Math.floor(Math.random()*specialCharacters.length));
        charactersInPassword = charactersInPassword.concat(index);
        countPasswordCharacters -= 1;
    }
    }

    console.log("This is the generated password:")
    console.log(charactersInPassword);
    console.log("Confirm that the desired password length matches the output:")
    console.log(charactersInPassword.length);

    return charactersInPassword;

};

 function passwordLengthFunction() {
    passwordLength = prompt("How long do you want your password to be? (Choose between 8-128 characters)");
  
      if (!passwordLength) {
        return;
      };
  
      if (passwordLength === " " || isNaN(passwordLength)  || passwordLength < 8 || passwordLength > 128) {
        alert("You did not meet the criteria for password length, please try again.");
        passwordLengthFunction();
      } ;
  
      console.log("This is the password length:");
      console.log(passwordLength); //checks the value of password length
  
 }

 function includeLowercaseFunction() {
    includeLowercase = prompt("Do you want your password to include lowercase letters? (Y or N)");
    includeLowercase = includeLowercase.toUpperCase();

    if (!includeLowercase) {
      return;
    };

    if(includeLowercase !== "Y" && includeLowercase !== "N") {
      alert("Please enter Y or N.");
      includeLowercaseFunction();
    };

    console.log("Did they choose lowercase letters?");
    console.log(includeLowercase);
}

function includeUppercaseFunction() {
    includeUppercase = prompt("Do you want your password to include uppercase letters? (Y or N)");
    includeUppercase = includeUppercase.toUpperCase();

    if (!includeUppercase) {
      return;
    };

    if(includeUppercase !== "Y" && includeUppercase !== "N") {
      alert("Please enter Y or N.");
      includeUppercaseFunction();
    };

    console.log("Did they choose uppercase letters?");
    console.log(includeUppercase);
}

function includeNumbersFunction() {
    includeNumbers = prompt("Do you want your password to include numbers? (Y or N)");
    includeNumbers = includeNumbers.toUpperCase();

    if (!includeNumbers) {
      return;
    };

    if(includeNumbers !== "Y" && includeNumbers !== "N") {
      alert("Please enter Y or N.");
      includeNumbersFunction();
    };

    console.log("Did they choose numbers?");
    console.log(includeNumbers);
}

function includeSpecialCharFunction() {
    includeSpecialChar = prompt("Do you want your password to special characters? (Y or N)");
    includeSpecialChar = includeSpecialChar.toUpperCase();

    if (!includeSpecialChar) {
      return;
    };

    if(includeSpecialChar !== "Y" && includeSpecialChar !== "N") {
      alert("Please enter Y or N.");
      includeSpecialCharFunction();
    };

    console.log("Did they choose special characters?");
    console.log(includeSpecialChar);
}

function copyPasswordText() {
    var copyText = document.querySelector("#password");
    copyText.focus();
    copyText.select();
    document.execCommand('copy');
}

function resetButton() {
 var resetText = document.querySelector("#password");
  
 resetText.value = "";
}
 
