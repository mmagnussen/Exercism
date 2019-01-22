const encode = (phrase) => {
    //Declare an empty array to return the output of the loops
    const encodeArray = [];

    //Let an empty phrase return an empty phrase
    const phraseArray = phrase.split('');
    if (phrase == '') {
        return '';
    }

    //Initiate a loop that will loop through the entire array, 
    for (var i = 0; i < phraseArray.length; i++) {
        //Look for a condition that this character is the last character, and not equal to the previous character.
        if (i === phraseArray.length - 1) {
            if (phraseArray[i] !== phraseArray[i - 1]) {
                encodeArray.push(phraseArray[i])
            }

        } else {

            //Initiate a mutable counter that begins with one, to account for the first character of a series
            let counter = 1;
            if (phraseArray[i] !== phraseArray[i + 1]) {
                //Account for the current value not equaling the last one, (the last character not being part of a set that is repeated)
                encodeArray.push(phraseArray[i]);
            }

            else {
                //The while loop needs to take control of the index, and it needs to increment (to prevent infinite looping)
                while (phraseArray[i] == phraseArray[i + 1]) {

                    //Update the index so that the outer 'for' loop will continue where this left off
                    i += 1;
                    //Update the counter
                    counter += 1;
                }
                encodeArray.push(counter, phraseArray[i])
            }
        }
    }
    return encodeArray.join('')
}


const decode = (str) => {
    if (str == '') {
        return '';
    }

    const strArray = str.split('');
    const decodeArray = [];
    for (let i = 0; i < str.length; i++) {
        // Use .test to determine boolean of that index value (whether or not it is a number)
        if (/[0-9]/.test(strArray[i]) && /[ A-Za-z]/.test(strArray[i + 1])) {

            // Declare a 'repeat' value to be used with .repeat if the previous index value was a number
            let repeat = strArray[i]
            // Test for number with more than one digit, and if so add to the current value
            if (/[0-9]/.test(strArray[i - 1])) {
                repeat = strArray[i - 1] + repeat
            }
            //Push the current letter character, plus the repeat value (minus one to account for the current letter)
            decodeArray.push(strArray[i + 1].repeat(repeat - 1))
            console.log(repeat);

            //Otherwise, if not a number, push to the array
        } else if (!/[0-9]/.test(strArray[i])) {
            decodeArray.push(strArray[i])
        }
    }
    return decodeArray.join('')
}
export { encode, decode }