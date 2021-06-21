export function getRandomExpression() {
  const expressions = [
    "GALLOPIN' GORGONS!",
    "GULPING GARGOYLES!",
    "MERLIN'S BEARD!",
  ];
  const i = Math.floor(Math.random() * expressions.length);
  return expressions[i];
}
