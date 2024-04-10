function reverseString(word) {
  return word.split("").reverse().join("");
}

function isPalindrome(word) {
  return word === reverseString(word);
}

// Test cases
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("mom")); // true
console.log(isPalindrome("abba")); // true
console.log(isPalindrome("a")); // true
console.log(isPalindrome("hi")); // false
console.log(isPalindrome("robot")); // false


/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
