function verificar() {
    window.alert('FUNCIONOU')
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.ariaValueMax.length == 0 || fano.value > ano) {
        window.alert('[ERRO]Verifique os dados e tente novamente!')
    } else {
             var fsex = document.getElementsByTagName('radsex')
             var idade = ano - Number(fano.value)
             var genero = ''
             if (fsex[0].checked){
                 genero = 'Homem'
             }else if (fsex[1].checked) {
                 genero = 'mulher' 
             }
             res.getElementsByClassName.textAlign = 'center'
             res.innerHTML = 'Detectamos ${genero} com ${idade} anos.'
         }
    }
