/* eslint-disable no-unused-vars */
//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {

  const lastChar = (message[message.length - 1]);

  const response = lastChar == "?" ? "Sure." : (lastChar == "!" ? "Fine. Be that way!" : "Whatever.");

  return response;
};