export function getRandomExpression() {
  const expressions = [
    "GALLOPIN' GORGONS!",
    "GULPING GARGOYLES!",
    "MERLIN'S BEARD!",
  ];
  const i = Math.floor(Math.random() * expressions.length);
  return expressions[i];
}

export function getShortValue(num: number) {
  if (num > 999999) {
    return num.toString()[0] + "m";
  } else if (num > 99999) {
    return num.toString().slice(0, 3) + "k";
  } else if (num > 9999) {
    return num.toString().slice(0, 2) + "k";
  } else if (num > 999) {
    return num.toString()[0] + "k";
  }
  return num;
}

export const roundToValueMap = {
  1: 1,
  2: 2,
  3: 5,
  4: 10,
  5: 25,
  6: 50,
  7: 100,
  8: 250,
  9: 500,
  10: 1000,
  11: 2500,
  12: 5000,
  13: 10000,
  14: 25000,
  15: 50000,
  16: 75000,
  17: 100000,
  18: 250000,
  19: 500000,
  20: 750000,
  21: 1000000,
};
