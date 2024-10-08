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
                    $('#rocket').animate({left:"-=10px"}, 'fast');
                    break;
                

        }
    });
        
});