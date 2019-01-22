class Anagram {
    constructor(input) {
        this.word = input;

        // Alphabetize the letters in the input word
        this.startWord = input.toLowerCase().split('').sort().join('')
    }

    //Handle array of possible matches
    matches(wordArray) {
        const matches = [];

        //Loop through the values of of the potential matches
        for (const value of wordArray) {

            // Alphabetize letters in match
            const wordArray1 = value.toLowerCase().split('').sort().join('')


            //Check letter case, to makes sure differently cased/letter group matches are pushed
            if (this.startWord === wordArray1 && this.word.toLowerCase() !== value.toLowerCase()) {

                matches.push(value)
            }
        }
        return matches;
    }
}

export default Anagram;
