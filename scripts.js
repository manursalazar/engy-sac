document.addEventListener("DOMContentLoaded", function() {

    // Funcionalidad del botón "Volver arriba"

    const toTopBtn = document.getElementById("toTopBtn");

    window.onscroll = function() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            toTopBtn.style.display = "block";
        } else {
            toTopBtn.style.display = "none";
        }
    };

    toTopBtn.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    

    // Funcionalidad de la presentación de diapositivas
    let currentSlide = 0; // Índice de la diapositiva actual
    showSlide(currentSlide); // Muestra la diapositiva inicial

    // Función para mostrar la diapositiva correspondiente al índice
    function showSlide(index) {
        const slides = document.querySelectorAll('.slide'); // Selecciona todas las diapositivas
        // Reinicia el índice si está fuera de rango
        if (index >= slides.length) { 
            currentSlide = 0; // Si el índice es mayor que la cantidad de diapositivas, vuelve a la primera
        }
        if (index < 0) { 
            currentSlide = slides.length - 1; // Si el índice es menor que 0, va a la última diapositiva
        }
        // Muestra la diapositiva actual y oculta las demás
        slides.forEach((slide, i) => {
            slide.style.display = (i === currentSlide) ? 'flex' : 'none'; // Muestra la diapositiva actual
        });
    }

    // Función para mover la diapositiva
    function moveSlide(step) {
        currentSlide += step; // Ajusta el índice según el paso proporcionado
        showSlide(currentSlide); // Muestra la diapositiva actualizada
    }
});
