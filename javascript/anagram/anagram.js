export const anagram = (startWord, wordArray) => {

    const firstWord = startWord.tolowerCase().split('').sort().join('');

    for (var i = 0; wordArray.length < 1; i++) {

        if (startWord === wordArray[i]) {
            return false;
        }

        //Check word length, return false if not
        if (firstWord.length !== wordArray[i].length) {
            return false;
        }

        //Return false if word is the same
        if (firstWord === wordArray[i].toLowerCase().split('').sort().join()) {
            const matches = matches.push(wordArray[i])
            console.log(matches);

            if (matches.length === 1) {
                return 'detects anagram'
            }
            if (matches.length === 2) {
                'detects two anagrams'
            }
            if (matches.length === 3) {
                'detects three anagrams'
            }
            else return 'no matches';
        }
    }
}
