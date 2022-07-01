const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'desenvolvedora'
}

pessoa.idade = 25;

const andre: {nome: string, idade: number, profissao: string} = {
    nome: 'Andre',
    idade: 25,
    profissao: 'pintor'
}

const paula: {nome: string, idade: number, profissao: string} = {
    nome: 'Paula',
    idade: 25,
    profissao: 'desenvolvedora'
}

enum profissao {
    Professora,
    Atriz,
    Desenvolvedora,
    Jogadora
}

interface Pessoa {
    nome: string,
    idade: number,
    proissao?: profissao
}

interface Estudante extends Pessoa {
    materias: string[]
}

const vanessa: Pessoa = {
    nome: 'Vanessa',
    idade: 23,
    proissao: profissao.Desenvolvedora
}

const maria: Pessoa = {
    nome: 'Maria',
    idade: 23,
    proissao: profissao.Desenvolvedora
}

const jessica: Estudante = {
    nome: 'Jessica',
    idade: 23,
    proissao: profissao.Desenvolvedora,
    materias: ['matemaica discreta', 'programação']
}

const monica: Estudante = {
    nome: 'Jessica',
    idade: 28,
    materias: ['matemaica discreta', 'programação']
}

function listar(lista:string[]) {
    for (const item of lista) {
        console.log('- ', item);
    }
}

listar(monica.materias)