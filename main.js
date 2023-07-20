const natalia = {
  name: "Natalia",
  age: 20,
  cursosAprobados: [
    "Curso definitivo HTML y CSS",
    "Curso practico de HTML y CSS",
  ],
  aprobarCurso(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso)
  }
};

// console.log(natalia);
//Hacer que Natalia apruebe otro curso

// natalia.cursosAprobados.push("Curso de Responsive")
// natalia.name = 'Nath';
// console.log(natalia);

// natalia.aprobarCurso('desde main js')

function Student(name, age, cursosAprobados) {
  this.name = name;
  this.age = age;
  this.cursosAprobados = cursosAprobados;
  // this.aprobarCurso = function (nuevoCurso) {
  //   this.cursosAprobados.push(nuevoCurso);
  // }
  // ESTE METODO ES POSIBLE SIN NECESIDAD  USAR PORTOTIPO
};

Student.prototype.aprobarCurso = function (nuevoCurso) {
  this.cursosAprobados.push(nuevoCurso);
}
//CON ESTE METODO DE PROTOTIPO PERMITE CREAR FUNCIONES POR FUERA DE EL

const juanita = new Student (
  "Juanita Alejandra", 
  15,
  [
    'Curso de introduccion a la produccion de videojuegos',
    'Curso de Creacion de personajes',
  ]
);

// Prototipos con la sintaxis de clases

class Student2 {
  constructor(name, age, cursosAprobados) { 
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
  
  }
  aprobarCurso(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
  }
}

const miguel = new Student2(
  "Miguel",
  28,
  [
    "Cusro analisis de neogcios para ciencia de datos",
    "Curso de principios de visualizacion de datos para BI",
  ]
);
