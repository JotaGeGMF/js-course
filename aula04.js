//Operadores Aritméticos
/*
+ -> soma
- -> subtração
/ -> divisão
* -> multiplicação
** -> potenciação
% -> módulo/resto da divisão
++ -> incremento de uma unidade
+= -> incremento de um valor específico
-- -> decremento de uma unidade
-= -> decremento de um valor específico
*/

//Soma e subtração
let a = 20
let b = 30

function sum(n1,n2){
    return n1 + n2
}
console.log(sum(a,b))

function sub(n1,n2){
    return n1 - n2
}
console.log(sub(a,b))

//Multiplicação e divisao

let c = 5 
let d = 20

function mult(n1,n2){
    return n1 * n2
}
console.log(mult(c,d))

function div(n1,n2){
    return n2/n1
}
console.log(div(c,d))

//Resto 
let e = 9
let f = 2

function resto(n1,n2){
    return n1%n2
}
console.log(resto(e,f))

//incremento/decremento unitário
let g = 10
console.log(g)
console.log(++g)

console.log(--g)
console.log(--g)

//Fato sobre comportamento em javascript
/*
Ao utilizar o console.log(g++), primeiro eu mostro a variável g e depois ocorre o incremento. O que isso quer dizer?
quer dizer que, se eu desse outro console.log(g), mostraria o valor 11

Para fazer o decremento/incremento primeiro, deveria ser da seguinte forma:
console.log(--g) ou console.log(++g)

Lembrando que operações de incremento e decremento afetam o valor da variável.

Para não alterar o valor, poderia fazer da seguinte forma
console.log(g + 1)
console.log(g - 1)

neste caso, g NÃO ESTÁ SENDO MODIFICADO NA MEMÓRIA, está apenas sendo usado como um valor dentro da expressão.
*/ 

//Incremento ou decremento de outros valores
let h = 50

console.log( h += 10)
//console.log( h = h + 10) -> 60
console.log( h += 10)
//console.log( h = h + 10) -> 70
console.log( h += 10)
//console.log( h = h + 10) -> 80
console.log( h += 10)
//console.log( h = h + 10) -> 90
console.log( h += 10)
//console.log( h = h + 10) -> 100

console.log(h -= 20)
//console.log(h = h - 20) -> 80
console.log(h -= 20)
//console.log(h = h - 20) -> 60
console.log(h -= 20)
//console.log(h = h - 20) -> 40
console.log(h -= 20)
//console.log(h = h - 20) -> 20
console.log(h -= 20)
//console.log(h = h - 20) -> 0

/*
Precendência de operadores
* e / vem primeiro que os + e -
Os parenteses colocam precedencia nas operações 
*/
console.log(10 * 20 + 2) // 10 *20 e depois 200 + 2 = 202
console.log(10*(20 + 2)) // 20 + 2 e depois 22 * 10 = 220
