// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Formulario
document.getElementById('contact-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('¡Mensaje enviado! (Demo: configura un backend para envíos reales)');
});

// Acordeón
document.querySelectorAll('.accordion-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        const isActive = content.classList.contains('active');
        
        // Cerrar todos los acordeones
        document.querySelectorAll('.accordion-content').forEach(item => {
            item.classList.remove('active');
            item.previousElementSibling.classList.remove('active');
        });
        
        // Abrir el seleccionado si no estaba activo
        if (!isActive) {
            content.classList.add('active');
            button.classList.add('active');
        }
    });
});

// Carrusel
const carouselInner = document.querySelector('.carousel-inner');
const cards = document.querySelectorAll('.testimonial-card');
let currentIndex = 0;

function updateCarousel() {
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

document.querySelector('.carousel-next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCarousel();
});

document.querySelector('.carousel-prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    updateCarousel();
});

// Formulario
document.getElementById('contact-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('¡Mensaje enviado! (Demo: configura un backend para envíos reales)');
});