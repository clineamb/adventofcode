function stepper(instructions) {
  let pi = 0;
  let steps = 0;

  while(pi < instructions.length) {
    pi += instructions[pi]++;
    steps++;
  }

  return steps;
}

function stepperOffset(instructions, offset = 3) {
  let pi = 0;
  let steps = 0;

  while(pi < instructions.length) {
    let last = pi;
    pi += instructions[pi];

    if(instructions[last] >= offset) {
      instructions[last]--;
    } else {
      instructions[last]++;
    }

    steps++;
  }

  return steps;
}

module.exports = { stepper, stepperOffset };