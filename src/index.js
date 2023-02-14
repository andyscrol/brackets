module.exports = function check(str, bracketsConfig) {
  // Check if the input parameters are valid
  if (typeof str !== 'string' || !Array.isArray(bracketsConfig)) {
    // Throw an error if they are not
    throw new Error('Invalid input parameters');
  }
  // Create a regular expression from the bracketsConfig array
  let regex = new RegExp(bracketsConfig.map(pair => pair.join('').replace(/[{}()|[\]\\]/g, '\\$&')).join('|'), 'g');
  // Replace the brackets pairs with an empty string using the regular expression until no more changes occur
  while (str !== (str = str.replace(regex, '')));
  // Return true if the string is empty, false otherwise
  return str.length === 0;
}