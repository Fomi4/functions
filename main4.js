// Write a function isUnique which takes a string and returns true if the string consists of unique characters.
// Otherwise return false.

function isUnique(str) {
  for (let i = 0; i < str.length; i++) {
    let character = str[i];
    if (str.indexOf(character, i + 1) > -1) {
      return false;
    }
  }

  return true;
}

// for self-check
console.log(isUnique('abcde') === true);
console.log(isUnique('abccde') === false);