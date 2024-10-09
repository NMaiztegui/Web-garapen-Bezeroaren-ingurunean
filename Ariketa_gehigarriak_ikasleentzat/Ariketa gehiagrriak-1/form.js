$(document).ready(function(){

   $('#formulario').submit(function (e) { 
      e.preventDefault();
      $(this).addClass('was-validated');
         if (!this.checkValidity()) {
            e.stopPropagation();
         }
         else
         {  
            alerta();
         }
         
         
      });
      $('#clear').click(function(){
        $('#formulario')[0].reset(); // Resetea los campos del formulario
        $('.form-check-input').prop('checked', false); // Desmarca los checkboxes
        console.log("Formulario limpiado"); // Mensaje en la consola
      })

});
   function alerta(){
    let izena=$('#izenaForm').val();
    let abizena=$('#abizenaForm').val();

    let aukeratutakoAnimaliak= []

     // Selecciona todos los checkboxes que están marcados
     $('.form-check-input:checked').each(function() {
        // Agrega el valor del checkbox marcado al array
        aukeratutakoAnimaliak.push($(this).val());
    });

    let email= $('#emailForm').val();
    alert('Hauek dira zuk sartutako datuak:'+izena+' '+ abizena+' '+aukeratutakoAnimaliak.join(', ')+' '+email)
   }
