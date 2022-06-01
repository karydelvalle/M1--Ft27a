"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

//OJO: a diferencia de los arrays las listas guardan sus elementos en posiciones de memoria que no necesariamente tienen que estar contiguas. Bsicamente se trabajan como si fueran objetos añadiendoles metodos como propiedades para poder operar con ellos (añadir elementos, eliminarlo, buscarlos etc)



function Node(value) { // Funcion constructora del nodo, un nodo por defecto consta de 2 partes un data o valor o como lo quieran referir y un next que apunta a null.
  this.value = value, //el valor o data que se pasa por parametro
  this.next = null // le indicamos a la funcion constructora que el nodo tiene una propiedad next que apunta al valor null
}

function LinkedList() { // funcion contructora de la lista
this.head = null, // por edefecto la cabecera de la lista al no tener ningun elemento al inicio apunta a null
this.current = this.head, // el current se usa como una copia del head o cabecera, y sirve para que la cabecera quede fija y sea el quien termine apuntando al nono o valor que se añade a la lista

this.add = function(value) { // metodo add para añadir un nodo a la lista 
      var primerNode = new Node(value) // se crea un nuevo nodo haciendo referencia a la funcion constructora de nodos en este caso Node Function
   if(!this.current){ // is current es false o sea null
     this.head = primerNode // has que la cabecera sea el nodo creado
  } else { 
    this.current.next = primerNode // en caso contrario apunta el next al nuevo nodo ya que la el head no puede cambiar 
  } this.current = primerNode// y la copia de head o sea current apuntara tambien al nuevo nodo y el nuevo nodo por defecto apuntara a null porque asi lo definimos en la funcion constructora
  
}
this.remove = function(){
  let actual = this.head
 if( actual == null){
   return null
 }else if(actual && !actual.next){
  var aux = actual.value
  this.head = null
  return aux
  }
 while(actual.next.next != null){  
  actual = actual.next
} 
  var aux = actual.next.value
  actual.next = null
  return aux


}
this.search = function(value){
  if (this.head == null)return null
  var current = this.head
  while(current != null){
  if(value == current.value){
    return current.value
  }else {
      if (typeof value == 'function'){
        if(value(current.value)){
          return current.value
        }
      
      }
  }current = current.value
}
}; return null

}





/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

function HashTable() {}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
