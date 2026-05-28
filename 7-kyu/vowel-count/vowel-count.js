function getCount(str) {
  const vowels = "aeiou";
​
  return str
    .split("")
    .filter(letter => vowels.includes(letter))
    .length;
}
​
console.log(getCount("hello")); // 2
console.log(getCount("abracadabra")); // 5