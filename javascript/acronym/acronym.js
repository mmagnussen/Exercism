const parse = (phrase) => {

    const strArray = phrase.split(/[ -]/);
    console.log(strArray);
    let firstLetters;
    var i;
    for (i of strArray) {
        return firstLetters.push(strArray[i].charAt(0));
    }
    const newAccro = newAccro.join(firstLetters).toUpperCase();
}


export { parse }