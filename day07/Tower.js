class TowerNode {
  constructor(key, weight) {
    this.name = key;
    this.weight = weight;
    this.subs = []; // indicies in tower node
  }
}

class Tower {
  constructor(){
    this.nodes = [];
  }

  insertNode(n) {

  }
}

Tower.getBottom = (data) => {
  let bottom = '';

  let carryData = data.forEach(({ key, subs }) => {
    // check if any items carry the current one
    let checkIfCarried = data.filter((d) => {
      return d.subs.indexOf(key) > -1;
    });

    let isCarried = checkIfCarried.length > 0;

    if(!isCarried) {
      bottom = key;
    }
  });

  return bottom;
};

module.exports = { TowerNode, Tower };