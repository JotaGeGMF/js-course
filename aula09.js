//DIFERENÇAS DE INCREMENTO -> PÓS E PRÉ:
/*
PRÉ: Há o incremento ANTES do uso do valor
PÓS: O incremento ocorre após o uso do valor
*/

let valor1 = 20
valor1++
console.log(valor1)
console.log(valor1++)
//Em ambas anteriores o console mostrará 21, pois o incremento no console2 só acontece depois de mostrar o valor.
console.log(valor1)
//Neste de cima, o valor1 já foi incrementado para 22

console.log(++valor1)
//Aqui ele foi incrementado para 23 antes de ser usado

//---------------------------------------------------------------------
//Estas coisas também podem acontecer com o decremento:
let valor2 = 35
console.log(valor2--)//mostra 35 e depois altera o valor para 34
console.log(--valor2)// mostra 33

//----------------------------------------------------------------------

/*
Exercício:
O que será exibido no console?
let a = 5;
let b = a++;
let c = ++a;
let d = a-- + --b;

console.log("a:", a); -> 5
console.log("b:", b); -> 5, o que muda é o valor de a, que passa a ser 6
console.log("c:", c); -> 7, pois a está sendo incrementado antes, 
console.log("d:", d); -> 7 + 4 = 11 

Complete abaixo com os valores que você acha que aparecerão no final do programa
a: 6
b: 4
c: 7
d: 11
*/