// Efecto de máquina de escribir para elementos con la clase 'typewriter'
function typeWriterEffect(element, text, speed = 40, callback) {
    let i = 0;
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else if (callback) {
            callback();
        }
    }
    element.innerHTML = '';
    type();
}

// Aplica el efecto a todos los elementos visibles con la clase 'typewriter' en el slide activo
function animateActiveSlideText() {
    const activeSlide = document.querySelector('.swiper-slide-active');
    if (!activeSlide) return;
    const typeEls = activeSlide.querySelectorAll('.typewriter');
    let delay = 0;
    typeEls.forEach(el => {
        const text = el.getAttribute('data-text') || el.textContent;
        el.innerHTML = '';
        setTimeout(() => {
            typeWriterEffect(el, text, 40);
        }, delay);
        delay += Math.max(1200, text.length * 40 + 400); // tiempo para leer
    });
}

// Inicializa el efecto al cambiar de slide
if (window.Swiper) {
    if (window.swiper) {
        window.swiper.on('slideChange', animateActiveSlideText);
    } else {
        document.addEventListener('DOMContentLoaded', function () {
            if (window.swiper) {
                window.swiper.on('slideChange', animateActiveSlideText);
            }
        });
    }
}
// También al cargar la página
window.addEventListener('DOMContentLoaded', animateActiveSlideText);
