function generatePassword(length, level, value = 1) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let arr = [];
    const digits = '0123456789';
    const symbols = '!#$%&()*+,-./:;<=>?@[]^_{|}~';  


   for (let k = 0; k < value; k++) {   
    let newPassword = '';
     
    if (level === 'easy') {
     
     for(let i = 0; i < length; i++) {
        const randomAlphabet = alphabet.charAt([Math.floor(Math.random() * alphabet.length)]);
         newPassword += randomAlphabet;

      } 
    }
      else if (level === 'medium') {
       
        for(let i = 0; i < length; i++) {
            const randomAlDigits = alphabet.concat(digits)
            let onenSymbol = randomAlDigits.charAt([Math.floor(Math.random() * randomAlDigits.length)]);
            newPassword += onenSymbol;
         }
    } 
      else if (level === 'hard') {
        
        for(let i = 0; i < length; i++) {
            const randomAlDigSymbol = alphabet.concat(digits, symbols)
            let onenSymbol = randomAlDigSymbol.charAt([Math.floor(Math.random() * randomAlDigSymbol.length)]);
             newPassword += onenSymbol;
      }
    }
    arr.push(newPassword);
}
  return value > 1 ? arr : arr.join('-'); 
} 
console.log(generatePassword(6, 'hard', 3))