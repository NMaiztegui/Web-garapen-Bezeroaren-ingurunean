$(document).ready(function(){
    $('#image').click(function (e) { 
        $('#image').animate({
            'opacity': '0.5',
            'height': '100px'
          }, 2000)
        
    });
    $('#errezetakErakutsi').click(function (e) { 
        e.preventDefault();
        let herria=$ ('#inputHerrialdea option:selected').html();

        if (herria==="Aukeratu..."){
            alert('Herrialde bat aukeratu behar da')
        }
        else{
            errezetaErakutsi()
            console.log(herria)
        }
         


     

        
        function errezetaErakutsi(){
            let url= 'cookpad.json'
            let errezetak=[]
            $.ajax({
                type: "GET",
                url: url,
                success: function (data) {
                    for(i=0; i<data.length; i++){
                        let irudia=''
                        if (herria===data[i].herrialdea){
                            let hIzena=data[i].herrialdea
                            $('#herriaIzena').html(hIzena)
                            
                            errezetak=data[i].errezetak
                            $('#errezetaIzena').html(''); // Limpiar contenido previo antes de agregar nuevas recetas
                            $('#irudiaSortu').html('');
                            

                            for (j=0; j<errezetak.length;j++){
                                

                               let  erreIzena=errezetak[j].izena
                               let irudiak=errezetak[j].irudia 
                             
                               $('#errezetaIzena').append("<h3>"+erreIzena+"</h3>")
                               irudia += "<img class='irudia' src='./img/" + irudiak+ " '>";
                               $('#irudiaSortu').html(irudia)
                            }
                        
    
                        }
                    }
                   
                }
            });

        }


         


       
       

    });

})