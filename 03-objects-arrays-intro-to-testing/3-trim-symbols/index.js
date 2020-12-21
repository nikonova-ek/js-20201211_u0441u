/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  let result = '';
  let counter = 0;
  let previousChar;
  if (size === undefined) {return string;}
  for (let i = 0; i < string.length; i++) {
    let currentChar = string.charAt(i);
    if (currentChar === previousChar) {
      counter++;
    }
    else {
      counter = 0;
      previousChar = currentChar;
    }
    if (counter < size) {result = result + string.charAt(i);}
  }
  return result;
}


