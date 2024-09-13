function pasaitza_eskatzen (){
   let mensaje = document.getElementById('mesua')
   let parrafo= document.createElement('p')

   let pasahitzaInput = document.getElementById('pasahitza')
   let pasahitza = pasahitzaInput.value;

  let konprobarInput = document.getElementById('konprobatu')
   let konprobatu= konprobarInput.value;

   if (pasahitza== konprobatu){
      
      parrafo.innerHTML='Ongi ertorri'
      mensaje.appendChild(parrafo);

   }else {
      parrafo.innerHTML='Pasahitza okerra, berriro sartu'
      mensaje.appendChild(parrafo);
      document.getElementById("myform").reset();

   }
}
