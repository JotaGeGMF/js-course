// "use strict"

//Escopo Global: Tem acesso em todo o código
let a = 10
let b = 20
let c = 30

if(true){
    console.log(a,b,c)
}

//Escopo de bloco: Só é acessível no escopo em que foi criado
if(true){
    let d = 105
}
//console.log(d) Vai dar erro pq d foi declarado dentro do bloco 

//Uso de Var, let e const
//LET: é uma variável, ou seja, pode-se alterar o seu valor
let tomate = 'Tomate'
console.log(tomate)
tomate = 'Não sou mais um tomate, agora me identifico como uma rúcula!'
console.log(tomate)

//CONST: é uma constante, seu valor NÃO pode ser alterado.
const melancia = 'sou uma Melancia'
console.log(melancia)
/* 
melancia = 'Não sou mais uma melancia, e ao tentar fazer isto, causo um erro no cóidigo!'
console.log(melancia)
*/

//VAR: o var não está mais em uso hoje em dia, pois ele apresenta um comportamento de escopo global, aonde variáveis criadas dentro de bloco podem ser acessadas fora.

if(true){
    var almoço = 'Está na hora de almoçar'
}
console.log(almoço)
almoço = 'Agora eu sou uma macarronada'
console.log(almoço)