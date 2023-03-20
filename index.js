//disable github copilot before practicing!

const arr = [1, 2, 3, 4, 5, 46, 6, 7, 8, 9, 10];

console.log(arr);

//TODO: Make Double Array
const double = arr.map((x) => x * 2);
console.log(double);

//TODO: Make Square Array
const square = arr.map((x) => x * x);
console.log(square);
//TODO: Make Binary Array
const binary = arr.map((x) => x.toString(2));
console.log(binary);

//TODO: Filter Odd Values in the Array - Practice
//
const oddArr = arr.filter((x) => x % 2);
console.log(oddArr);

//Even Value
const evenArr = arr.filter((x) => x % 2 === 0);
console.log(evenArr);

//Higher than 3
const higherThan3Arr = arr.filter((x) => x >= 3);
console.log(higherThan3Arr);

// Reduce to the sum of all values in an array
const sumArr = arr.reduce(function (acc, curr) {
  acc = curr + acc;
  return acc;
}, 0);

console.log(sumArr);

// Reduce to the max value
const arrMax = arr.reduce(function (max, curr) {
  if (curr > max) {
    max = curr;
  }
  return max;
}, 0);

console.log(arrMax);

//Reduce to the min Value
