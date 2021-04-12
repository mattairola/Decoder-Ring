// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const alphabet = {
      a: 11,
      b: 21,
      c: 31,
      d: 41,
      e: 51,
      f: 12,
      g: 22,
      h: 32,
      "(i/j)": 42,
      k: 52,
      l: 13,
      m: 23,
      n: 33,
      o: 43,
      p: 53,
      q: 14,
      r: 24,
      s: 34,
      t: 44,
      u: 54,
      v: 15,
      w: 25,
      x: 35,
      y: 45,
      z: 55,
      };

  function polybius(input, encode = true) {

    let result = "";
    if(!input) {return fasle};

    if(encode === true){
      for(let i=0; i<input.length; i++){
        let letter = input[i].toLowerCase();
        if(letter == 'i' || letter == 'j'){
          result += 42;
        }else if (letter === " "){
          result += " ";
        }else{
          let matches = Object.entries(alphabet).find(match => letter === match[0]);
          result += matches[1];
      } 
    }
  }else if(encode === false){
    let inputLength = input.split(/\s/).join('');
    if(inputLength.length % 2 !== 0) return false;
    for(let i=0; i<inputLength.length; i += 2){
      let num1 = input[i];
      let num2 = input[i + 1];
      let numbers = num1 + num2;
      if(num1 === ' '){
        result += ' ';
        i -= 1;
      }else {
        result += Object.keys(alphabet).find(key => alphabet[key] == numbers);
      }
    }
  }
  return result;
}
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
