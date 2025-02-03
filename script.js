document.addEventListener('DOMContentLoaded', function() {
    const askButton = document.getElementById('askButton');
    const screen0 = document.getElementById('screen0');
    const screen1 = document.getElementById('screen1');
    const screen2 = document.getElementById('screen2');
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const backgroundMusic = document.getElementById('backgroundMusic');

    // Reproducir la canción de fondo automáticamente
    backgroundMusic.play();

    let clickCount = 0; // Contador de clics en el botón "No"
    const maxClicks = 10; // Número de clics necesarios para que el botón "Sí" cubra toda la pantalla

    // Manejar el clic en el botón "Dime"
    askButton.addEventListener('click', function() {
        screen0.classList.add('hidden');
        screen1.classList.remove('hidden');
    });

    noButton.addEventListener('click', function() {
        if (noButton.textContent === 'No') {
            noButton.textContent = '¿Estás segura?';
            noButton.classList.add('small');
        } else if (noButton.textContent === '¿Estás segura?') {
            clickCount++; // Incrementar el contador de clics

            // Calcular el nuevo tamaño del botón "Sí"
            const scale = 1 + (clickCount / maxClicks) * 9; // Escala de 1 a 10
            yesButton.style.transform = `scale(${scale})`;

            // Mover el botón "No" hacia la derecha
            const moveDistance = clickCount * 20; // Ajusta este valor para controlar la distancia
            noButton.style.transform = `translateX(${moveDistance}px)`; // Cambio aquí (sin el signo negativo)

            // Si se alcanza el número máximo de clics, cambiar a la segunda pantalla
            if (clickCount >= maxClicks) {
                yesButton.classList.add('fullscreen');
                setTimeout(() => {
                    screen1.classList.add('hidden');
                    screen2.classList.remove('hidden');
                }, 500); // Espera 500ms para la animación
            }
        }
    });

    yesButton.addEventListener('click', function() {
        yesButton.classList.add('fullscreen');
        setTimeout(() => {
            screen1.classList.add('hidden');
            screen2.classList.remove('hidden');
        }, 500); // Espera 500ms para la animación
    });

    document.addEventListener('click', function() {
        backgroundMusic.muted = false;
        backgroundMusic.play();
    });
});