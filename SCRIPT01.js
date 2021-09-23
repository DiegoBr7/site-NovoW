function contar(){
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')

    if (ini.ariaValueMax.length == 0 || fim.ariaValueMax.length == 0 || passo.ariaValueMax.length == 0){
    window.alert('[ERRO] Faltam dados!')
} else{
    resizeBy.innerHTML = 'Contando'
    let i = Number(ini.value)
    let f = Number (fim,value)
    let p = Number(passo.value)

    for(let c =i ; c <= f ; c+=p) {
        resizeBy.innerHTML += `${c} \u{1F603}` 
    }
}
}