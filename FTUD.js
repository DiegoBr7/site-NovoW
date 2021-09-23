function tabuada (){
    let num = document.getElementById('txt')
    let tab = document.getElementById('seltab')
    if (num.ariaValueMax.length == 0){
         window.alert('Por favor , digite um numero! ')
    }else{
        let n = number(num.value) 
        let c = 1
        while ( c<= 10) {
            let item = document.createElement('option')
            item.text = `$(num} x ${c} = ${num*c}`
            tab.appendChild(item)
            c++
        }
    }
    }