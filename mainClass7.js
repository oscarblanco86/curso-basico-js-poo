class Course {
  constructor({
    name, 
    classes = []
  }) {
    this.name = name;
    this.classes = classes;
  }
}

const cursoProgBasica = new Course({
  name: "Curso de Gratis de Programacion Basica",
})
const cursoHtmlCSS = new Course({
  name: "Curso Definitivo de HTML y CSS",
})
const cursoPracticoHtmlCss = new Course({
  name: "Cursos Practico de HTML y CSS",
})
const cursoDataBusiness = new Course({
  name: "Curso DataBusiness",
})
const cursosDataViz = new Course({
  name: "Cursos DataViz",
})
const cursoUnity = new Course({
  name: "Curso de Unity",
})
const cursoUnreal = new Course({
  name: "Cursos Unreal",
})

class LearningPath {
  constructor({
    name, 
    courses = []
  }) {
    this.name = name;
    this.courses = courses;
  }
}

const escuelaWeb = new LearningPath({
  name: "Escuela de desarrollo web",
  courses: [
    "Curso Definitivo de HTML y CSS",
    "Cursos Practico de HTML y CSS",
  ]
});

const escuelaData = new LearningPath({
  name: "Escuela de Data Science",
  courses: [
    "Curso DataBusiness",
    "Cursos DataViz",
  ]
});
const escuelaVgs = new LearningPath({
  name: "Escuela de Video Juegos",
  courses: [
    "Curso de Unity",
    "Cursos Unreal",
  ]
});

class Student3 {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    }
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths
  }
}

const juan2 = new Student3({
  name: "juandc",
  username: "juandc",
  email: "juanito@juanito.com",
  twitter: "fjuandc",
  learningPaths: [
    escuelaWeb,
    escuelaVgs,
  ],
})

const miguel2 = new Student3({
  name: "Miguel",
  username: "Miguel feliz",
  email: "migel@miguel.com",
  instagram: "miguel_feliz",
  learningPaths: [
    escuelaWeb,
    escuelaData,
  ]
})