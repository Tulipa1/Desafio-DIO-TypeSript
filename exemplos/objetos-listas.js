"use strict";
const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'desenvolvedora'
};
pessoa.idade = 25;
const andre = {
    nome: 'Andre',
    idade: 25,
    profissao: 'pintor'
};
const paula = {
    nome: 'Paula',
    idade: 25,
    profissao: 'desenvolvedora'
};
var profissao;
(function (profissao) {
    profissao[profissao["Professora"] = 0] = "Professora";
    profissao[profissao["Atriz"] = 1] = "Atriz";
    profissao[profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    profissao[profissao["Jogadora"] = 3] = "Jogadora";
})(profissao || (profissao = {}));
const vanessa = {
    nome: 'Vanessa',
    idade: 23,
    proissao: profissao.Desenvolvedora
};
const maria = {
    nome: 'Maria',
    idade: 23,
    proissao: profissao.Desenvolvedora
};
const jessica = {
    nome: 'Jessica',
    idade: 23,
    proissao: profissao.Desenvolvedora,
    materias: ['matemaica discreta', 'programação']
};
const monica = {
    nome: 'Jessica',
    idade: 28,
    materias: ['matemaica discreta', 'programação']
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ', item);
    }
}
listar(monica.materias);
