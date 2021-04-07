// Assignment Code
var generateBtn = document.querySelector("#generate"); //querySelector returns the first element within the doc that matches selector
var generatePassword = 0;
var includeLowercase = "";
var specialCharacters = ["!","/","#","$","%", "&", "/'", "(", ")", "*", "+", "/,", "-",
 ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", " \\", "]", "^", "_", "`", "{", "|", "}", "~"];



console.log(specialCharacters);

console.log("This is what the query selector returns:");
console.log(generateBtn);

@@ -20,17 +27,34 @@ generateBtn.addEventListener("click", writePassword); //generateBtn is defined o

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