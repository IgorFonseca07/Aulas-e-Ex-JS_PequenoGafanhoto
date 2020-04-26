function contar() {
let início = document.getElementById('txtini').value
let fim = document.getElementById('txtfim').value
let passo = document.getElementById('txtpas').value
let msg = document.getElementById('msg')

if (início.length == 0 || fim.length == 0 || passo.length == 0) {
    alert('[ERRO] Faltam dados!')
    msg.innerHTML = 'Impossível contar!'
} else {
    let i = Number(início)
    let f = Number(fim)
    let p = Number(passo)
    msg.innerHTML = 'Contando: <br>'
    if (p <= 0) {
        alert('Valor de Passo 0 ou negativo inválido, o valor considerado será 1!')
        p = 1
    }
    if (i < f) {
        // Contagem Crescente
        for (let c = i; c <= f; c += p) {
            msg.innerHTML += `${c} \u{1F449}` // Dentro de crases
            // Full Emoji List - Pesquise no Google para ver os códigos!
        }
    } else {
        // Contagem Regressiva
        for (let c = i; c >= f; c -= p) {
            msg.innerHTML += `${c} \u{1F449}` // Dentro de crases
            // Full Emoji List - Pesquise no Google para ver os códigos!
        }
    }
    msg.innerHTML += `\u{1F3C1}` // Dentro de crases
    // Full Emoji List - Pesquise no Google para ver os códigos!
}
}