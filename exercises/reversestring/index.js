// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'



function reverse(str) {
    // Use the split() method to return a new array
    var splitString = str.split("");

    // Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); 


    // Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); 

    //Step 4. Return the reversed string
    return joinArray;
}

module.exports = reverse;
