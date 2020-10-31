/**
 * @param   {{ name: string, age: number }[]} users
 * @returns {string[]}  объект
 */
function namify(users) {
  let result = users.map(function(item,index,array) {
  	return item.name;
  });

  return result;
}
