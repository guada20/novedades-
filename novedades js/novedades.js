/*var,let, const - formas de crear variables 
funciones de flecha 
entre otras*/

//diferencias entre var, let, y const 
//ambito global 
 //ambito global no esta dentro d elas llaves
 /*
 var nombre = "armando pleito"; 
 let nombrelet = "rosalba melquiades"
{//bloque de codigo, ambito local 
    let nombrelet = "Nancy"
    var nombre = "elsa";
   document.write("Ambito local var : " +nombre + "<br>");
   document.write("Ambito local let : " +nombrelet + "<br>");
}
document.write("Ambito local var: " +nombre+ "<br>");
document.write("Ambito local let: " +nombrelet + "<br>");
*/
/* var muestra el dato guardado sin importar el ambito donde sea declarada
   la variable y se puede volver a declarar una variable con el mismo nombe
/*
/*let 
  let muestra el dato guardado dependiendo el ambito donde sea declarada la variable, no se puede volver a 
  declarar una variable con el mismo nombre en el mismo ambito
/*const 
 es una variable que funciona igual que var pero su 
 dato no  puede ser cambiado a excepcion de los arrays, objetos 
 y funciones
*/
//funciones de flecha
//funcion normal declarada
/*
function saludo(nom){
    alert("Buenos dias " +nom);
} 
saludo("saturdino");
//funcion normal anonima 
(function(nom){
    alert("buenas tardes doña "+nom)
})("dolores delano")*/

//funcion de flecha declaradas 
/*
let saludo = (nom)=>{
    alert("Buenos dias Don "+nom)
}
saludo ("Zacarias florez del campo");
//funcion de flecha anonima
((nom)=>{
    alert("Buenas tardes doña "+nom)
})("Elba sura");*/


//Métodos estáticos
//Al igual que en otros lenguajes también va a ser posible crear métodos estáticos usando la
//palabra clave static antes del nombre del método.
  
class miClase {  
    static miMetodo() {
      return 'hola Amiga'+'<br>';
    }
}
let mensaje = miClase.miMetodo();
document.write(mensaje)

//Por defecto, las propiedades y métodos de una clase en JavaScript son públicas, es decir, 
//se puede acceder a ellos fuera de la clase.
//Los métodos privados consiste en limitar el acceso a propiedades y 
//métodos agregando el caracter numeral (#).

class Clase {
  #private(valor){
    document.write(valor);
  }
  
  public(valor){
    document.write(valor);
  }
}

const clase = new Clase()
clase.public("Hola")  // 'Hola'
clase.private("Hola") // TypeError: clase.private is not a function