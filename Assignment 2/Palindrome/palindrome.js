function Palindrome(str) {
    let rev = "";
    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i];
    }
    if (rev === str) {
        return true;
    } else {
        return false;
    }
}
console.log(`"nitin" is a palindrome: ${Palindrome("nitin")}`);
console.log(`"disha" is a palindrome: ${Palindrome("disha")}`);
