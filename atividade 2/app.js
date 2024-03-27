const Funcionario = require('./src/funcionario'); 
const Departamento = require('./src/departamento');
const Componente = require('./src/componente');


const diretor = new Funcionario('João Silva', 'Diretor', 10000);
const departamentoVendas = new Departamento('Vendas');
const departamentoMarketing = new Departamento('Marketing');



const funcionarioVendas1 = new Funcionario('Ana Oliveira', 'Vendedor', 5000);
const funcionarioVendas2 = new Funcionario('Bruno Santos', 'Vendedor', 5500);

departamentoVendas.adicionar(funcionarioVendas1);
departamentoVendas.adicionar(funcionarioVendas2);

departamentoMarketing.adicionar(new Funcionario('Maria Souza', 'Gerente de Marketing', 8000));

const empresa = new Departamento('Empresa');
empresa.adicionar(departamentoVendas);
empresa.adicionar(departamentoMarketing);
empresa.adicionar(diretor);

const salarioTotal = empresa.calcularSalario();

console.log(`Salário total da empresa: R$${salarioTotal}`);
console.log(`Salário do diretor: R$${diretor.calcularSalario()}`);

