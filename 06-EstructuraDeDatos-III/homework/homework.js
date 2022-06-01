"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(valor) {
    this.valor = valor,
    this.der = null,
    this.izq = null
    
}

BinarySearchTree.prototype.insert = function(valor){
  
    if(this.valor > valor){ 
    if(this.izq === null)  this.izq = new BinarySearchTree(valor);
    else this.izq.insert(valor);
    
    }else if(this.valor < valor ){ 
      if(this.der === null) this.der = new BinarySearchTree(valor);
      else this.der.insert(valor);
   }  
}
 
var bst = new BinarySearchTree(20)
console.log(bst)
bst.insert(12)
console.log(bst)
bst.insert(8)
console.log(bst)
bst.insert(30)
console.log(bst)


BinarySearchTree.prototype.size = function(){
 if(this.der == null && this.izq== null) return 1;
 if(this.der == null && this.izq != null) return 1 + this.der.size() 
 if(this.izq == null && this.der != null) return 1 + this.izq.size() 
 if(this.izq != null && this.der != null) return this.der.size() + this.izq.size()

}


BinarySearchTree.prototype.contains = function(){
}

BinarySearchTree.prototype.depthFirstForEach = function(){
}
BinarySearchTree.prototype.breadthFirstForEach = function(){
}



// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
