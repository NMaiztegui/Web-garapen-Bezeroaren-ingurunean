$(document).ready(function() {
    let rotation=0;
    $(document).on('keydown',function(e) {
        switch(e.key) {
            case "ArrowDown":
                $('#rocket').animate({top:"+=10px"}, 'fast');
                break;
            case "ArrowUp":
                $('#rocket').animate({top:"-=10px"}, 'fast');
                break;
            case "ArrowRight":
                $('#rocket').animate({left:"+=10px"}, 'fast');
                break;
            case "ArrowLeft":
                    $('#rocket').animate({left:"-=10px",top:"-=10px" }, 'fast'); //moverse en diagonala la izquierda arriba
                    break;
                

        }
            //rotar ca vez que  haga cotrol
            if (e.ctrlKey){ 
                rotation+=90;
                $('#rocket').css('transform', 'rotate(' + rotation + 'deg)')
            } //cambiar el estuilo para rotar
            else if (e.shiftKey){
                rotation-=90
                $('#rocket').css('transform', 'rotate(' + rotation + 'deg)')
            }
       
    });
   

    
        
});