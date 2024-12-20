/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

function capitalizeWords(str) {

  //----------------------- перебор строки через цикл for

  // let result = ''
  // for (let i = 0; i < str.length; i ++ ) {
  //   if (str[i-1] === undefined || str[i-1] === ' ') {
  //     result = result + str[i].toUpperCase()
  //   } else {
  //     result = result + str[i]
  //   }
  // }
  // return result

  //------------------------- split for slice join

  let result = str.split(' ')
  for (let i = 0; i < result.length; i ++) {
    result[i] = result[i][0].toUpperCase() + result[i].slice(1)
  }
  return result.join(' ')

  //---------------------- использую split map slice и join 

  // let result = str.split(' ')
  // return result.map(word => word[0].toUpperCase() + word.slice(1)).join(' ')

}

console.log(capitalizeWords("hello world from javascript"));
 