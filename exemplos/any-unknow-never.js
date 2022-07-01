"use strict";
let anyEstaDeVolta;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'teste';
anyEstaDeVolta = 5;
let strinTest = 'verificar';
strinTest = anyEstaDeVolta;
let unknowValor;
unknowValor = 3;
unknowValor = 'Opa';
unknowValor = true;
unknowValor = 'vai sim';
let stringTest2 = 'Agora vai';
if (typeof unknowValor === 'string') {
    stringTest2 = unknowValor;
}
function jogaErro(erro, codigo) {
    throw { error: erro, code: codigo };
}
jogaErro('Deu erro', 500);
