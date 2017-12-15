function parser(input) {
  return input.split('\n').map((r) => {
    let [ regAction, ifState ] = r.split(' if ');
    let [ target, cmd, amt ] = regAction.split(' ');
    let [ check, op, value ] = ifState.split(' ');

    amt = Number(amt);
    value = Number(value);

    return { 
      target, cmd, amt, check, op, value
    };
  });
}

module.exports = parser;