function isPalindrome(num) {
    let original = num.toString();       // Convert number to string
    let reversed = original.split('').reverse().join('');  // Reverse string
    return original === reversed;        // Check if original == reversed
}

function checkTwoPalindromes(num1, num2) {
    return isPalindrome(num1) && isPalindrome(num2);
}

// Example Usage
let number1 = 121;
let number2 = 232;

console.log(`Are both numbers palindromes? ${checkTwoPalindromes(number1, number2)}`);