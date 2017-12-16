function scoreStream(input) {
  input = input.trim();
  let isGarbo = false;
  let garboCount = 0;
  let score = 0;
  let depth = 1; // already in a group

  for(let i = 0, curr = input[0]; i < input.length; curr = input[++i]) {
    if(curr === '!') {
      i++  // move on, cause ignore next character
    } else if(isGarbo && curr !== '>') {
      garboCount++; // counting the amount of garbage
    } else if(curr === '<') {
      isGarbo = true; // start garbage sectoin
    } else if(curr === '>') {
      isGarbo = false; // end counting garbage
    } else if(curr === '{') {
      score += depth++; // score adds up as we nest groups
    } else if(curr === '}') {
      depth--; // just take the depth down 1 to "close" group
    }
  }

  return { score, garboCount };
}

module.exports = { scoreStream };