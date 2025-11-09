const { NotImplementedError } = require('../lib');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // Remove line below and write your code here
    return domains.reduce((acc, domain) => {
        const parts = domain.split('.').reverse();
        let currentPath = '';
        
        parts.forEach(part => {
            currentPath = `${currentPath}.${part}`;
            acc[currentPath] = (acc[currentPath] || 0) + 1;
        });
        
        return acc;
    }, {});
}

module.exports = {
    getDNSStats
};
