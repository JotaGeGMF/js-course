"use strict"
/*
Sem usar o strict, este trecho roda mesmo sem a variável nome ter sido declarada.

//Falta o let/const em nome para ser declarada
nome = "João"
console.log(nome)

//o segundo parâmetro da função sobrescreve o primeiro parâmetro
function sum(a,a){
    return a+a
}
sum(10,15)

//Aqui nós pegamos o objeto global, definimos uma propriedade chamada "Pi" cujo valor é de 3.14 e NÃO PODE SER SOBREESCREVIDA

Object.defineProperty(this, "Pi", {
    value: 3.14, //define o valor de pi 
    writable: false, //apenas para leitura, ou sej,a não pode sobrescrever 
})
Pi = 3.1415
console.log(Pi) 
*/

let nome = 'joao'
console.log(nome)

function sum(a,b){
    return a+b
}
console.log(sum(10,15))

Object.defineProperty(this, "Pi" ,{
    value: 3.14,
    writable: true
})
Pi = 3.1415
console.log(Pi)
