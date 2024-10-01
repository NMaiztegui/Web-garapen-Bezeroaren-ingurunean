let irudia=[
    'saludo1.jpg',
    'saludo2.jpg',
    'saludo3.jpg',
    'saludo4.jpg'
]
let kont=0
let ezabatutakoIrudiak=[]
window.onload=function(){
    document.getElementById('click').addEventListener('click',addimg,false)
  
}
function addimg(){
    
       if (kont==4){
        alert ('Ezin dira irudi gehiago atera')
       }else{
        let irudi
        // comprobar si hay algo en la carpeta de imagenes borradas, significa se se  ha borrado algo
            if (ezabatutakoIrudiak.length>0){
                //si hay algo en la lista asignar a irudi el valor de la ultima imagen
                irudi = ezabatutakoIrudiak.pop() // removes the last element from an aaray
                kont--;
            }
            else{// si no hay nada en esa carpeta meter la primera imagen
                 irudi= document.createElement('img')
                irudi.src = 'img/'+ irudia[kont]   
                kont++
            }
            //listener para eliminar imagen del DOM al hacer doble click
            irudi.addEventListener('dblclick',ezabatuIrudia)

            
            let irudiakSecction= document.getElementById('irudiak')
            irudiakSecction.appendChild(irudi)
         
           
        }

}      
function ezabatuIrudia(event){
    let irudi= event.target; // obtener el elemento de DOM que ha sido clikado
     //borra el elemento de DOM que ha sido clicado
     irudi.remove();
    
     // Añadir la imagen eliminada al array ezabatutakoIrudiak
     ezabatutakoIrudiak.push(irudi);
     console.log(ezabatutakoIrudiak)
     // Actualizar el contador de imágenes
    
}
    
       
     
    


