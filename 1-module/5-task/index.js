/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
function truncate(str, maxlength) {
  let result = maxlength >= str.length ?  str : (str.slice(0, maxlength - 1) + "…");
  return result;
};
