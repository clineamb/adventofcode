function stateHelper() {
  let states = [];

  function _prep(banks) {
    return banks.join(',');
  }

  return {
    isUnique: (banks) => {
      return states.indexOf(_prep(banks)) < 0;
    },
    add: (banks) => {
      states.push(_prep(banks));
      states = states.sort();
      return true;
    },
    log: (idx, startTime) => { 
      if(startTime) {
        console.log(`ROUTINE ${idx} tick:`, Date.now() - startTime);
      }

      console.log(`ROUTINE ${idx}`, states[states.length-1]);
    },
    getLastStateStr: () => {
      return states[states.length-1];
    },
    lastStateMatches: (stateStr) => {
      return states[states.length - 1] === stateStr;
    }
  }
}

function getMostFilledIndex(banks) {
  let max = Math.max(...banks);
  return banks.indexOf(max);
}

function allocate(banks) {
  let idx = getMostFilledIndex(banks);
  let payload = banks[idx];

  banks[idx] = 0; // empty bank

  while(payload > 0) {
    banks[(++idx % banks.length)] += 1;
    payload--;
  }

  return banks;
}

function memdist(banks) {
  let count = 0;
  let state = stateHelper();
  let startTime = Date.now();

  while(state.isUnique(banks)) {
    state.add(banks);
    banks = allocate(banks);
    count++;
    state.log(count, startTime);
  }

  return count;
}

function loopCounter(banks) {

}

module.exports = { memdist, loopCounter };