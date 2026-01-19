const palindromeCheck = (palindromeWord) => {
    let revWord = '';
    for(let i=palindromeWord.length -1 ; i>=0; i--){
        revWord +=palindromeWord[i];
    }

      return revWord === palindromeWord; 
}

module.exports = palindromeCheck;