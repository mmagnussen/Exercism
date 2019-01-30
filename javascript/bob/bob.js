/* eslint-disable no-unused-vars */
//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.


export const hey = message => {

  //evaluate whether a string has all uppercase letter, but allows non-letter characters
  const isUpperCase = message.toUpperCase();
  const lowerCaseLetters = message.match(/[a-z]/i);
  // Establish the return strings for the five conditions:
  let responses = {
    force: 'Calm down, I know what I\'m doing!',
    question: 'Sure.',
    yell: 'Whoa, chill out!',
    nothing: 'Fine. Be that way!',
    rest: 'Whatever.'
  }

  return (
    //First, dealing with strings ending in question marks:

    //Condition for the single occurrence of a string with all caps ending with a question mark
    (message.slice(-1) === '?' && message === isUpperCase && lowerCaseLetters) ? responses.force
      //Condition for the other strings that end with a question mark  
      : (message.trim().slice(-1) === '?') ? responses.question
        //Condition for other strings that are all caps, with no mixed case
        : (message === isUpperCase && lowerCaseLetters) ? responses.yell
          //Condition for only white space with no letters or numbers
          : (!message.match(/[a-z,0-9]/i)) ? responses.nothing
            //Condition for the remaining strings
            : responses.rest
  )
}

