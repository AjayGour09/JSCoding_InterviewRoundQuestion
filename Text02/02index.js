function isPrime(n){
    if(n<=1) return false;
    for (let i=2; i<Math.sqrt(n); i++){
        if(n%i===0){
            return false;
        }
    }
    return true;
}
console.log(isPrime(11));
console.log(isPrime(12));

function isPalindrome(str){
    let reversed = str.split('').reverse().join('');
    return str ===reversed;
}
console.log(isPalindrome("madam"));
console.log(isPalindrome("natvar"));
console.log(isPalindrome("ratan"));
