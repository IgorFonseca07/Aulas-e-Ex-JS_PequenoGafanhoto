function gerar() {
    var num = document.getElementById('txtnum').value
    var tab = document.getElementById('seltab')

    if (num.length == 0) {
        alert('[ERRO] Insira um número para gerar a Tabuada!')
    } else {
        var n = Number(num)
        if (n < 0) {
            alert('[ERRO] Insira um número positivo para gerar a Tabuada!')
        } else {
            tab.innerHTML = ''
            for (var c = 1; c <= 10; c += 1) {
                var item = document.createElement('option')
                item.text = `${n} x ${c} = ${n*c}`
                item.value = `tab${c}` // Não era necessário
                tab.appendChild(item)
            }

        }
    }

}