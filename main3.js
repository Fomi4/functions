// Write a function squareNums which takes an array of elements and returns it but with every element squared.
// Example:
// squareNums([1, 2, 3, 4, 5]) -> [1, 4, 9, 16, 25]
// squareNums([8, 9, 4, 2]) -> [64, 81, 16, 4]

function squareNums(nums) {
  let squares = [];
  for (let i = 0; i < nums.length; i++) {
    squares.push(nums[i] ** 2);
  }

  return squares;
}

// for self-check
let result = squareNums([1, 2, 3, 4, 5]);
console.log(result[0] === 1);
console.log(result[1] === 4);
console.log(result[2] === 9);
console.log(result[3] === 16);
console.log(result[4] === 25);