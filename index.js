// Code your solution here!

function printString(myString) {
    console.log(myString[0]);
    if (myString.length > 1) {
        let mySubString = myString.substring(1, myString.length);
        printString(mySubString);
    } else {
        return true
    }
}

function reverseString(myString) {
  if (myString.length < 2) {
    return myString
  } else {
    return reverseString(myString.substring(1)) + myString[0]
  }
}

function isPalindrome(myString) {
  if (myString.length < 2) {
    return true;
  } else if (myString[0] === myString[myString.length-1]) {
    return isPalindrome(myString.substring(1, myString.length-1));
  } else {
    return false;
  }
}

function addUpTo(myArray, index) {
  if (index < 1) {
    return myArray[index];
  } else {
    return addUpTo(myArray, index-1) + myArray[index];
  }
}

function maxOf(myArray) {
  if (myArray.length < 2) {
    return myArray[0]
  } else if (myArray[0] < myArray[1]) {
    return maxOf(myArray.slice(1))
  } else {
    myArray.splice(1, 1)
    return maxOf(myArray)
  }
}

function includesNumber(myArray, num) {
  if (myArray.length < 1) {
    return false
  } else if (myArray[0] === num) {
    return true
  } else {
    return includesNumber(myArray.slice(1), num)
  }
}
