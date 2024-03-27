class Componente {
  constructor() {
    if (this.constructor === Componente) {
      throw new Error('Classe Componente é abstrata');
    }
  }

  adicionar(componente) {
    throw new Error('Método não implementado');
  }

  remover(componente) {
    throw new Error('Método não implementado');
  }

  calcularSalario() {
    throw new Error('Método não implementado');
  }

  getNome() {
    throw new Error('Método não implementado');
  }
}

module.exports = Componente;