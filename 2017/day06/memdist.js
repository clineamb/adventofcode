function stateHelper() {
  var states = [];
  var dupe = '';

  function _prep(banks) {
    return banks.join(',');
  }

  return {
    isUnique: (banks) => {
      let isUnique = states.indexOf(_prep(banks)) < 0;
      return isUnique;
    },
    add: (banks) => {
      states.push(_prep(banks));
      states = states.sort();
      return true;
    },
    log: (idx, startTime) => { 
      if(startTime) {
        console.log(`ROUTINE ${idx} -- tick:`, Date.now() - startTime);
      }
      console.log(`ROUTINE ${idx} --`, states[states.length-1]);
    },
    hasSeenDupe(banks) {
      if(dupe.length <= 0) {
        return false;
      }
      // console.log('DUPE', dupe);
      return dupe === _prep(banks);
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

function memdist(banks, log=false) {
  let count = 0;
  let state = stateHelper();
  let startTime = Date.now();

  while(state.isUnique(banks)) {
    state.add(banks);
    banks = allocate(banks);
    count++;

    if(log) { state.log(count, startTime); }
  }

  return count;
}

function loopCounter(banks, log=false) {
  let count = 0;
  let state = stateHelper();
  let sawDupe = false;

  while(!state.hasSeenDupe(banks)) {
    if(!state.isUnique(banks) && !sawDupe) {
      count = 0; // reset the count
      sawDupe = true;
    }

    state.add(banks);
    banks = allocate(banks);
    count++;

    if(log) { state.log(count) }
  }

  return count;
}

module.exports = { memdist, loopCounter };