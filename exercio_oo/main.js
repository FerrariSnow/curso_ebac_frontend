function Animal(nome, cor, dono, idade) {
    this.nome = nome;
    this.cor = cor;
    this.dono = dono;
    this.idade = idade;
    this.olhos = 2;
    this.boca = 1;
    this.nariz = 1;
}

function Cachorro(nome, cor, dono, idade, tamanhoDoPelo, porte, lateMuito) {
    this.tamanhoDoPelo = tamanhoDoPelo;
    this.porte = porte;
    this.lateMuito = lateMuito;
    this.latir = function () {
        console.log(this.nome + " latiu");
    };

    Animal.call(this, nome, cor, dono, idade);
}

function Gato(nome, cor, dono, idade, estiloDeVida, arrisco) {
    this.estiloDeVida = estiloDeVida;
    this.arrisco = arrisco;
    this.miar = function () {
        console.log(this.nome + " miou");
    };

    Animal.call(this, nome, cor, dono, idade);
}

const doguinho = new Cachorro(
    "charlie",
    "branco",
    "brown",
    18,
    "curto",
    "pequeno",
    false
);

const gato1 = new Gato("johnny", "preto", "ferrari", 2, "aventureiro", false);

const gato2 = new Gato("Pandora", "cinza", "chai", 3, "princesa", true);

console.log(gato1);
console.log(gato1.miar());

console.log(gato2);
console.log(gato2.miar());

console.log(doguinho);
console.log(doguinho.latir());
