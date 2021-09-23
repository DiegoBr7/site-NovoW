alert ('Olá Noias');
function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora =// data.getHours()
msg.innerHTML = 'Agora são ${hora} horas.'
var hora = 22;
if (hora >= 0 && hora < 12){
    //Boa Dia!
    img.src = 'C:\Users\Usuario\Downloads\Projeto Photoshop\FUT'
    document.body.style.backgroun="#d4b829c"
}else if (hora >= 12 && hora < 18){
    // Boa Tarde!
    img.src='C:\Users\Usuario\Downloads\Projeto Photoshop\Rio02'
    document.body.style.backgroun="#20e682"
} else{
    // Boa noite!
    img.src = 'C:\Users\Usuario\Downloads\Projeto Photoshop\Rio3'
    document.body.style.backgroun="#b12f44"
}
}
