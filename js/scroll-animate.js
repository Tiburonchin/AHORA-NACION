// --- SCRIPT PARA ANIMACIONES DE SCROLL ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, {
    rootMargin: '0px',
    threshold: 0.1 // El elemento se activa cuando el 10% es visible
});

const elements = document.querySelectorAll('.scroll-animate');
elements.forEach(el => observer.observe(el));
