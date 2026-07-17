function checkPalindrome(num) {
    // Convert number to string to easily reverse and compare
    const originalStr = num.toString();
    let reversedStr = "";
    
    // Reverse the string
    for (let i = originalStr.length - 1; i >= 0; i--) {
        reversedStr += originalStr[i];
    }
    
    // Check if it is a palindrome
    if (originalStr === reversedStr) {
        return `${num} => Number is a palindrome number`;
    } else {
        return `${num} => Number is not a palindrome number`;
    }
}

// Example usage:
console.log(checkPalindrome(54345)); 
// Output: 54345 => Number is a palindrome number
console.log(checkPalindrome(45324)); 
// Output: 45324 => Number is not a palindrome number