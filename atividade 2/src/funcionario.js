const Componente = require('./componente');

class Funcionario extends Componente {
  constructor(nome, cargo, salario) {
    super();
    this.nome = nome;
    this.cargo = cargo;
    this.salario = salario;
  }

  adicionar() {
    throw new Error('Funcionário não pode ter subcomponentes');
  }

  remover() {
    throw new Error('Funcionário não pode ter subcomponentes');
  }

  calcularSalario() {
    return this.salario;
  }

  getNome() {
    return this.nome;
  }
}

module.exports = Funcionario;