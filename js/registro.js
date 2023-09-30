document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('register_form');

    formulario.addEventListener('submit', function (e) {
        e.preventDefault(); // Evita el envío por defecto del formulario

        // Crear un objeto persona con los valores del formulario
        const persona = {
            nombre: document.getElementById("nombre").value,
            edad: document.getElementById("age").value,
            last_name: document.getElementById("last-name").value,
            date: document.getElementById("date").value,
            genero: document.getElementById("genero").value,
            hour: document.getElementById("hour").value,
            num_cita : gen_numero_cita()
        };

        // Guardar el objeto persona en localStorage
        localStorage.setItem('cliente', JSON.stringify(persona));

        function gen_numero_cita() {
            // Obtener la información del cliente desde localStorage
            const clienteJSON = localStorage.getItem('cliente');
            // sí se envio
            if (clienteJSON) {
                const cliente = JSON.parse(clienteJSON);
        
                const num_cita = cliente.nombre.substring(0, 3) + Math.floor(Math.random() * 1000);

                localStorage.setItem('num_cita', num_cita);

                return num_cita;
            //no llegaron los datos
            } else {
                return "La información no es correcta";
            }
        }
        
        document.getElementById('id-gen').textContent = gen_numero_cita();

        // Redirigir a otra página
    });
});




