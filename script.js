// Assignment Code
var generateBtn = document.querySelector("#generate"); //querySelector returns the first element within the doc that matches selector
var generatePassword = 0;
var includeLowercase = "";
var includeUppercase = "";
var includeNumbers = "";
var includeSpecialChar = "";
var specialCharacters = ["!","/","#","$","%", "&", "/'", "(", ")", "*", "+", "/,", "-",
 ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", " \\", "]", "^", "_", "`", "{", "|", "}", "~"];
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
"p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O",
"P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];



console.log(lowercaseLetters.length);

console.log("This is what the query selector returns:");
console.log(generateBtn);

generateBtn.addEventListener("click", writePassword); //generateBtn is defined o

//generates password
function generatePassword() {

  var passwordLength = prompt("How long do you want your password to be? (Choose between 8-128 characters)");
  if (passwordLength === " " || passwordLength === isNaN || passwordLength < 9 || passwordLength > 128) {
    alert("You did not meet the criteria for password length, please try again.")
    return;
  } ;
  console.log("This is the password length:");
  console.log(passwordLength); //checks the value of password length

  //var passwordTypes = 
    if (!passwordLength) {
      return;
    };

    if (passwordLength === " " || isNaN(passwordLength)  || passwordLength < 9 || passwordLength > 128) {
      alert("You did not meet the criteria for password length, please try again.");
      passwordLength = prompt("How long do you want your password to be? (Choose between 8-128 characters)");
    } ;

    console.log("This is the password length:");
    console.log(passwordLength); //checks the value of password length

  var includeLowercase = prompt("Do you want your password to include lowercase letters? (Y or N)");
  includeLowercase.toUpperCase();

  //return password;
    if (!includeLowercase) {
      return;
    };

    if(includeLowercase !== "Y" && includeLowercase !== "N") {
      alert("Please enter Y or N.");
      includeLowercase = prompt("Do you want your password to include lowercase letters? (Y or N)");
    };

    console.log("Did they choose lowercase letters?");
    console.log(includeLowercase);

}

} 