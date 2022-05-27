'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var array = num.split("").reverse(); // convertir el parametro num en array con split() y voltear el orden de los elementos con el metodo reverse()
  var array2 = array.map((el, index) => Number(el)*(2**index)) //aplicar la funcion map pasando 2 parametros el elemento y el index (index hace referencia a la posicion del elemento dentro de la matriz) dentro de la funcion cb, convertir cada elemento en numero (Number(el)) para poder operar, multiplicar cada elemento por 2 elevado a la posicion de dicho elemento (2** index)//
  var decimal = array2.reduce((el, el2) => el + el2) // aplicar la funcion reduce para obtener la suma de todos los elementos de la matriz 
  return decimal // retornar el numero decimal
}

function DecimalABinario(num) {
  // tu codigo aca: 
  


  var array = [] 
   while (num > 0){ // mientras num > 0
      array.push(num % 2) // pushea en array el resto de numero dividido por 2 
      num = Math.floor(num / 2) // reasigna al valor de num por el entero entre la division de num / 2
      
  
  
      }return array.reverse().join('') // retornar array desde el ultimo elemento hasta el primero (reverse()) y convertir a string con join()

    }
module.exports = {
  BinarioADecimal,
  DecimalABinario,
}