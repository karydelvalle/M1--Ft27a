'use strict'

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

function nFactorial(n) {
  if (n == 0 || n == 1) return 1
    if (n < 0) {
      return 0
    } else {
    return n * nFactorial(n - 1)
  }
}

function nFibonacci(n) {
  if (n < 2){
    return n
  }else {
    return nFibonacci(n-1) + nFibonacci(n-2)
  }
}

/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

function Queue() {  // esto representa la funcion constructora de la clase Queue
  this.array=[] // creamos un array para guardar los datos de la fila
  console.log(this.array) // 
  this.enqueue = function(el){  // definimos el metodo(funcion)  enqueue que añadira a la matriz el elemento que pasemos por pametro y usamos el metodo push de Array para añadirlos al final ya que en una cola el primero debe ir quedando de primero 
      return this.array.push(el) // retornamos array
  },
  this.dequeue = function(){ //definimos el metodo(funcion)  dequeue que eliminara de la matriz el primer elemento para esto usamos el metodo Shift de Array de modo que el primer elemento que ingreso sera el primeo en salir 
    return this.array.shift()

    },
    this.size = function(){ // aplicamos la propiedad length de Array para medir el tamaño de la matris una vez que se han aplicado los w metodos anteriores
      return this.array.length
  
      }
}
var queue = new Queue()
console.log(queue.enqueue(2))
console.log(queue.enqueue(2))
console.log(queue.enqueue(2))
console.log(queue.enqueue(2))
console.log(queue.enqueue(2))








// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci
};
