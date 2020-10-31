/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(users, age) {
  let tmp = users.filter(function(item,index,array) {
  	if (item["age"] <= age) return true
  		return false
  })

  let emptyString = "";
  let str = tmp.reduce(function(previousValue, item, index, array) {
  	emptyString += item["name"] + ", " + item["balance"] + "\n";
  	return emptyString;

  }, emptyString);


  return str.slice(0,str.length-1);
}

