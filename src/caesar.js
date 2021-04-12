// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope 
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split(''); 

  function caesar(input, shift, encode = true) {

    let result = '';

    if(!shift || (shift === 0 || shift < -25 || shift > 25)){
      return false;
    }

    //encoding
    if(encode === true) {

      for(let i=0; i<input.length; i++){
        let current = input[i].toLowerCase();
        const letter = alphabet.includes(current);

        if(letter === false) {
          result += current;
    
        }else{
          const charIndex = alphabet.findIndex((c) => c === current)

          let number = charIndex + shift;

            if(number > 25){
              let newIndex = number - 26;
              result += alphabet[newIndex];
            }else if(number < 0){
              let index2 = number + 26;
              result += alphabet[index2];
            }else{
              result += alphabet[number];
            }
          }
        }
      return result;

    //decoding
    }else{
      for(let i=0; i<input.length; i++){
        let current = input[i].toLowerCase();
        const letter = alphabet.includes(current);

        if(letter === false) {
          result += current;

        }else{
          const charIndex = alphabet.findIndex((c) => c === current);
          let number = charIndex - shift;
          
          if(number < 0){
            let newIndex = number + 26; 
            result += alphabet[newIndex];
          }else if(number > 25){
            let index2 = number - 26;
            result += alphabet[index2];
          }else{
            result += alphabet[number];
          }
        }
      } 
      return result; 
    }
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
