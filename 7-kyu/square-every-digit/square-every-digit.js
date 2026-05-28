function squareDigits(num) {
  return Number(
    num
      .toString()
      .split("")
      .map(digit => digit ** 2)
      .join("")
  );
}
​
console.log(squareDigits(9119)); // 811181
console.log(squareDigits(765)); // 493625