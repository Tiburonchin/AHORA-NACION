document.addEventListener('DOMContentLoaded', () => {

    // --- 1. LÓGICA DE NAVEGACIÓN DE PÁGINA (Router simple) ---
    const pages = document.querySelectorAll('.page-content');
    const navLinks = document.querySelectorAll('.nav-link');

    function navigateTo(hash) {
        const targetId = 'page-' + (hash.replace('#', '') || 'participacion');
        
        pages.forEach(page => {
            page.classList.remove('active');
        });
        
        const targetPage = document.getElementById(targetId);
        if (targetPage) {
            targetPage.classList.add('active');
        } else {
            document.getElementById('page-participacion').classList.add('active'); // Fallback
        }
        window.scrollTo(0, 0); // Volver al inicio de la página
    }

    // Manejar clics en enlaces de navegación
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const hash = link.getAttribute('href');
            if (hash.startsWith('#')) {
                e.preventDefault();
                window.location.hash = hash;
            }
        });
    });

    // Manejar cambios en el hash (navegación por URL)
    window.addEventListener('hashchange', () => {
        navigateTo(window.location.hash);
    });

    // Cargar la página inicial basada en el hash
    navigateTo(window.location.hash);

    // --- 2. LÓGICA DE COMPONENTES INTERACTIVOS ---

    // --- PÁG. PARTICIPACIÓN: Tabs (Derechos y Deberes) ---
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');

            // Actualizar botones
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Actualizar contenido
            tabContents.forEach(content => {
                if (content.id === 'tab-' + targetTab) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });
        });
    });

    // --- PÁG. PARTICIPACIÓN: Animación de Flowchart (Sección V) ---
    const flowchartSteps = document.querySelectorAll('.flowchart-step');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Animar solo una vez
            }
        });
    }, { threshold: 0.5 }); // Se activa cuando el 50% es visible

    flowchartSteps.forEach(step => {
        observer.observe(step);
    });

    // --- PÁG. AFILIACIÓN: Formulario Multi-Step ---
    let currentStep = 1;
    const formSteps = document.querySelectorAll('.form-step');
    const progressSteps = document.querySelectorAll('.progress-bar-step');
    const progressLine = document.getElementById('progress-line');

    function showStep(stepNumber) {
        // Ocultar todos los pasos
        formSteps.forEach(step => step.classList.remove('active'));
        
        // Mostrar el paso actual
        const activeStep = document.getElementById(`form-step-${stepNumber}`);
        if (activeStep) {
            activeStep.classList.add('active');
        }
        
        // Actualizar barra de progreso
        progressSteps.forEach((step, index) => {
            if (index < stepNumber) {
                step.classList.add('active');
            } else {
                step.classList.remove('active');
            }
        });
        
        // Actualizar línea de progreso
        const progressPercentage = ((stepNumber - 1) / (formSteps.length - 1)) * 100;
        progressLine.style.width = `${progressPercentage}%`;

        currentStep = stepNumber;
    }

    // Lógica del Paso 1 (Checklist)
    const confirmRequisitos = document.getElementById('confirm-requisitos');
    const btnStep1Next = document.getElementById('btn-step-1-next');
    if (confirmRequisitos) {
        confirmRequisitos.addEventListener('change', () => {
            btnStep1Next.disabled = !confirmRequisitos.checked;
        });
        btnStep1Next.addEventListener('click', () => showStep(2));
    }

    // Lógica del Paso 2 (Formulario)
    const btnStep2Prev = document.getElementById('btn-step-2-prev');
    const btnStep2Next = document.getElementById('btn-step-2-next');
    const afiliacionForm = document.getElementById('afiliacion-form');
    const confirmIdeario = document.getElementById('confirm-ideario');

    if (btnStep2Prev) btnStep2Prev.addEventListener('click', () => showStep(1));
    
    if (btnStep2Next) {
        btnStep2Next.addEventListener('click', () => {
            // Validación simple
            const inputs = formSteps[1].querySelectorAll('input[required], select[required]');
            let allValid = true;
            inputs.forEach(input => {
                if (!input.value) allValid = false;
            });
            
            if (!confirmIdeario.checked) allValid = false;

            if (allValid) {
                showStep(3);
                // Aquí se podría enviar el formulario (fetch, etc.)
                // afiliacionForm.submit(); 
            } else {
                // (Opcional) Mostrar un mensaje de error
                alert('Por favor, completa todos los campos requeridos y acepta la declaración del ideario.');
            }
        });
    }

    // Inicializar en el paso 1
    // showStep(1); // Ya no es necesario, se activa por CSS
});