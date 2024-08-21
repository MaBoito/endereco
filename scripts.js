function Endereco(rua,cidade,cep) {
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
}

const endereco1 = new Endereco ('alves do banho 448', 'campinas', '13030-580');
const endereco2 = new Endereco ('alves do banho 796', 'campinas', '13030-580');
const endereco3 = endereco1;

function saoIguais (endereco1, endereco2) {
  return endereco1.rua === endereco2.rua &&
            endereco1.cidade === endereco2.cidade &&    
            endereco1.cep === endereco2.cep
}
console.log (saoIguais(endereco1,endereco2));

function temEnderecoMemoriaGuardada(endereco1, endereco2){
    return endereco1 === endereco3;
}
console.log (temEnderecoMemoriaGuardada(endereco1,endereco2));

// para retornar true a function temEnderecoMemoriaGuardado é necessário criar um objeto da seguinte forma 
// const endereco3 = endereco1
// e alterando o return da function temEnderecoMemoriaGuardado para
// return endereco1 === endereco3;
//ou remover as inf do endereco2 e adicionar após o igual = endereco1