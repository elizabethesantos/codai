const nome = "Elizabeth";
let nome2 = "Elizabeth";
let pessoa = {
    nome : "Elizabeth",
    idade : "35",
    trabalho : "Programador"
}

let nomes = ["maria","pedro","jose"];
let pessoas = [
    {
        nome : "Elizabeth",
        idade : "35",
        trabalho : "Programador"
    },
    {
        nome : "maria",
        idade : "33",
        trabalho : "ux/ui designer"
    }
];

console.log("valor inicial:")
console.log(nome2);

nome2 = "Silvia"

console.log("valor alterado:")
console.log(nome2)

function alterarNome() {
    nome2 = "Maria"
    console.log("Valor alterado:");
    console.log(nome2);
}

function recebeEalteraNome(novoNome){
    nome2 = novoNome;
    console.log("valor alterado novamente:");
    console.log(nome2)
}

//alterarNome();

//recebeEalteraNome("joao");
//recebeEalteraNome("maria");

console.log(pessoa);

console.log("Nome:");
console.log(pessoa.nome);

console.log("Idade:");
console.log(pessoa.idade);

console.log("Trabalho:");
console.log(pessoa.trabalho);

console.log(nomes);
console.log(pessoas)

function adicionarPessoa() {
    pessoas.push(pessoa)
};

adicionarPessoa({
    nome:"neto",
    idade: "23",
    trabalho: "porteiro"
});

console.log(pessoas);