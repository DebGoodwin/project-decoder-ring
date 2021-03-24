// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const alphabet = [
    ["A","B","C","D","E"],
    ["F","G","H","I/J","K"],
    ["L","M","N","O","P"],
    ["Q","R","S","T","U"],
    ["V","W","X","Y","Z"]
  ];

  function polybius(input, encode = true) {
    // your solution code here
    
    let msg = "";
    //if decoding, verify that an even numbered string is given
    if(!encode) {
      let newArr = input.split(" ");
      const length = newArr.join("").length;
      //return false is an odd numbered string was given
      if (length % 2 === 1) {
          return false;
      } else {
          //input message is to decode
          return msg = decodeMsg(input);
      }
    } else {
      // input message is to encode
      return msg = encodeMsg(input);
    }
  }

  //decode the input string
  function decodeMsg(input) {
    let msg = "";
    for(let i=0; i<input.length; i++) {
      //each alphabet letter is encoded as two number characters
      let charOne = input[i];
      let charTwo = input[i+1];
      //place the space characters back into the return string
      if(charOne === " ") {
        msg += " ";
      } else {
        //find the alphabet letter
        let currChar = alphabet[charTwo-1][charOne-1];
        if (currChar === "I/J") {
            currChar = "("+ currChar + ")";
        }
        msg += currChar;
        i += 1;
      } 
    }
    msg = msg.toLowerCase();
    return(msg);
  }

  //encode the input string
  function encodeMsg(input) {
    let msg = "";
    const str = input.toUpperCase();
    for( let j = 0; j < str.length; j++) {
        let currChar = str[j]; 
        //keep the spaces in the encoded string
        if(currChar === " ") {
            msg += " "
        } else if (currChar === "I" || currChar === "J") {
            msg += "42"
        }
        else {
          //find the alphabet character and encode it 
          for(let i=0; i< alphabet.length; i++) {
            let match = alphabet[i];  
            if (match.includes(currChar)) {
              const index = match.indexOf(currChar);
              msg += index + 1;
              msg += i + 1;
            } 
          }
        }
      }
    return msg;
  }

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
