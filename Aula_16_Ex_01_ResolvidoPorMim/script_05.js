
var seq = []

function adicionar() {
    var res = document.getElementById('res')
    res.innerHTML = ''
    var num = document.getElementById('txtnum')
    var tab = document.getElementById('selnum')
    if (num.value.length == 0) {
        alert('[ERRO] Insira um número!')
    } else {
        var n = Number(num.value)
        if (n < 1 || n > 100) {
            alert('[ERRO] O número precisa ser de 1 até 100!')
        } else if (seq.indexOf(n) != -1) {
            alert('[ERRO] Esse número já foi inserido!')
        } else {
            var item = document.createElement('option')
            item.text = `Valor ${n} adicionado.`
            tab.appendChild(item)
            seq.push(n)
        }
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (seq.length == 0) {
        alert('[ERRO] Ainda não foi adicionado nenhum número!')
    } else {
    res.innerHTML += `<p>Ao todo, temos ${seq.length} números cadastrados. </p>`
    seq.sort()
    var mai = (seq.length) - 1
    res.innerHTML += `<p>O maior valor informado foi ${seq[mai]}. </p>`
    res.innerHTML += `<p>O menor valor informado foi ${seq[0]}. </p>`
    var som = 0
    for (var c = 0; c < (seq.length); c++) {
        som += seq[c]
    }
    res.innerHTML += `<p>Somando todos os valores, temos ${som}. </p>`
    var med = som / (seq.length)
    res.innerHTML += `<p>A média dos valores digitados é ${med}. </p>`
    }
}