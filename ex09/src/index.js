function functionElse(num) {
  if (num <= 5) {
    return "5 or smaller";
  } else {
    return "Bigger than 5";
  }
}

functionElse(20);

module.exports = functionElse;
