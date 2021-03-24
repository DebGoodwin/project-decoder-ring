// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    if(!shift || shift === 0 || shift < -25 || shift > 25) {
      return false;
    };

    let msg = "";
    const str = input.toLowerCase();
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    //if decoding, reverse the shift direction
    if(!encode) {
        shift = shift * -1;
    }

    for(let i = 0; i < str.length; i++) {
      //only encode letters of the alphabet, keep spaces and other symbols 
      if (alphabet.includes(str[i])) {
        const index = alphabet.indexOf(str[i]);
        let offset = index + shift;
        //wrap around if at the end of the alphabet
        if (offset > 25) {
            offset = offset - 26;
        } else if (offset < 0) {
            offset = 26 + offset; 
        }
        //add the encoded character to the return string
        newChar = alphabet[offset];
        msg += newChar;
      } else {
        msg += str[i];
      }
    }
    return msg;
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
