//Palindrome
console.log("==Palindrome==");
function palindrome(str) {
  /* remove special characters, spaces and make lowercase*/
  var removeChar = str.replace(/[^A-Z0-9]/gi, "").toLowerCase();

  /* reverse removeChar for comparison*/
  var checkPalindrome = removeChar.split("").reverse().join("");

  /* Check to see if str is a Palindrome*/
  if (removeChar === checkPalindrome) {
    return console.log(str + "   # --> palindrome");
  } else {
    return console.log(str + "   # --> not palindrome");
  }
}

palindrome("Radar");
palindrome("Malam");
palindrome("Kasur ini rusak");
palindrome("Ibu Ratna antar ubi");
console.log();
palindrome("Malas");
palindrome("Makan nasi goreng");
palindrome("Balonku ada lima");
console.log("");
console.log("==Leap Year==");

function LeapYear(start, end) {
  var text = "";
  for (var i = start; i <= end; i += 2) {
    text += i + ", ";
  }
  return text.slice(0, -1);
}

console.log(LeapYear(1900, 2020));
