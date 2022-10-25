// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  return array[0];
}


function devolverUltimoElemento(array) {
  return array[array.length - 1];
}


function obtenerLargoDelArray(array) {
  return array.length;
}


function incrementarPorUno(array) {
  let arrayInc = [];
  for(let i=0;i<array.length;i++){
      arrayInc[i] = array[i] + 1;   
  }
  return arrayInc;
}


function agregarItemAlFinalDelArray(array, elemento) {
  array[array.length] = elemento;
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  return palabras.join(' ');
}


function arrayContiene(array, elemento) {
  for(let i = 0;i<array.length;i++){
    if(array[i] === elemento){
        return true;
    }
}
return false;
}


function agregarNumeros(numeros) {
  let suma = 0;
    for(let i = 0;i<numeros.length;i++){
        suma += numeros[i];
    }
    return suma;
}


function promedioResultadosTest(resultadosTest) {
  let suma = 0;
    let promedio = 0;
    for(let i = 0;i<resultadosTest.length;i++){
        suma += resultadosTest[i];
    }
    promedio = suma/resultadosTest.length;
    return promedio;
}


function numeroMasGrande(numeros) {
  let numeroMayor = numeros[0];
  for(let i = 0; i<numeros.length; i++){
      if(numeros[i]>numeroMayor){
          numeroMayor = numeros[i]
      }
}
return numeroMayor;
}


function multiplicarArgumentos() {
  let multiplicacion = 1;
  if(arguments.length<1){
      return 0;
  }
for(let i = 0; i<arguments.length;i++){
  multiplicacion *= arguments[i];
}
return multiplicacion;
}


function cuentoElementos(arreglo){
  let cantidad = 0;
  for(let i = 0; i<arreglo.length; i++){
      if(arreglo[i]>18){
          cantidad++;
      }
  }
  return cantidad;
}


function diaDeLaSemana(numeroDeDia) {
  if(numeroDeDia === 1 || numeroDeDia === 7){
    return 'Es fin de semana';
}
return 'Es dia Laboral';
} 


function empiezaConNueve(n) {
  if(String(n)[0] == 9){
    return true;
}
return false;
}


function todosIguales(arreglo) {
  let igual = arreglo[0];
  for(let i = 0;i<arreglo.length;i++){
      if(igual !== arreglo[i])
      return false;
  }
  return true;
} 


function mesesDelAño(array) {
  let objetivo = [];
    for(let i = 0;i<array.length;i++){
        if(array[i] === 'Enero' ||
           array[i] === 'Marzo' ||
           array[i] === 'Noviembre'){
            objetivo.push(array[i]);
           }
    }
    if(objetivo.length<3){
        return 'No se encontraron los meses pedidos'
    }
    return objetivo;
}


function mayorACien(array) {
  let mayores100 = [];
  for(let i = 0; i<array.length;i++){
      if(array[i]>100){
          mayores100.push(array[i]);
      }
  }
  return mayores100;
}


function breakStatement(numero) {
  let newArray = [];
    var suma = numero;
    for(var i = 0;i<10;i++){ 
        suma +=2;
        if(suma === i){
          break;
          }
          else{
            newArray.push(suma)
          }
    }
    if(i<10){
      return 'Se interrumpió la ejecución';
    }
    else{
      return newArray;
    }
}


function continueStatement(numero) {
  let newArray = [];
  let suma = numero;
  for(var i = 0; i<10; i++){
    if(i === 5){
      continue;
      }
      else{
      suma += 2;
      newArray.push(suma);
    }
  }
  return newArray;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
