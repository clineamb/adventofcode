class Registers {
  constructor() {
    this.regs = {};
    this.highest = 0;
  }

  getRegister(name) {
    if(!this.regs[name]) {
      this.regs[name] = 0;
    }

    return this.regs[name];
  }

  inc(name, value) {
    let oldValue = this.getRegister(name);

    this.regs[name] = oldValue + value;
    return this.regs[name];
  }

  dec(name, value) {
    let oldValue = this.getRegister(name);
    this.regs[name] = oldValue - value;

    return this.regs[name];
  }

  getAll() {
    return this.regs;
  }

  getLargestRegister() {
    let largest = {'value': 0 };

    for(let name in this.regs) {
      let curr = { 'name': name, 'value': this.getRegister(name) };

      if(curr.value > largest.value) {
        largest = curr;
      }
    }

    return largest;
  }

  checkHighest(name) {
    let curr = this.getRegister(name);

    if(curr > this.highest) {
      this.highest = curr;
    }

    return this.highest;
  }

  getHighest() {
    return this.highest;
  }
}

function routine(data) {
  let regs = new Registers();

  // first check if half
  data.forEach((d) => {
    let a = regs.getRegister(d.check);
    let b = d.value;
    let ok = false;

    switch(d.op) {
      case '>':
        ok = (a > b);
      break;
      case '>=':
        ok = (a >= b);
      break;
      case '<':
        ok = (a < b);
      break;
      case '<=':
        ok = (a <= b);
      break;
      case '==':
        ok = (a === b);
      break;
      case '!=':
        ok = ( a !== b);
      break;
    }

    if(ok) { regs[d.cmd](d.target, d.amt); }
    regs.checkHighest(d.target);
  });

  return regs;
}


module.exports = { Registers, routine };