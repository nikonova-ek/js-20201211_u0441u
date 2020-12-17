/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
  let array = Object.entries(obj);
  array = array.filter(function(element) {
    let key = element[0];
    return !fields.includes(key);});

  return Object.fromEntries(array);};


