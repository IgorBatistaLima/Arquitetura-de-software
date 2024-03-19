const Turma = require('./turma');

class TurmaPresencial extends Turma {
  constructor(codigo, nota, frequencia) {
    super(codigo, nota);
    this.frequencia = frequencia;
    this.alunos = []; // Adicionado esta linha
  }

  adicionarAluno(aluno, notas, frequencia, codigo) {
    aluno.notas = notas; 
    aluno.frequencia = frequencia; 
    aluno.codigo = codigo; 
    this.alunos.push(aluno); 
  }
}

module.exports = TurmaPresencial;