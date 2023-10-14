class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        if (this.tipo === "mago") {
            ataque = "magia";
        } else if (this.tipo === "guerreiro") {
            ataque = "espada";
        } else if (this.tipo === "monge") {
            ataque = "artes marciais";
        } else if (this.tipo === "ninja") {
            ataque = "shuriken";
        } else {
            ataque = "atacou";
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Exemplo de uso:
const heroi1 = new Heroi("Gandalf", 1000, "mago");
const heroi2 = new Heroi("Aragorn", 35, "guerreiro");
const heroi3 = new Heroi("Bruce Lee", 33, "monge");
const heroi4 = new Heroi("Hanzo", 28, "ninja");

heroi1.atacar();  // Saída: O mago atacou usando  magia
heroi2.atacar();  // Saída: O guerreiro atacou usando espada
heroi3.atacar();  // Saída: O monge atacou usando artes marciais
heroi4.atacar();  // Saída: O ninja atacou usando shuriken
