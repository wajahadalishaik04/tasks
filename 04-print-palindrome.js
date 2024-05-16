// palindrome defination: word,phrase(group of words) are used and the output forward and backward same string result printed.
        // invalid:alphanumeric:(number+string),spaces,_,capital letter,","
        // variable.replace((/[\W_]/g,''): (\w:matches alpha character and _) and (/g:global):)
        // valid:racecar,madam,radar

   a=('radar').toLowerCase();
   console.log( a.split('').reverse().join(''));
        




function palindrme(words,wordsval)
{
     words=words.toLowerCase();
     wordsval=words.split('').reverse().join('');
     console.log(wordsval)
    return  words===words.split('').reverse().join('');
}
console.log(palindrme("MADAM"))

function isPalindrome(words,wordsval)
{
    words=words.replace(/[\W_]/g,'').toLowerCase();
    wordsval=words.split('').reverse().join('');
    console.log(wordsval);
    return words===words.split('').reverse().join('');

}
console.log(isPalindrome("A man a _plan a canal Panama"));  // true














// function isPalindrome(word) {
//     word = word.toLowerCase();
//     return word === word.split('').reverse().join('');
// }
// isPalindrome("racecar");  // true
// console.log(isPalindrome("python"));  // false

// a=1234321;
// // b='racecar'
// console.log(a.split().reverse().join())
// console.log(b.split('').reverse().join(''))
// console.log(b.reverse(''))
// console.log(a.split())
// console.log(a.split())

// function isPalindrome(phrase,phraseval) {
//     phrase = phrase.replace(/[\W_]/g, '').toLowerCase();
//     phraseval=phrase.split('').reverse().join('');
//     console.log(phraseval)
//     return phrase === phrase.split('').reverse().join('');
// }

// console.log(isPalindrome("A man a plan a canal Panama"));  // true
// console.log(isPalindrome("Python is the best"));  // false