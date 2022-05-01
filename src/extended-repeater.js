const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (typeof str !== 'string') str = String(str);
  if (options.addition === undefined) options.addition ='';
  if (typeof options.addition !== 'string') options.addition = String(options.addition);
  if (options.separator === undefined) options.separator = '+';
  if (options.additionSeparator === undefined) options.additionSeparator = '|';
  if (options.repeatTimes === undefined) options.repeatTimes = 0;
  if (options.additionRepeatTimes === undefined) options.additionRepeatTimes = 0;

  let repeatStr = '';
  for (let i = 0; (i == 0 || i < options.repeatTimes); i++) {
    repeatStr += str;
    for (let j = 0; (j == 0 || j < options.additionRepeatTimes); j++) {
      repeatStr += options.addition;
      if (j < options.additionRepeatTimes - 1) repeatStr += options.additionSeparator;
    }
    if (i < options.repeatTimes - 1) repeatStr += options.separator;
  }
  return repeatStr;
}

module.exports = {
  repeater
};
