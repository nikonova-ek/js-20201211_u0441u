/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
  let array = Object.entries(obj);
  array = array.filter(function(element) {
    let key = element[0];
    return fields.includes(key);
  });
  return Object.fromEntries(array);
};
