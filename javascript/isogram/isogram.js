export function isIsogram(str) {

    //build array of lowercase letters, and split
    const wordArray = str.toLowerCase().split('').filter(char => char.match(/[a-z]/));

    //compare the pre-Set array with the post-Set array, and if the same then it should be an isogram
    let isoTest = new Set(wordArray);

    //The object-like output from .filter ( {array} ) needs to be put in array markup ( [array])
    const isoArray = [...isoTest];

    //Since the arrays will not show as 'equal', convert them to string for comparison
    return (
        (str == '') ? true
            : (wordArray.join('') == isoArray.join('')) ? true : false)
}