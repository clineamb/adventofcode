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
  let phraseArr = phrase.split(' ').sort();

  phraseArr = phraseArr.map((p) => {
    return  p.split('').sort().join('');
  });

  return passphraseCheck(phraseArr.join(' '));
}

module.exports = { passphraseCheck, anagramCheck };