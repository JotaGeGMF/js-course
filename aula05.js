//Operadores relacionais em javascript
/*
Operadores relacionais fazem COMPARAÇÃO entre valores
Ou seja, retornam um booleano -> TRUE/FALSE
Eles são:
> maior que
< menor que
>= maior ou igual que
<= menor ou igual que
== igual a
=== exatamente igual (valor e tipo)
!= diferente
!== estritamente diferente (valor e tipo)
*/

let n1 = 10
let n2 = 25
let n3 = 15
let n4 = 25
let n5 = '15'

console.log(n1 > n2) // 10 é maior do que 25? Não, logo = false
console.log(n1 < n2) // 10 é menor do que 25? Sim, logo = true
console.log(n2 >= n3)// 25 é maior ou igual a 15? Sim, 25 é maior, logo = true
console.log(n2 >= n4)// 25 é maior ou igual a 25?Sim, 25 é igual a 25, logo = true
console.log(n3 <= n1)// 15 é menor ou igual a 10? Não, logo = false

console.log(n2 == n4)// 25 é igual a 25?Sim, logo = true
console.log(n2 != n4)//25 é diferente de 25? Não,logo = false
console.log(n3 == n5)// 15 é igual a '15'?Sim, logo = true
console.log(n3 === n5)// 15 é estritamente igual a '15'? Não, logo = false
console.log(n3 !== n5)// 15 é estritamente diferente a '15'? Sim, logo = true

