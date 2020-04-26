let num = [5, 2, 8, 6, 4]

//---------------------------------------------------------

/* num.sort()
num.push(1)
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`) */

//-----------------------------------------------------------

/* for (let pos = 0; pos < num.length; pos++) {
    console.log(`${num[pos]}`)
} */

//-------------------------------------------------------------

for (let pos in num) {
    console.log(`${num[pos]}`)
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

//-------------------------------------------------------------

let pos = num.indexOf(6)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}

let ret = []
ret.push(2)
console.log(`${ret[0]}`)