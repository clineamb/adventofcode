var { TowerNode } = require('./Tower.js');

function getKeyAndWeight(tnStr) {
  let [ key, numStr ] = tnStr.split(' ');
  let weight = parseInt(numStr.replace(/\(|\)/g, ''));

  return { key, weight };
}

function parser(input) {
  let rows = input.split('\n');
  let dataRows = [];

  rows.forEach((r) => {
    let [ tnStr, subs ] = r.split('->').map((s) => { return s.trim(); })
    let data = getKeyAndWeight(tnStr);

    console.log(subs);

    data['subs'] = (subs ? subs.split(', ') : []);

    dataRows.push(data);
  });

  return dataRows;
}

module.exports = parser;