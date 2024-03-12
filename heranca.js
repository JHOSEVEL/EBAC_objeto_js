function Pessoa(nome) {
    this.nome = nome;
    this.dizOi = function () {
        console.log(this.nome + " diz Olá");
    }
    this.dizCargo = function() {
        // console.log(this.cargo);
    }
}
function Funcionario(nome, cargo, salario) {

    this.cargo = cargo;
//this.salario = salario;
let _salario = salario;

    this.getSalario = function(valor) {
        if (typeof valor === 'number') {
            _salario = valor;
        }
    }

    this.aumento = function() {
        const novoSalario = _salario * 1.1;
    }
}

//const pessoa1 = new Pessoa('Maria');
const funcionario1 = new Funcionario("maria", "dev-frontend", 5000);

//funcionario1.dizOi();
//funcionario1.dizCargo();


// console.log(pessoa1)
// console.log(funcionario1) 