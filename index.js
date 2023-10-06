function isPalindrome(word) {
  // Write your algorithm here
  let start = 0;
  let end = word.length - 1;

  while (start < end) {
      if (word[start] !== word[end]) {
          return false;
      }
      start++;
      end--;
  }
  return true;
}

// Test cases
console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("robot")); // Output: false
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false


/* 
  Add your pseudocode here
    Initialize two pointers, start and end, pointing to the first and last characters of the input string respectively.
    Iterate until start is less than end.
    If str[start] is not equal to str[end], return false (not a palindrome).
    Increment start and decrement end.
    If the loop completes without returning false, return true (palindrome).
*/

/*
  Add written explanation of your solution here
 The pseudocode above uses two pointers to compare characters from the start and end of the string simultaneously. 
  If at any point the characters at these positions are not equal, the function determines that the string is not a palindrome and returns false.
   If the loop completes without finding any unequal pairs, the function confirms that the string is a palindrome and returns true
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
