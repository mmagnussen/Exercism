const isPangram = (str) => {
    //replace all non-letters with nothing
    //then use Set to determine only unique letters
    //drop to lowercase
    const cleanPhrase = str.toLowerCase().replace(/[^a-z]/gi, '').split('');

    // if new Set.size !== 26 then
    const letterSet = new Set(cleanPhrase);

    // Use Set .size property to determine length of the returned letterSet
    if (letterSet.size == 26) {
        return true
    }
    else {
        return false
    }

}

export { isPangram }