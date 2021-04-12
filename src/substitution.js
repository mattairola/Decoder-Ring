// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {

    const realAlphabet = 'abcdefghijklmnopqrstuvwxyz ';
    
    if(!alphabet || alphabet.length !== 26){
      return false;
    }

    for(duplicate of alphabet){
      if(alphabet.indexOf(duplicate) != alphabet.lastIndexOf(duplicate)) 
      return false;
    }

    const newAlphabet = [...alphabet, ' '];
    input = input.toLowerCase();
    const cipher = [];

    for(let i=0; i<input.length; i++){
      if(encode === true){
        cipher.push(newAlphabet[realAlphabet.indexOf(input[i])]);
      }
      else{
      //encode === false;
        cipher.push(realAlphabet[newAlphabet.indexOf(input[i])]);
      }
    }
    return cipher.join('');
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
