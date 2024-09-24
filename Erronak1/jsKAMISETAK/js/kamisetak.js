let kamisteak=[
    './img/6.jpg',
    './img/9.jpg',
    './img/11.jpg',
]
let indiceDireccion=0
let kami_nume='6'

function cambiarImagen(direction){
   
    if (direction=='atzera'){
        if (indiceDireccion==0){
            indiceDireccion=3;
        }
        indiceDireccion= (indiceDireccion -1 ) % kamisteak.length; // Avanza a la siguiente imagen, vuelve al inicio si es el último
        // % kamisteak.length para que el índice de la imagen vuelva al inicio o al final del arreglo de imágenes cuando llega a los límites.
    }else if(direction=='aurrera'){
        indiceDireccion= (indiceDireccion +1 ) % kamisteak.length; // Avanza a la siguiente imagen, vuelve al inicio si es el último
    }
    
    if(indiceDireccion==0){
        kami_nume='6'
    }else if(indiceDireccion==1){
        kami_nume='9'
    }else if(indiceDireccion==2){
        kami_nume='11'
    }
    
    
    


    document.getElementById('kami_num').innerHTML=kami_nume
    //cambiar la url de la imagen
    document.getElementById('imagen').setAttribute('src',kamisteak[indiceDireccion])
}