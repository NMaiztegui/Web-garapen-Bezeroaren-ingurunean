$(document).ready(function() {
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
    });
    let rotation = 0; // Variable para rastrear el ángulo de rotación

    $('#rocket').on('click', function() {
        rotation += 90; // Aumenta el ángulo de rotación en 90 grados
        $(this).css('transform', 'rotate(' + rotation + 'deg)');
    });
        
});