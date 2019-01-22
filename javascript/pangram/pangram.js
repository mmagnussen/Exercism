const isPangram = (str) => {
    const cleanPhrase = str.toLowerCase().replace(/[^a-z]/gi, '').split('');
    //replace all non-letters with nothing
    //then use Set to determine only unique letters
    //drop to lowercase
    //then add ASCI of those remaining letters for lowercase values sum (2847)

    // if new Set.size !== 26/25 then
    const letterSet = new Set(cleanPhrase);

    if (letterSet.size = 26) {
        return true
    }
    else {
        return false
    }

}

export { isPangram }