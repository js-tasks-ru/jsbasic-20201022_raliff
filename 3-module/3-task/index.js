/**
 * @param {string} str
 * @returns {string}
 */




function camelize(str) {
	let foundPos = 0;

  while (~str.indexOf("-")) {
  	foundPos = str.indexOf("-");

  	str = str.slice(0, foundPos) + str[foundPos + 1].toUpperCase() + str.slice(foundPos + 2); 
  };


  return str;
}
