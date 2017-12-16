function getSide(num) {
  let side = Math.ceil(Math.sqrt(num));
  return (side % 2 !== 0 ? side : side + 1);
}

function spiralStepCount(num) {
  let side = getSide(num);
  let toCenter = (side - 1) / 2;
  let directions = [];

  // 4 directions
  for(let i = 0; i < 4; i++) {
    directions.push(
      Math.pow(side, 2) - ((side - 1) * i) - Math.floor(side/2)
    );
  }

  directions = directions.map((dir) => {
    return Math.abs(dir - num);
  });

  let minDist = Math.min(...directions);

  return minDist + toCenter;
}

module.exports = { spiralStepCount }