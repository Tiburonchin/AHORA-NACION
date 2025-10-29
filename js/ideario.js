// Espera a que todo el contenido HTML esté cargado
document.addEventListener('DOMContentLoaded', function() {

    // --- II. Interacción de Principios (Hover) ---
    // Esta interacción se maneja puramente con CSS (ver :hover en style.css)
    // Se agregó .card-summary y .card-full-text para cumplir la solicitud.

    // --- III. Interacción del Acordeón ---
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const isActive = header.classList.toggle('active');

            header.setAttribute('aria-expanded', isActive);

            if (isActive) {
                // Muestra el contenido
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                // Oculta el contenido
                content.style.maxHeight = null;
            }
        });
    });

    // --- V. Interacción de Valores Éticos (Pestañas) ---
    const valorButtons = document.querySelectorAll('.valor-btn');
    const valorContents = document.querySelectorAll('.valor-content');

    valorButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            
            // 1. Quitar 'active' de todos los botones
            valorButtons.forEach(btn => btn.classList.remove('active'));
            // 2. Quitar 'active' de todos los contenidos
            valorContents.forEach(content => content.classList.remove('active'));

            // 3. Añadir 'active' solo al botón clickeado
            button.classList.add('active');
            // 4. Añadir 'active' solo al contenido objetivo
            document.getElementById(targetId).classList.add('active');
        });
    });

});
