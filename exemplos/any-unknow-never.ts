let anyEstaDeVolta: any;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'teste';
anyEstaDeVolta = 5;

let strinTest: string = 'verificar'
strinTest = anyEstaDeVolta;

let unknowValor: unknown;
unknowValor = 3;
unknowValor = 'Opa';
unknowValor = true;
unknowValor = 'vai sim';

let stringTest2: string = 'Agora vai';

if (typeof unknowValor === 'string') {
    stringTest2 = unknowValor;
}

function jogaErro(erro: string, codigo: number): never {
    throw {error: erro, code: codigo}
}

jogaErro('Deu erro', 500)
