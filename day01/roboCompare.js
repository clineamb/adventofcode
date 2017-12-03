function roboCompare(input, offset = 1, i = 0, sum = 0) {
  let curr = input.charAt(i);
  let next = input.charAt((i + offset) % input.length); // circular

  if(curr === next) {
    sum += Number(curr);
  }

  if(i < input.length) {
    return roboCompare(input, offset, i + 1, sum);
  } else {
    return sum;
  }
}

module.exports = roboCompare;