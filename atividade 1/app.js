const http = require("node:http");
const hostname = "127.0.0.1";
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n");
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

const Turma = require("./src/Turma");
const TurmaPresencial = require("./src/TurmaPresencial");
const Aluno = require("./src/Aluno");

let turma = new TurmaPresencial("123", 7, 75);
let aluno = new Aluno("João", "joao", "123");

turma.adicionarAluno(aluno, 7, 75, "123");
console.log(turma.alunos[0].nome);
console.log(turma.alunos[0].login);
console.log(turma.alunos[0].RA);
console.log(turma.alunos[0].notas);
console.log(turma.alunos[0].frequencia);
console.log(turma.alunos[0].codigo);
console.log(turma.aprovado()
  ? "Aprovado"
  : "Reprovado");
