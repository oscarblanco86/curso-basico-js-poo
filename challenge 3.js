import { Comment } from "./Comment";
import { Student } from "./Student";

export class TeacherStudent extends Student {
  // Tu código aquí 👈
  constructor(props, skills = []) {
    super(props);
    this.skills = skills;
    this.studentRole = 'profesor';
  }
  publicarComentario(commentContent) {
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
      studentRole: this.studentRole + " de " + this.skills.join(","),
      skills: this.skills,
    });
    console.log(comment);
    return comment.publicar();
  }
}