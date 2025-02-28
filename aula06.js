//Dúvidas gerais
/*
Qual a diferença entre ==  e ===?
A diferença se dá por conta da conversão implícita (coerção de tipo) que ocorre dentro do javascript. Essas conversões ocorrem em operações ou comparações.
*/
console.log(5 == '5')// true, pq o '5' é convertido para number,logo 5 = 5
console.log(5 === '5')//false, pq o '5' não é convertido, então string é diferente de number

//Essas conversões ocorrer em operações matemáticas:
// //Nas operações de *, / e -
console.log(10 - '5')//5
console.log(10 / '5')//2
console.log(10 * '5')//50
console.log(10 + '5')//105
//Nas operações de +, a string se mantém e o number é convertido para string. Ocorrendo a concatenação entre elas.

//Conversões para booleanos
//Em contextos lógicos(if, while, &&,||), há a conversão de valores par TRUE/FALSE
//falsy -> valores que convertidos para boolean retornas em false
console.log(Boolean(0))//falsy
console.log(Boolean(''))//String vazia é considerada falsy
console.log(Boolean(null))// é considerado como falsy
console.log(Boolean(undefined))// é considerado como falsy
console.log(Boolean(NaN))// é considerado como falsy

//truthy -> valores que convertidos para booelan retornam true
console.log(Boolean(1))//true, numbers diferentes de 0 são truthy
console.log(Boolean(-100))//true, numbers negativos também são truthy
console.log(Boolean("hello"))//true, strings não vazias são considerados truthy 
console.log(Boolean(" "))//trhtruethy, strings de espaço em branco também são truthy
console.log(Boolean([]))//true, arrays vazios são considewrados
console.log(Boolean({}))//true, objetos vazios são considewrados truthy
console.log(Boolean(()=>{}))//true, uma função vazia também é considerada truthy
