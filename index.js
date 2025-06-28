function isPalindrome(word) {
  // Reverse the string and compare to the original
  const reversed = word.split('').reverse().join('');
  return word === reversed;
}

/* 
  Pseudocode:
  - Take the word
  - Reverse it
  - Compare reversed word to the original
  - Return true if they match, else false
*/

/*
  Explanation:
  A palindrome reads the same forward and backward.
  We reverse the input string and check if it matches the original.
  If yes, return true; if not, return false.
*/

// Test cases
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar")); // true

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot")); // false

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam")); // true

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a")); // true

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hello")); // false
}

module.exports = isPalindrome;
