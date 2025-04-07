//OPERADORES LÓGICOS:
/*
&& -> AND: "e"
|| -> OR:  "Ou" 
!  -> NOT: "Negação"

operadores lógicos retornam um booleano, TRUE ou FALSE.

TABELA VERDADE 
AND: todas as condições precisam ser verdadeiros para retornar true
T T = T
T F = F 
F T = F
F F = F

OR: precisa de apenas uma condição ser verdadeira para retornar true
T T = T 
T F = T
F T = T
F F = F
*/

let n1 = 20
let n2 = 50 
let n3 = 75

function saoPares(number){
    if(number % 2 === 0){
        return `É par!`
    }
    return `É ímpar!`
}
console.log(saoPares(n1))
console.log(saoPares(n2))
console.log(saoPares(n3))

if(n1%2 === 0 && n2%2 === 0){
    console.log(n1 + " e " + n2  + ' são pares')
}

if(n1 % 2 === 0 && n3 % 2 === 0){
    console.log(n1 + ' e ' + n3 + 'são pares.' )
} // não mostrará nada pq a segunda condição é false

if(n3 % 2 === 0 || n1 % 2 === 0 ){
    console.log(n1 + ' ou ' + n3 + ' é par' )
} // mostrará que 'é par' pq a segunda condição é true mesmo a primeira sendo false