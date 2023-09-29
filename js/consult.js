document.addEventListener('DOMContentLoaded', function () {
    // Obtener los valores almacenados en localStorage
    const nombreInput = localStorage.getItem('nombre');
    const edadInput = localStorage.getItem('age');
    const last_name_Input = localStorage.getItem('last-name');
    const date_input = localStorage.getItem('date');
    const genero_input = localStorage.getItem('genero');
    const hour_input = localStorage.getItem('hour');

    // Mostrar los valores en la página de consulta
    document.getElementById('name_consult').textContent = nombreInput;
    document.getElementById('last_name_consult').textContent = last_name_Input;
    document.getElementById('age_consult').textContent = edadInput;
    document.getElementById('date_consult').textContent = date_input;
    document.getElementById('genero_consult', genero_input);
    document.getElementById('hour_consult', hour_input);
    
});

