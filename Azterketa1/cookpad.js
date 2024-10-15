$(document).ready(function() {
    // Animación al hacer clic en la imagen
    $('#image').click(function(e) {
        $('#image').animate({
            'opacity': '0.5',
            'height': '100px'
        }, 2000);
    });

    // Mostrar recetas cuando se hace clic en el botón
    $('#errezetakErakutsi').click(function(e) {
        e.preventDefault(); // Evita la acción por defecto del formulario

        let herria = $('#inputHerrialdea option:selected').html(); // Obtén el país seleccionado

        if (herria === "Aukeratu...") { // Verifica si no se seleccionó un país
            alert('Herrialde bat aukeratu behar da');
        } else {
            errezetaErakutsi(herria); // Llama a la función para mostrar recetas
            console.log(herria);
        }

        // Función para mostrar recetas según el país seleccionado
        function errezetaErakutsi(herria) {
            let url = 'cookpad.json'; // URL del archivo JSON

            // Llamada AJAX para obtener las recetas
            $.ajax({
                type: "GET",
                url: url,
                success: function(data) {
                    $('#errezetaIzena').html(''); // Limpia los nombres de recetas anteriores
                    $('#irudiaSortu').html(''); // Limpia las imágenes anteriores

                    // Bucle a través de los datos para encontrar el país seleccionado
                    for (let i = 0; i < data.length; i++) {
                        if (herria === data[i].herrialdea) {
                            let hIzena = data[i].herrialdea;
                            $('#herriaIzena').html(hIzena); // Muestra el nombre del país

                            let errezetak = data[i].errezetak; // Obtén las recetas del país

                            // Bucle a través de las recetas para mostrar cada una
                            for (let j = 0; j < errezetak.length; j++) {
                                let erreIzena = errezetak[j].izena; // Nombre de la receta
                                let irudiak = errezetak[j].irudia; // Imagen de la receta

                                // Añade el título y la imagen directamente, uno debajo del otro
                                $('#errezetaIzena').append("<h3>" + erreIzena + "</h3>");
                                $('#errezetaIzena').append("<img class='irudia' src='./img/" + irudiak + "'>");
                            }
                        }
                    }   
                }
            });
        }
    });
});
