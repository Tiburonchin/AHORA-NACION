// Interactividad mínima para la página de Organización
document.addEventListener('DOMContentLoaded', function(){
    // Toggle DNI visibility for cards that have a .dni-toggle button
    document.querySelectorAll('.dni-toggle').forEach(function(btn){
        btn.addEventListener('click', function(e){
            var card = btn.closest('.org-card');
            var dni = card.querySelector('.org-card-dni');
            if(!dni) return;
            var hidden = dni.getAttribute('aria-hidden') === 'true';
            dni.setAttribute('aria-hidden', hidden ? 'false' : 'true');
            btn.setAttribute('aria-pressed', hidden ? 'true' : 'false');
            btn.textContent = hidden ? 'Ocultar DNI' : 'Mostrar DNI';
        });
    });

    // Make all .org-card clickable to toggle DNI on keyboard enter
    document.querySelectorAll('.org-card').forEach(function(card){
        card.tabIndex = 0;
        card.addEventListener('keydown', function(e){
            if(e.key === 'Enter' || e.key === ' ') {
                var btn = card.querySelector('.dni-toggle');
                if(btn) btn.click();
            }
        });
    });

    // Placeholder: future gallery and regional map interactions
    // For now, ensure details elements are keyboard friendly (native behavior)
});
