document.addEventListener('DOMContentLoaded', () => {

    // --- Base de Datos de Miembros del CEN ---
    const cenMembers = [
        {
            name: "Luis Alfonso López Chau Pastor",
            role: "Presidencia",
            func: "Máxima autoridad de representación política, administrativa e institucional."
        },
        {
            name: "Nicoly Soledad Araujo Gamboa",
            role: "Vicepresidencia",
            func: "Miembro del CEN, apoya a la presidencia y asume sus funciones en su ausencia."
        },
        {
            name: "Néstor Diosdado Villegas Alarcón",
            role: "Secretaría General Nacional",
            func: "Brindar soporte organizacional y administrativo al CEN y apoyar directamente al presidente."
        },
        {
            name: "Brayan Aurelio Valentín Delgado",
            role: "S. N. de Organización",
            func: "Administrar y actualizar el “Registro de Afiliados” y diseñar la estrategia de afiliación, promoviendo especialmente a la juventud."
        },
        {
            name: "Carlo Magno Salcedo Cuadros",
            role: "S. N. de Doctrina y Formación Política",
            func: "Fomentar la formación de nuevos cuadros de dirigentes y dirigir la Escuela de Formación Política del partido."
        },
        {
            name: "José Miguel Marcelo Salazar",
            role: "S. N. de Programa y Plan de Gobierno",
            func: "Elaborar, consensuar, actualizar y fomentar el Programa y el Plan de Gobierno del partido."
        },
        {
            name: "Jocelyn Yulisa Prado Elises",
            role: "S. N. de Comunicaciones",
            func: "Diseñar, ejecutar y evaluar la estrategia de comunicación interna y externa del partido."
        },
        {
            name: "César Augusto Holguin Loaiza",
            role: "S. N. de Interculturalidad e Identidad",
            func: "Coordinar la identificación de prioridades territoriales de desarrollo, innovación e identidad cultural."
        },
        {
            name: "Grover Juan Cornejo Yancce",
            role: "S. N. de Asuntos Jurídicos",
            func: "Ejercer las funciones de representación legal y personería del partido."
        },
        {
            name: "Ángel Renato Meneses Crispín",
            role: "S. N. de Economía y Finanzas",
            func: "Dictar disposiciones económicas y financieras; planificar la obtención de recursos económicos."
        },
        {
            name: "José Guillermo Ramos Anahue",
            role: "S. N. de Juventudes",
            func: "Dirigir a las juventudes de AN y elaborar estrategias de intervención política en centros educativos."
        },
        {
            name: "María Cecilia Georgina Esperanza Israel La Rosa",
            role: "S. N. de la Mujer",
            func: "Desarrollar políticas y estrategias relacionadas a la mujer y promover su participación activa."
        },
        {
            name: "Salvador Arévalo La Rosa",
            role: "S. N. de Industria y Emprendimiento",
            func: "Generar un espacio de concertación en beneficio de la industria y el emprendimiento, e impulsar la ciencia y tecnología."
        },
        {
            name: "Helard Bladimir Sonco Villanueva",
            role: "S. N. de Descentralización y Movilización",
            func: "Establecer relaciones con gremios profesionales y difundir propuestas del partido sobre la problemática de los diversos sectores."
        }
    ];

    // --- Renderizar Tarjetas del CEN ---
    const cenGrid = document.getElementById('cen-grid');
    if (cenGrid) {
        cenGrid.innerHTML = cenMembers.map((member, index) => `
            <div class="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group scroll-animate" style="transition-delay: ${index * 50}ms;">
                <div class="p-6">
                    <img src="https://placehold.co/100x100/EFEFEF/B0B0B0?text=Retrato" alt="Retrato de ${member.name}" class="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-an-gray group-hover:border-an-red-dark transition-colors">
                    <h3 class="text-xl font-bold text-center text-an-red-dark">${member.name}</h3>
                    <h4 class="text-md font-semibold text-center text-gray-700 mb-4">${member.role}</h4>
                    
                    <!-- Información oculta (función) -->
                    <div class="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-screen transition-all duration-500 ease-in-out overflow-hidden">
                        <p class="text-sm text-gray-600 text-center border-t border-an-gray pt-4 mt-4">
                            <span class="font-bold">Función Clave:</span> ${member.func}
                        </p>
                        <span class="mt-3 block text-center text-xs font-bold uppercase text-an-red opacity-80">
                            Compromiso con la Transparencia
                        </span>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // --- Lógica de Animación al Desplazar (Scroll) ---
    const scrollElements = document.querySelectorAll('.scroll-animate');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Para el lema, animar las palabras
                if (entry.target.classList.contains('animated-motto')) {
                    entry.target.querySelectorAll('span').forEach((span, index) => {
                        span.style.animationDelay = `${index * 100}ms`;
                    });
                }
                // Dejar de observar el elemento una vez animado
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Activar cuando el 10% del elemento es visible
    });

    scrollElements.forEach(el => {
        observer.observe(el);
    });

    // --- Lógica del Tooltip del Organigrama (Sección 2) ---
    // Se usa CSS :hover para esto, no se necesita JS extra por ahora.
    // He movido la lógica a CSS puro para mayor simplicidad.
    
    // --- Lógica del Modal del Mapa (Sección 4) ---
    const mapPaths = document.querySelectorAll('.region-path');
    const modal = document.getElementById('map-modal');
    const modalContent = document.getElementById('modal-content');
    const modalRegionName = document.getElementById('modal-region-name');
    const closeModalBtn = document.getElementById('close-map-modal');
    const closeModalBtnAlt = document.getElementById('close-modal-btn');
    const regionTooltip = document.getElementById('region-tooltip');
    const regionalInfo = document.getElementById('regional-info');

    // Datos regionales (placeholder para información específica)
    const regionalData = {
        'Lima': {
            population: '9.5 millones',
            status: 'Comité en formación',
            contact: 'contacto@lima.ahoranacion.pe'
        },
        'Arequipa': {
            population: '1.4 millones',
            status: 'Comité activo',
            contact: 'contacto@arequipa.ahoranacion.pe'
        },
        'La Libertad': {
            population: '1.8 millones',
            status: 'Comité en formación',
            contact: 'contacto@lalibertad.ahoranacion.pe'
        },
        // Agregar más datos según sea necesario
    };

    // Función para mostrar tooltip
    function showTooltip(regionName, event) {
        if (regionTooltip && regionalData[regionName]) {
            const data = regionalData[regionName];
            regionTooltip.innerHTML = `
                <div class="font-semibold text-white mb-1">${regionName}</div>
                <div class="text-sm text-gray-200">
                    <div>Población: ${data.population}</div>
                    <div>Estado: ${data.status}</div>
                </div>
            `;
            
            // Posicionar tooltip
            const rect = event.target.getBoundingClientRect();
            const mapRect = document.querySelector('.map-container').getBoundingClientRect();
            
            regionTooltip.style.left = `${rect.left - mapRect.left + rect.width / 2}px`;
            regionTooltip.style.top = `${rect.top - mapRect.top - 10}px`;
            
            regionTooltip.classList.add('show');
        }
    }

    // Función para ocultar tooltip
    function hideTooltip() {
        if (regionTooltip) {
            regionTooltip.classList.remove('show');
        }
    }

    // Agregar event listeners para tooltips
    mapPaths.forEach(path => {
        path.addEventListener('mouseenter', (e) => {
            const regionName = path.getAttribute('data-name');
            showTooltip(regionName, e);
        });
        
        path.addEventListener('mouseleave', hideTooltip);
        
        // Accesibilidad con teclado
        path.addEventListener('focus', (e) => {
            const regionName = path.getAttribute('data-name');
            showTooltip(regionName, e);
        });
        
        path.addEventListener('blur', hideTooltip);
        
        path.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                path.click();
            }
        });
        
        path.addEventListener('click', () => {
            const regionName = path.getAttribute('data-name');
            if (regionName) {
                modalRegionName.textContent = regionName;
                
                // Actualizar información regional
                if (regionalData[regionName]) {
                    const data = regionalData[regionName];
                    regionalInfo.innerHTML = `
                        <div class="bg-an-red/10 p-3 rounded-lg">
                            <div class="text-sm text-gray-600">
                                <div class="flex justify-between mb-1">
                                    <span class="font-medium">Población:</span>
                                    <span>${data.population}</span>
                                </div>
                                <div class="flex justify-between mb-1">
                                    <span class="font-medium">Estado:</span>
                                    <span class="${data.status === 'Comité activo' ? 'text-green-600' : 'text-orange-600'}">${data.status}</span>
                                </div>
                                <div class="flex justify-between">
                                    <span class="font-medium">Contacto:</span>
                                    <span class="text-an-red">${data.contact}</span>
                                </div>
                            </div>
                        </div>
                    `;
                } else {
                    regionalInfo.innerHTML = `
                        <p class="text-gray-600">Información específica de la región próximamente disponible.</p>
                        <p class="text-sm text-gray-500 mt-2">Para más información, contacta a la Secretaría Nacional de Organización.</p>
                    `;
                }
                
                modal.classList.remove('hidden');
                modal.classList.add('flex');
                // Forzar re-animación
                modalContent.classList.remove('is-visible');
                void modalContent.offsetWidth; // Truco para reiniciar animación
                modalContent.classList.add('is-visible');
                
                // Ocultar tooltip al abrir modal
                hideTooltip();
            }
        });
    });

    // Función para cerrar modal
    const closeModal = () => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        hideTooltip(); // Asegurar que tooltip esté oculto
    };

    if(closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }
    if(closeModalBtnAlt) {
        closeModalBtnAlt.addEventListener('click', closeModal);
    }
    if(modal) {
        modal.addEventListener('click', (e) => {
            // Cerrar si se hace clic fuera del contenido
            if (e.target === modal) {
                closeModal();
            }
        });
        
        // Soporte para teclado
        modal.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeModal();
            }
        });
    }
});
