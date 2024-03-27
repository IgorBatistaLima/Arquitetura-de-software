const Componente = require('./componente');
const Funcionario = require('./funcionario');


class Departamento extends Componente {
  constructor(nome) {
    super();
    this.nome = nome;
    this.subdepartamentos = [];
    this.funcionarios = [];
  }

  adicionar(componente) {
    if (componente instanceof Departamento) {
      this.subdepartamentos.push(componente);
    } else if (componente instanceof Funcionario) {
      this.funcionarios.push(componente);
    } else {
      throw new Error('Componente inválido');
    }
  }

  remover(componente) {
    const indice = this.subdepartamentos.indexOf(componente);
    if (indice !== -1) {
      this.subdepartamentos.splice(indice, 1);
      return;
    }

    indice = this.funcionarios.indexOf(componente);
    if (indice !== -1) {
      this.funcionarios.splice(indice, 1);
    } else {
      throw new Error('Componente não encontrado');
    }
  }

  calcularSalario() {
    let salarioTotal = 0;
    for (const subdepartamento of this.subdepartamentos) {
      salarioTotal += subdepartamento.calcularSalario();
    }
    for (const funcionario of this.funcionarios) {
      salarioTotal += funcionario.calcularSalario();
    }
    return salarioTotal;
  }

  getNome() {
    return this.nome;
  }
}

module.exports = Departamento;