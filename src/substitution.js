// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here

    //return false if no alphabet was given or the alphabet is not 26 characters
    if(!alphabet || alphabet.length !== 26) {
      return false;
    }
    //return false is any of the alphabet characters are duplicated
    for(i=0; i < alphabet.length; i++) {
        if (alphabet.includes(alphabet[i], i+1)) {
            return false;
        }
    }

    const decoder = "abcdefghijklmnopqrstuvwxyz";
    const inputMsg = input.toLowerCase();
    let msg = ""; 
    
    //for each character in the input message
    for(let i=0; i < inputMsg.length; i++) {
      let currChar = inputMsg[i];

      //decode input message
      if(!encode) {
        if(currChar === " ") {
          msg += currChar
        } else {
          idx = alphabet.indexOf(currChar);
          msg += decoder[idx];
        }
      } else {
        //encode input message
        if(!decoder.includes(currChar)) {
          msg += currChar;
        } else {
          const index = decoder.indexOf(currChar);
          msg += alphabet[index];
        }
      }

    }
    return msg;
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
