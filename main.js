const carroDoJoao = {
    modelo: 'gol',
    fabricante: 'volkswagen',
    anoModelo:'2011',
    anoFabricacao:"2010",
    acelerar:function() {
        console.log("vruum");
    }
}


const carroDaMaria = {
    modelo: 'ka',
    fabricante: 'ford',
    anoModelo:'2005',
    anoFabricacao:"2004",
    acelerar:function() {
        console.log("vruum");
    }
}

function Carro(modelo, fabricante, anoModelo, anoFabricacao) {
    this.modelo - modelo;
    this.fabricante - fabricante;
    this.anoModelo - anoModelo;
    this.anoFabricacao - anoFabricacao;
    this.acelerar = function() {
        console.log("vrummmm");
    }

}


const carroDoJoao2 = new Carro(gol, volkswagen,2011, 2010 );
const carroDaMaria2 = new Carro(ka, ford,2005, 2004 );