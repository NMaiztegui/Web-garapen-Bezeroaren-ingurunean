$(document).ready(function () {
    $('#formularioa').submit(function (e) { 
        e.preventDefault();
        let kont1=0; //error de radio, si el igual a 0 no se ha selecionado nada
        let kont2=0; // error de checcek box
        let erroreak=[];
        let ikasSelect=[];
        let checkboxSelected
        let inputs=$('input');
        $('#alertas').empty().css({'display':'none'})

        for(let i=0; i<inputs.length; i++){
            if (inputs[i].type=="radio"){
                let sexua = $("input[name='sexua']:checked").val();
                if (sexua){
                    console.log(sexua)

                }else{kont1++}
            }
            else if (inputs[i].type=='checkbox'){
                if (inputs[i].checked){
                    let ikas=inputs[i].value
                    
                    ikasSelect.push(ikas);
                    console.log(ikasSelect)
                   
                    checkboxSelected = true;
                    
                }
            }else if (inputs[i].type=='text'){
                if (inputs[i].value==""){
                    erroreak.push("(*)Testukaxa hau hutsik dago: "+inputs[i].name)
                }else{
                    console.log(inputs[i].value)
                }
            }
            
        }

        let herria=$('#inputherria option:selected').val()
        if (herria=="Aukeratu"){
            erroreak.push("(*)Ez duzu herria aukeratu")
            
        }else{
            console.log(herria)
        }

        // erroes
        if (kont1>0){
            erroreak.push("(*)Ez duzu generorik aukeratu")
        }
        if (!checkboxSelected){
            erroreak.push("(*)Ez duzu ikasketarik aukeratu")
        }

        if(erroreak.length !=0){
            $('#alertas').css({'display':'block'})
            for (let i=0; i<erroreak.length;i++){
                $('#alertas').append("<p>"+erroreak[i]+"</p></br>")
            }
        }

       
      
        
    });
    $('#reset').click(function(){
        $('#formularioa')[0].reset()
        $('.form-check-input').prop('checked', false);
        $('#alertas').empty()
        console.log("Formulario limpiado");


    });
});