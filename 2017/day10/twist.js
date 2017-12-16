function hash(elements, lengths) {

  let skip = 0;
  let ci = 0; // current index
  let size = lengths.length;

  for(let li = 0; li < lengths.length; li++) {
    let len = lengths[li];
    let rest;
    let target = elements.slice(ci, len);
    
    if(target.length < len) {
      target = target.concat(elements.slice(0, len - target.length))
      rest = elements.slice(len);
    } else {
      rest = elements.slice(ci + len);
    }

    elements = target.reverse().concat(rest);
    console.log(elements[ci], target, rest, '==>', elements);


    ci += (len + skip) % elements.length;
    skip++;
  }

  return {
    getFirstTwo() {
      return elements.slice(0,2);
    },
    multiply() {
      return elements.slice(0,2).reduce((a, mem) => { return a * mem; });
    },
    getFinal() {
      return elements;
    }
  }
}

module.exports = { hash };