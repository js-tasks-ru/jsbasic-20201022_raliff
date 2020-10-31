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


  let str = tmp.reduce(function(sumStr, item) {
  	sumStr += item["name"] + ", " + item["balance"] + "\n";
  	return sumStr;

  }, "");


  return str.slice(0,str.length-1);
}

