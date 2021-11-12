// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;

}

function generatePassword() {
  let passwordLength = prompt('select a password length.');
  let lcChoice = confirm('Would you like to include lowercase characters?');
  let ucChoice = confirm('Would you like to include uppercase characters?');
  let scChoice = confirm('Would you like to include special characters?');
  let nChoice = confirm('Would you like to include numbers?');
  
  let lowerCase = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  let numbers = '0123456789'.split('');
  let specialChar = '!\"#$%&\'\(\)*+,-./:;<=>?@[\\]^_`{|}~'.split('');
  
  let charSet = [];
  if(lcChoice === true){
    charSet = [...charSet,...lowerCase];
  } 
  if(ucChoice === true){
    charSet = [...charSet,...upperCase];
  } 
  if(scChoice === true){
    charSet = [...charSet,...specialChar];
  } 
  if(nChoice === true){
    charSet = [...charSet,...numbers];
  } 
  
  let password = '';
  
  for (let i = 0; i < passwordLength; i++) {
    let charNumb = Math.floor(Math.random()*charSet.length);
    password += charSet[charNumb];
  }

  if(passwordLength < 8 || passwordLength > 128) {
    password = 'Password length must be greater than 8 characters or less than 128 characters.';
    return password;
  }
  
  if(charSet.length === 0){
    password = 'A minimum of one character set must be selected.'
    return password;
  } 
  
  // if(typeof(passwordLength.valueAsNumber) !== 'number') {
  //   password = 'Password length not accepted.'
  // } 
  console.log(typeof(passwordLength.valueAsNumber));

  return password;



}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



