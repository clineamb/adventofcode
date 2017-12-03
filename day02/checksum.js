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

module.exports = checksum;