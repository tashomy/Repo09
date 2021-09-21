function myDoWhile() {
  var i = 0;
  var myNumbers = "";
  do {
    if (i == 9) {
      myNumbers += i;
      break;
    }
    myNumbers += i + ", ";
    i++;
  } while (i < 10);

  return myNumbers;
}

console.log(myDoWhile());

module.exports = myDoWhile;
