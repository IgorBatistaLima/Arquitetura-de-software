class Turma {
    constructor(codigo, nota) {
      this.codigo = codigo;
      this.nota = nota;
    }
  
    aprovado() {
        if (this.nota >= 6) {
            return true;
        } else {
            return false;
        }
        }
  }
  
  module.exports = Turma;