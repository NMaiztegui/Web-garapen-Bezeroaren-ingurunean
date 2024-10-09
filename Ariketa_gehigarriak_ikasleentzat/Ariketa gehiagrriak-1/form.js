$(document).ready(function() {
   $('#formulario').submit(function(e) { 
       e.preventDefault(); // Evita el envío del formulario

       $(this).addClass('was-validated'); // Añade la clase para la validación de Bootstrap

       // Comprueba la validez del formulario
      
         let emailvalidoa=comprobaremail()
         if (emailvalidoa){
            
           alerta(); // Llama a la función de alerta si es válido
         }
       
   });

   $('#clear').click(function() {
       $('#formulario')[0].reset(); // Resetea los campos del formulario
       $('.form-check-input').prop('checked', false); // Desmarca los checkboxes
       console.log("Formulario limpiado"); // Mensaje en la consola
   });
});

function alerta() {
   let izena = $('#izenaForm').val(); // Obtiene el valor del campo "izena"
   let abizena = $('#abizenaForm').val(); // Obtiene el valor del campo "abizena"

   let aukeratutakoAnimaliak = [];

   // Selecciona todos los checkboxes que están marcados
   $('.form-check-input:checked').each(function() {
       // Agrega el valor del checkbox marcado al array
       aukeratutakoAnimaliak.push($(this).val());
   });

   let email = $('#emailForm').val(); // Obtiene el valor del campo "email"

   // Muestra una alerta con los datos ingresados
   alert('Hauek dira zuk sartutako datuak: ' + izena + ' ' + abizena + ' ' + aukeratutakoAnimaliak.join(', ') + ' ' + email);

   // Resetea los campos del formulario después de mostrar la alerta
   $('#formulario')[0].reset(); // Resetea los campos del formulario
   $('.form-check-input').prop('checked', false); // Desmarca los checkboxes
}

 function comprobaremail(){
     let email= $('#emailForm').val();
    
     if (email.indexOf('@')!==-1){
        if(email.indexOf('.')!==-1){
            return true
         }else{
          alert ('El formualrio tiene que contener un .')
         }
     }else{
         alert('Formulario tiene que contener un @')
     }
    }
