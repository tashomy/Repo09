function logicalOrOperator(num) {
  if (num < 20 || num > 30) return "Out";
  return "In";
}

logicalOrOperator(35);

module.exports = logicalOrOperator;
