class TowerNode {
  constructor(key, weight) {
    this.name = key;
    this.weight = weight;
    this.subs = [];
  }

  addSub(subNode) {
    if(!subNode instanceof TowerNode) {
      return false;
    }
  }
}

class Tower {

}

module.exports = { TowerNode, Tower };