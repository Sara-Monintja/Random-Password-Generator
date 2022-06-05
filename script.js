const generateButton = document.getElementById("generate");

function askPasswordLength(){
  
  //ask user how long will the password be
  const passwordLength = Number(prompt("How long is the password? Must be between 8 - 128"));
  
  console.log(passwordLength);

  // Nan
  const passwordLengthIsNan = isNaN(passwordLength);

  //0
  const userDidntEnterAnything = passwordLength === 0;
  
  // < 8 or > 128
  const passwordLengthIsOutOfRange = passwordLength < 8 || passwordLength > 128 

  if(passwordLengthIsNaN || userDidntEnterAnything || passwordLengthIsOutOfRange){
    return askPasswordLength();
  }

  return passwordLength; 

}

function askCriteria() {
 // ask do you want lowercase, uppercase, symbol, number
  const lowercaseWanted = confirm("Do you want lowercase?");
  const uppercaseWanted = confirm("Do you want uppercase?");
  const symbolWanted = confirm("Do you want symbol?");
  const numberWanted = confirm("Do you want number?");

 

  // user to select at least one criteria
  if( lowercaseWanted || uppercaseWanted || symbolWanted || numberWanted ){
    // use shorthand, where key and value has the same name/keyword
    return { 
      lowercaseWanted,
      uppercaseWanted,
      symbolWanted,
      numberWanted,
    };
  }
  return askCriteria();
}

generateButton.addEventListener('click', function(event){

  const passwordLength = askPasswordLength();
  
  const criteria = askCriteria();

  let characterSet = "" ; 

    // = characterSet + ----- there are more than 1 criteria, otherwise it will overwrite
  if (criteria.lowercaseWanted){
    characterSet = characterSet + "abcdefghijklmnopqrstuvwxyz)";
  }

  if (criteria.uppercaseWanted) {
    characterSet = characterSet + "ABCDEGHIJKLMNOPQRSTUVWXYZ";
  }

  if (criteria.symbolWanted) {
    characterSet = characterSet + "!@#$%^"
  }  
  
  if (criteria.symbolWanted) {
    characterSet = characterSet + "0123456789";
    // can also be written as characterSet += characterSet
  }

  // generate the random password based on the character set
  let password = "";
  // loop for passwordLength times, 
  for (let index = 0; index < passwordLength; index++) {
    
    const randomCharacter = characterSet[ Math.floor(Math.random() * characterSet.length) ]
  
    password += randomCharacter;   

  }

  console.log(password);

  document.getElementById('password').value = password;  

});
