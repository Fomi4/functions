// Write a function wrap that takes 2 arguments - string and width. Your function must insert line breaks (\n) after
// the specified amount of characters (width)
// Example:
// wraps(ABCDEFGHIJKLIMNOQRSTUVWXYZ, 4) should return:
// ABCD
// EFGH
// IJKL
// IMNO
// QRST
// UVWX
// YZ

function wraps(string, width) {
  let chunks = [];
  for (let i = 0, charsLength = string.length; i < charsLength; i += width) {
      chunks.push(string.substring(i, i + width));
  }
  return chunks.join('\n').toString();
}

// // for self-check
console.log(wraps('abababab', 2) === 'ab\nab\nab\nab');
console.log(wraps('12345678', 4) === '1234\n5678');
