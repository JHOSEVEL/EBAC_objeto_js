class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }

    dizOi() {
        console.log(this.nome + " diz Olá");
    }
}

class Funcionario extends Pessoa {
    constructor(nome, cargo, salario) {
        super(nome);
        this.cargo = cargo;
        this._salario = salario;
    }

    get salario() {
        return this._salario;
    }

    set salario(valor) {
        if (typeof valor === 'number') {
            this._salario = valor;
        }
    }

    aumento() {
        this._salario *= 1.1;
    }
}

const pessoa1 = new Pessoa('Maria');
const funcionario1 = new Funcionario("João", "dev-frontend", 5000);
const funcionario2 = new Funcionario("Pedro", "dev-backend", 6000);

console.log(pessoa1);
console.log(funcionario1);
console.log(funcionario2);

pessoa1.dizOi();
funcionario1.dizOi();
funcionario2.dizOi();
