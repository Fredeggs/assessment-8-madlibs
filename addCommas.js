function addCommas(number) {
  let negative;
  let stringNum = number.toString().split("");
  stringNum[0] === "-" ? (negative = stringNum.shift()) : (negative = "");
  const withCommas = stringNum.map((digit, idx) =>
    (stringNum.length - (idx + 1)) % 3 === 0 && idx + 1 != stringNum.length
      ? digit + ","
      : digit
  );
  console.log(negative + withCommas.join(""));
  return negative + withCommas.join("");
}

addCommas(1234567);

module.exports = addCommas;
