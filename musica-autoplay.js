// musica-autoplay.js
// Hace que al hacer clic en cualquier parte del body, se dispare el botón de música automáticamente (solo una vez)

(function () {
    var yaDisparo = false;
    function autoPlayMusica() {
        if (yaDisparo) return;
        yaDisparo = true;
        var btn = document.getElementById('btn-musica');
        if (btn) btn.click();
        // Remover el listener para evitar múltiples ejecuciones
        document.body.removeEventListener('click', autoPlayMusica);
        document.body.removeEventListener('touchstart', autoPlayMusica);
    }
    // Escuchar cualquier click o toque en el body
    document.body.addEventListener('click', autoPlayMusica);
    document.body.addEventListener('touchstart', autoPlayMusica);
})();
