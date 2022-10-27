// No cambies los nombres de las funciones.

function crearUsuario() {
  function Usuario(opciones) {
    this.usuario = opciones.usuario;
    this.nombre = opciones.nombre;
    this.email = opciones.email;
    this.password = opciones.password;
  }

  Usuario.prototype.saludar = function() {
    return 'Hola, mi nombre es ' + this.nombre;
  };

  return Usuario;

}

function agregarMetodoPrototype(Constructor) {
  Constructor.prototype.saludar = function() {
    return 'Hello World!';
  };
}

function agregarStringInvertida() {
  String.prototype.reverse = function() {
    var stringInvertida = '';
    for(var i = this.length - 1; i>=0; i--) {
      stringInvertida = stringInvertida + this.charAt(i);
    }
    return stringInvertida;
  };
}
  class Persona {
    constructor(nombre, apellido, edad, domicilio) {
      this.nombre = nombre,
      this.apellido = apellido,
      this.edad = edad,
      this.domicilio = domicilio
      this.detalle = function() {
        return { 
          Nombre: this.nombre,
          Apellido: this.apellido,
          Edad: this.edad,
          Domicilio: this.domicilio
        }
      }
    }
  }
  
function crearInstanciaPersona(nombre, apellido, edad, dir) {
  const persona = new Persona(nombre, apellido, edad, dir);
  return persona;
}
  
function agregarMetodo() {
  Persona.prototype.datos = function() {
    return this.nombre + ", " + this.edad + " años";
  }
}
  

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida,
  crearInstanciaPersona,
  agregarMetodo, 
  Persona
};
