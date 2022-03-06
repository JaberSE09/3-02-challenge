// Assignment code here
function  generatePassword(){
  var numbers = "0123456789";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var symbols = "!@#$%^&*()";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lengthpass = "";
  var criteria="";
  var pass = "";

  if(type == "upppercase"){

    criteria += upperCase;
  }
  if(type == "lowercase"){

    criteria += lowerCase;
  }
  if(type == "symbols"){

    criteria += symbols;
  }
  if(type == "numberic"){

    criteria += numbers;
  }
  return pass;
}

function alert(){
alert



}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
""
  passwordText.innerHTML = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
