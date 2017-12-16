function checksum(sheet) {
  let rowSums = sheet.map((row) => {
    let max = Math.max(...row);
    let min = Math.min(...row);
    return max - min;
  });

  return rowSums.reduce((digit, sum) => {
    return digit + sum;
  });
}

function getEvenDividers(row) {
  for(let i=0; i<row.length; i++) {
    let curr = row[i];

    let division = row.filter((div2) => {
      return div2 % curr === 0;
    });

    if(division.length === 2) {
      return Math.max(...division) / Math.min(...division);
    }
  }
}

function checkmod(sheet) {
  let rowDivs = sheet.map(getEvenDividers);

  return rowDivs.reduce((divResult, sum) => {
    return divResult + sum;
  });
}

module.exports = { checksum, checkmod, getEvenDividers };