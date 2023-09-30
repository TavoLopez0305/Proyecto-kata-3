document.addEventListener('DOMContentLoaded', function () {
    // Obtener los valores almacenados en localStorage
    var info_cliente = {
        nombreInput: localStorage.getItem('nombre'),
        edadInput: localStorage.getItem('age'),
        last_name_Input: localStorage.getItem('last-name'),
        date_input: localStorage.getItem('date'),
        genero_input: localStorage.getItem('genero'),
        hour_input: localStorage.getItem('hour'),
        num_cita: localStorage.getItem('num_cita')
    };

    const formulario = document.getElementById('consult-form'); 

    formulario.addEventListener('submit', function (e) {
        e.preventDefault();
        const num_cita_input = document.getElementById('num-cita').value

        function mostrar_datos(info_cliente) {
            // Mostrar los valores en la página de consulta
            document.getElementById('name_consult').textContent = info_cliente.nombreInput;
            document.getElementById('last_name_consult').textContent = info_cliente.last_name_Input;
            document.getElementById('age_consult').textContent = info_cliente.edadInput;
            document.getElementById('date_consult').textContent = info_cliente.date_input;
            document.getElementById('genero_consult').textContent = info_cliente.genero_input;
            document.getElementById('hour_consult').textContent = info_cliente.hour_input;
        }

        const num_cita = localStorage.getItem('num_cita') == num_cita_input;
        if (num_cita) {
            // Llamar a la función para mostrar los datos
            mostrar_datos(info_cliente);
        } else {
            alert("El numero de cita es incorrecto");
        }
    });

    const botton_delet = document.getElementById('bottons'); // Cambiar 'bottons' a 'botton_delet'
    botton_delet.addEventListener('click', function () {
        eliminar_datos(); // Llamar a la función eliminar_datos para eliminar los datos del localStorage
    });

    function eliminar_datos() {
        localStorage.removeItem('nombre');
        localStorage.removeItem('age');
        localStorage.removeItem('last-name');
        localStorage.removeItem('date');
        localStorage.removeItem('genero');
        localStorage.removeItem('hour');
        localStorage.removeItem('num_cita');
    }
});
