function pasaitza_eskatzen (){
  
   let ps_egokia =false
   let pasahitzaInput = document.getElementById('pasahitza')
   let pasahitza = pasahitzaInput.value;

  let konprobarInput = document.getElementById('konprobatu')
   let konprobatu= konprobarInput.value;

   do {
      if (pasahitza== konprobatu){
         ps_egokia =true
         alert('Ongi etorri')
      
         document.getElementById("myform").reset();


      }else   {
        
      
        
         alert('Pasahitza okerra da, berriro sartu')
         document.getElementById("myform").reset();

      }
   }  while (ps_egokia==false)
      
}
  
