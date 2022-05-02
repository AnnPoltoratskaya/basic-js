const {NotImplementedError} = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */

function getSeason(date) {
    if (!date) return 'Unable to determine the time of year!';
    // if (date.getMonth !== 'function')
    if (isNaN(Date.parse(date))) throw new Error('Invalid date!');
    let season;
    const month = date.getMonth();
    if (month > 1 && month < 5) {
        season = 'spring';
    } else if (month > 4 && month < 8) {
        season = 'summer';
    } else if (month > 7 && month < 11) {
        season = 'autumn';
    } else season = 'winter';
    return season;
}

module.exports = {
    getSeason
};
