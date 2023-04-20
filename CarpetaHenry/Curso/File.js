/**
 * Esta es una variable global
 * declarada como "var" lo cual actualmente no es recomendado
 * Una variable var es un tipo de variable que se auto declara.
 * Aunque esto puede ahorrar trabajo al desarrollador no es recomendado
 * ya que tu como desarrollador debes asegurar la calidad del codigo y control sobre el.
 */

var cajon;

/**
 * Variable tipo let
 * con este tipo de variable puedes asignarle el tipo de variable una sola vez.
 * y modificar el dato de la variable infinitas veces
 */
let string = "dev"; //string cadena de texto
let number = 0; // number solo numero
let bool = false; // boolean bandera falso o verdadero
let array = []; // array lista de datos
let object = {}; // object conjunto de datos
//let undefined = undefined;  undefined no definida
let nul = null; // null definida pero sin data

/**
 * variable tipo const
 * es una variable que no se le puede modificar en su todalidad despues de declararla
 */

const variable = "este no se puede modificar";

// en javascript se puede tambien hacer operaciones como : + , * , - , /

let a = 5,
  b = 6;

  /**
   * metodo que recibe como parametro el numero a y numero b mas el tipo de operacion a realizar
   * @param {*} operationType 
   * @param {*} a 
   * @param {*} b 
   * @returns 
   */
const operation = (operationType, a, b) => {
  const objectOperations = {
    suma: () => ((a + b)),
    resta: () => ((a - b)),
    multiplicacion: () =>(( a * b)),
    divicion: () => ((a / b)),
  };
  return objectOperations[operationType]();
};

console.log("suma",operation("suma",a,b));
console.log("resta",operation("resta",a,b));
console.log("multiplicacion",operation("multiplicacion",a,b));
console.log("divicion",operation("divicion",a,b));

// cuando uno usa la operacion + con caracteres de texto javascript concatena

console.log("suma",operation("suma","esto no ","suma"));
