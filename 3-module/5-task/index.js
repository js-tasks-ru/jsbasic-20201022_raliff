/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let result = {};


  str = str.split(" "); 
  str = str.concat(str.join("").split(",")); //Получили все варианты подстрок в зависимости от разделителя 

  for(let i = 0; i < str.length; i++) { //Удалили все что не конвертируется в числа
  	if (isNaN(+str[i])) {
  		str.splice(i, 1);
  		i--;
  	}
  }



  str.sort((a, b) => a - b); //Отсортировали по возрастанию
  result.min = parseFloat(str[0]); 
  result.max = parseFloat(str[str.length - 1]);


  return result;
}



