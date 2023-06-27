function isPalindrome(word) {
  
  // convert word to an array
  const wordArray = word.split('')

  //reverse the array values
  const reverseWordArray = wordArray.reverse()

  //convert array to string
  const reverseWord = reverseWordArray.join('')

  // equate word to reversed word
  if(word === reverseWord){
    return true
  }else{
    return false
  }

}

// Write your algorithm here
/* 
   racecar === racecar // true
   robot === robot // false
   
/* 
  Add your pseudocode here
  convert word to array
  reverse the array values
  convert array to string
  if word = reverseWord: return true
    else return false
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
