function initNavbar() {
    const nav = document.getElementById('navbar');
    if (!nav) return;

    // Comportamiento de scroll para la barra de navegación
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) { // Activar cuando el scroll supere la altura de la top-bar
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Toggle para el menú móvil
    const mobileBtn = document.getElementById('mobile-menu-button');
    const navLinks = document.getElementById('nav-links');
    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const expanded = mobileBtn.getAttribute('aria-expanded') === 'true';
            mobileBtn.setAttribute('aria-expanded', String(!expanded));
            navLinks.classList.toggle('show');
        });
    }

    // Lógica para los menús desplegables en móvil
    const dropdowns = nav.querySelectorAll('.nav-item.dropdown .nav-link');
    dropdowns.forEach(toggle => {
        toggle.addEventListener('click', e => {
            if (window.innerWidth < 992) { // Solo en móvil
                e.preventDefault();
                const parent = toggle.parentElement;
                parent.classList.toggle('active');

                // Cerrar otros dropdowns
                dropdowns.forEach(otherToggle => {
                    if (otherToggle !== toggle) {
                        otherToggle.parentElement.classList.remove('active');
                    }
                });
            }
        });
    });

    // Cerrar menú móvil y dropdowns si se hace clic fuera
    document.addEventListener('click', (e) => {
        if (navLinks && navLinks.classList.contains('show') && !navLinks.contains(e.target) && !mobileBtn.contains(e.target)) {
            navLinks.classList.remove('show');
            mobileBtn.setAttribute('aria-expanded', 'false');
            document.querySelectorAll('.nav-item.dropdown.active').forEach(d => d.classList.remove('active'));
        }
    });
}

// Inicializar en DOMContentLoaded y después de cargar los includes
document.addEventListener('DOMContentLoaded', initNavbar);
document.addEventListener('includesLoaded', initNavbar);

