
let sexua
function datuak_eskuratu(){
    // autatutako sexua eskuratu
    //input guztiak array baten barruan sartu
    let sexuAutatu = document.querySelectorAll('input[name="sexua"]')
    //comprobatu array horretatik zein dagoen autauta
    sexua=Array.from(sexuAutatu).find(input=>input.checked)
}