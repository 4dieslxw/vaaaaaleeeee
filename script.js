document.addEventListener('DOMContentLoaded', function() {
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const screen1 = document.getElementById('screen1');
    const screen2 = document.getElementById('screen2');
    const backgroundMusic = document.getElementById('backgroundMusic');

    // Reproducir la canción de fondo automáticamente
    backgroundMusic.play();

    noButton.addEventListener('click', function() {
        noButton.textContent = '¿Estás segura?';
        noButton.classList.add('small');
    });

    yesButton.addEventListener('click', function() {
        yesButton.classList.add('big');
        setTimeout(() => {
            screen1.classList.add('hidden');
            screen2.classList.remove('hidden');
        }, 500); // Espera 500ms para la animación
    });
});