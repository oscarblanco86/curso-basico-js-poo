// FUNCIONO HASTA QUE SE LLEGO A LA PARTE DE QUE SOLO PUEDE HABER UN BATERISTA

class Banda {
    constructor({
      nombre,
      generos = [],
    }) {
      this.nombre = nombre;
      this.generos = generos;
      this.integrantes = [];
    }
    agregarIntegrante(integranteNuevo) {
      // Tu código aquí 👈
        this.integrantes.push(integranteNuevo);
    }
  }
  
  //Crear clase Integrante
  class Integrante {
    constructor({
      nombre,
      instrumento,
    }) {
      this.nombre = nombre;
      this.instrumento = instrumento;
    }
    // Tu código aquí 👈
  
  }
  
  
//   export {
//     Banda,
//     Integrante,
//   }

  const data = {
    nombre: "Los Jacks",
    generos: ["rock", "pop", "post-punk"],
    integrantes: [],
  }
  const banda = new Banda(data)
  banda.agregarIntegrante(new Integrante({ nombre: "Erik", instrumento: "Guitarra" }))
  banda.agregarIntegrante(new Integrante({ nombre: "Paul", instrumento: "Bateria" }))


  console.log(banda);

//   {
//     "nombre":"Los Jacks",
//     "generos":["rock","pop","post-punk"],
//     "integrantes":[
//       {"nombre":"Erik","instrumento":"Guitarra"},
//       {"nombre":"Paul","instrumento":"Bateria"}
//     ]}




// CODIGO CON EL QUE INTENTE PERO ME HACIA FALTA UN PASO

class Banda {
  constructor({
    nombre,
    generos = [],
  }) {
    this.nombre = nombre;
    this.generos = generos;
    this.integrantes = [];
  }
  agregarIntegrante(integranteNuevo) {
    // Tu código aquí 👈
    if (integranteNuevo.instrumento != 'baterista') {
      this.integrantes.push(integranteNuevo);
    } else {
      bat = 0;
      for (this.integrantes in this) {
        (this.integrantes.instrumento = 'baterista' ? bat++;
      }
      bat < 1 ? this.integrantes.push(integranteNuevo);
    }

  }
}

//Crear clase Integrante
class Integrante {
  constructor({
    nombre,
    instrumento,
  }) {
    this.nombre = nombre;
    this.instrumento = instrumento;
  }
  // Tu código aquí 👈

}


export {
  Banda,
  Integrante,
}



/// CODIGO CORRECTO DE UN ESTUDIANTE


class Banda {
    constructor({
      nombre,
      generos = [],
    }) {
      this.nombre = nombre;
      this.generos = generos;
      this.integrantes = [];
    }
    agregarIntegrante(integranteNuevo) {
        if(this.integrantes.some(obj=>obj.instrumento==='Bateria')){
            console.log('ya hay un baterista')
        }else{
            this.integrantes.push(integranteNuevo)
        }     
    }
  }
  
  class Integrante {
    constructor({
        nombre,
        instrumento,
    }){
        this.nombre=nombre;
        this.instrumento=instrumento;
    }
  }
  
  
  export {
    Banda,
    Integrante,
  }