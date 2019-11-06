// Write a function 'insertWhitespace' which takes a string and inserts whitespaces between lowercase and uppercase
// letters
// Example:

// insertWhitespace('HelloWorld') -> 'Hello World'
// insertWhitespace('MarvinTalksTooMuch') -> 'Marvin Talks Too Much'

function insertWhitespace(str) {
  str = str.replace(/([A-Z])/g, ' $1').trim();
  return str;
}


// for self-check:
console.log(insertWhitespace('HelloWorld') === 'Hello World');
console.log(insertWhitespace('MarvinTalksTooMuch') === 'Marvin Talks Too Much');