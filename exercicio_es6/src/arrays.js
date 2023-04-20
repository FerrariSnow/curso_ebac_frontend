let alunos = [
    { nome: "Luffy", nota: 5 },
    { nome: "Zoro", nota: 4 },
    { nome: "Sanji", nota: 9 },
    { nome: "Robin", nota: 10 },
    { nome: "Nami", nota: 10 },
    { nome: "Jinbe", nota: 9 },
    { nome: "Brook", nota: 5 },
    { nome: "Usopp", nota: 6 },
];

let alunosNotaMaiorQue6 = alunos.filter((aluno) => aluno.nota >= 6);

console.log(alunosNotaMaiorQue6);
