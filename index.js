function isPalindrome(word) {
  // Write your algorithm here
  var reversed = word.split("").reverse().join("")

  if (reversed === word) {
    return true;
  }else{
    return false;

  }

  //console.log(reversed)
}
isPalindrome('ab')

/* 
  Add your pseudocode here

  reverse the input
   if the reversed string === to input
    return true
  else
    return false

*/

/*
  Add written explanation of your solution here

  returs true if string is a palindrome and false if not
  a pilindrome is a word that even when reversed will be same as original word. 

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("=>", isPalindrome("abba"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
