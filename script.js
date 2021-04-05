// Assignment Code
var generateBtn = document.querySelector("#generate"); //querySelector returns the first element within the doc that matches selector


console.log("This is what the query selector returns:");
console.log(generateBtn);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); //targets the text area where password will be displayed

  passwordText.value = password; //sets the value of passwordText to the variable password

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); //generateBtn is defined on line 2, which targets the Generate password button, activated when clicked

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

  //return password;

}