const parse = (phrase) => {


    //Split phrase on a regex that includes capture groups (to be retained); 
    //Then .filter to test for a truthy in that returned group
    //Use .map to iterate through the array, and remove the first character
    //Then join the array of first characters, and convert ot upper case
    return phrase.split(/(?:[a-z]([A-Z][a-z]*)|[ -])/).filter(x => x).map(splitElement => splitElement.slice(0, 1)).join('').toUpperCase()
}


export { parse }