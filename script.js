// Esta función inicia la cuenta regresiva y la actualiza cada segundo
function iniciarCuentaRegresiva() {
    // Fecha objetivo: 10 de diciembre de 2024
    const targetDate = new Date('2024-12-10T00:00:00');
    
    // Mostrar la sección de la cuenta regresiva
    const countdownElement = document.getElementById('countdown');
    countdownElement.style.opacity = 1;
    
    // Función para actualizar la cuenta regresiva
    const intervalo = setInterval(function() {
        const currentDate = new Date(); // Fecha actual
        const diferencia = targetDate - currentDate; // Diferencia en milisegundos
        
        // Calcular días, horas, minutos y segundos restantes
        const diasRestantes = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horasRestantes = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutosRestantes = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const segundosRestantes = Math.floor((diferencia % (1000 * 60)) / 1000);
        
        // Mostrar los valores en el formato adecuado
        countdownElement.innerHTML = `${diasRestantes}d ${horasRestantes}h ${minutosRestantes}m ${segundosRestantes}s`;

        // Cuando la cuenta regresiva llega a 0, detener la cuenta y mostrar un mensaje
        if (diferencia <= 0) {
            clearInterval(intervalo);
            countdownElement.innerHTML = "¡El 10 de diciembre ya llegó!";
        }
    }, 1000); // Actualiza cada segundo
}
