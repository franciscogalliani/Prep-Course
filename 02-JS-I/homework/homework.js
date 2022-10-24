// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'Hola Mundo';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 12;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  return str;
}

function suma(x, y) {
  var sum = x + y;
  return sum;
}

function resta(x, y) {
  var rest = x - y;
  return rest;
}

function multiplica(x, y) {
  var mult = x * y;
  return mult;
}

function divide(x, y) {
  var div = x / y;
  return div;
}

function sonIguales(x, y) {
  if(x==y){
    return true;
  }
  return false;
}

function tienenMismaLongitud(str1, str2) {
  if(str1.length == str2.length){
    return true;
  }
  return false;
}

function menosQueNoventa(num) {
  if(num<90){
    return true;
  }
  return false;
}

function mayorQueCincuenta(num) {
  if(num>50){
    return true;
  }
  return false;
}

function obtenerResto(x, y) {
  var resto = x % y;
  return resto;
}

function esPar(num) {
  if(num%2 == 0){
    return true;
  }
  return false;
}

function esImpar(num) {
  if(num%2 != 0){
    return true;
  }
  return false;
}

function elevarAlCuadrado(num) {
  var cuadrado = Math.pow(num, 2);
  return cuadrado;
}

function elevarAlCubo(num) {
  var cubo = Math.pow(num, 3);
  return cubo;
}

function elevar(num, exponent) {
  var potencia = Math.pow(num, exponent);
  return potencia; 
}

function redondearNumero(num) {
  var redond = Math.round(num);
  return redond;
}

function redondearHaciaArriba(num) {
  var redup = Math.ceil(num);
  return redup;
}

function numeroRandom() {
  var random = Math.random();
  return random;
}

function esPositivo(numero) {
  if(numero>0){
    return 'Es positivo';
  }
  if(numero<0){
    return 'Es negativo';
  }
  return false;
}

function agregarSimboloExclamacion(str) {
  var strExc = str + '!';
  return strExc;
}

function combinarNombres(nombre, apellido) {
  var nombreCompleto = nombre + ' ' + apellido;
  return nombreCompleto;
}

function obtenerSaludo(nombre) {
  var saludo = 'Hola ' + nombre + '!';
  return saludo;
}

function obtenerAreaRectangulo(alto, ancho) {
  var areaRectangulo = alto * ancho;
  return areaRectangulo; 
}


function retornarPerimetro(lado){
  var perimetroCuadrado = lado * 4;
  return perimetroCuadrado;
}


function areaDelTriangulo(base, altura){
 var areaTriangulo = (base * altura)/2;
 return areaTriangulo;
}


function deEuroAdolar(euro){
  const precioEuro = 1.20;
  var dolar = euro * 1.20;
  return dolar;
}


function esVocal(letra){
  if(letra.length>1){
    return 'Dato incorrecto';
}
if(letra == 'a'||
   letra == 'e'||
   letra == 'i'||
   letra == 'o'||
   letra == 'u'){
    return 'Es vocal';
}
return 'Dato incorrecto';
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
