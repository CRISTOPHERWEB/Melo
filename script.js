// Obtener elementos de la carta
const btnOpenElement = document.querySelector('#open');
const btnCloseElement = document.querySelector('#close');

// Obtener elementos del video
const video = document.getElementById('video');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');

// Deshabilitar el botón de pausa inicialmente
pauseButton.disabled = true;

// Control de la carta
btnCloseElement.disabled = true;

btnOpenElement.addEventListener('click', () => {
  btnOpenElement.disabled = true;
  btnCloseElement.disabled = false;

  const coverElement = document.querySelector('.cover');
  coverElement.classList.add('open-cover');

  setTimeout(() => {
    coverElement.style.zIndex = -1;

    const paperElement = document.querySelector('.paper');
    paperElement.classList.remove('close-paper');
    paperElement.classList.add('open-paper');

    // Animación del corazón
    const heartElement = document.querySelector('.heart');
    heartElement.style.display = 'block';
  }, 500);
});

btnCloseElement.addEventListener('click', () => {
  btnOpenElement.disabled = false;
  btnCloseElement.disabled = true;

  const coverElement = document.querySelector('.cover');
  const paperElement = document.querySelector('.paper');
  paperElement.classList.remove('open-paper');
  paperElement.classList.add('close-paper');

  setTimeout(() => {
    coverElement.style.zIndex = 0;
    coverElement.classList.remove('open-cover');

    // Animación del corazón
    const heartElement = document.querySelector('.heart');
    heartElement.style.display = 'none';
  }, 500);
});

// Control de video
playButton.addEventListener('click', () => {
  video.play();
  playButton.disabled = true;
  pauseButton.disabled = false;
});

pauseButton.addEventListener('click', () => {
  video.pause();
  playButton.disabled = false;
  pauseButton.disabled = true;
});

// Establecer la fecha objetivo para la cuenta regresiva
const targetDate = new Date("2024-12-10T00:00:00");

// Función para actualizar la cuenta regresiva
function updateCountdown() {
    const now = new Date();
    const timeDifference = targetDate - now;

    if (timeDifference <= 0) {
        document.getElementById("countdown").innerHTML = "¡Ya llegamos al 10 de diciembre de 2024! 🎉";
        clearInterval(interval); // Detiene la actualización
        return;
    }

    // Calcular días, horas, minutos y segundos
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Mostrar la cuenta regresiva
    document.getElementById("countdown").innerHTML =
        `${days} días, ${hours} horas, ${minutes} minutos, ${seconds} segundos`;
}

// Actualizar la cuenta regresiva cada segundo
const interval = setInterval(updateCountdown, 1000);

// Llamar a la función para mostrar el tiempo inicial inmediatamente
updateCountdown();
