// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  if(x>y){
    return x;
  }
 else if(y>x){
    return y;
  }
  else if(x === y){
    return x;
  }
}

function mayoriaDeEdad(edad) {
  if(edad>=18){
    return 'Allowed';
  }
  else
  {
    return'Not allowed';
  } 
}
  
function conection(status) {
  if(status === 1){
    return 'Online';
  }
  else if(status === 2){
    return 'Away';
  }
  return 'Offline';
}

function saludo(idioma) {
  if(idioma === 'aleman'){
    return 'Guten Tag!'
}
else if(idioma === 'mandarin'){
    return 'Ni Hao!'
}
else if(idioma === 'ingles'){
    return 'Hello!'
}
return 'Hola!'
}

function colors(color) {
  switch(color){
    case 'blue':
        return 'This is blue';
        break;
    case 'red':
        return 'This is red';
        break;
    case 'green':
        return 'This is green';
        break;
    case 'orange':
        return 'This is orange';
        break;
    default:
        return 'Color not found';
        break; 
}
}

function esDiezOCinco(numero) {
  if(numero === 5 ||
     numero === 10){
      return true;
    }
  return false;
}

function estaEnRango(numero) {
  if(numero>20 && numero<50){
    return true;
  }
return false;
}

function esEntero(numero) {
  if(numero === Math.floor(numero)){
    return true;
    }
  return false;
}

function fizzBuzz(numero) {
  if(numero%3 === 0 && numero%5 === 0){
    return 'fizzbuzz';
    }
  if(numero%3 === 0){
    return 'fizz';
    }
  if(numero%5 === 0){
    return 'buzz';
    }
  return numero;
}

function operadoresLogicos(num1, num2, num3) {
  if(num1 === 0 || num2 === 0 || num3 === 0){
    return 'Error';
}
if(num1<0 || num2<0 || num3<0){
    return 'Hay negativos';
}
if(num1>num2 && num1>num3 && num1>0){
    return 'Número 1 es mayor y positivo';
}
if(num3>num2 && num3>num1){
    return num3+1;
}
return false;
}

function esPrimo(numero) {
  if(numero<2){
    return false;
  }
  if(numero === 2){
    return true;
  }
  for(var i = 2;i<numero; i++){
    if(numero%i === 0){
        return false;
    }
  } 
  return true;
}

function esVerdadero(valor){
  if(valor === true){
    return 'Soy verdadero';
  }
  else if(valor === false){
    return 'Soy falso';
  }
}

function tablaDelSeis(){
  let tabla6 = [];
    for(let i = 0; i<11; i++){
        tabla6.push(6*i);
    }
    return tabla6; 
}

function tieneTresDigitos(numero){
  if(numero>99 && numero<1000){
    return true;
}
else if(numero>-1000 && numero<-99){
    return true;
}
return false; 
}

function doWhile(numero) {
  let i = 0;
    let resultado = numero;
    do {
        i++;
        resultado += 5;
    } while (i<8);
    return resultado;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
