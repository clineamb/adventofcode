function passphraseCheck(phrase) {
  let phraseArr = phrase.split(' ').sort(); // should be enough

  for(let i = 0; i < phraseArr.length; i++) {
    if(phraseArr[i] === phraseArr[(i+1 % phraseArr.length)]) {
      return false;
    }
  }

  return true;
}

function anagramCheck(phrase) {
  
}

module.exports = passphraseCheck;