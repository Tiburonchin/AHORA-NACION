document.addEventListener('DOMContentLoaded', () => {

  // --- III. Financial Dashboard Interactivity ---
  const periodSelector = document.getElementById('period-selector');
  const selectedPeriodSpan = document.getElementById('selected-period');
  const eeffLink = document.getElementById('eeff-link');
  const ejecucionLink = document.getElementById('ejecucion-link');

  if (periodSelector && selectedPeriodSpan && eeffLink && ejecucionLink) {
    
    const updateFinancialDocuments = () => {
      const selectedValue = periodSelector.value; // e.g., "2024-Q4"
      
      // Update the display text
      selectedPeriodSpan.textContent = selectedValue.replace('-', ' — ');

      // Update download links (using placeholder paths)
      const basePath = '/docs/financials/';
      eeffLink.href = `${basePath}estados-financieros-${selectedValue}.pdf`;
      ejecucionLink.href = `${basePath}ejecucion-presupuestal-${selectedValue}.pdf`;
    };

    // Set initial state on page load
    updateFinancialDocuments();

    // Add event listener for changes
    periodSelector.addEventListener('change', updateFinancialDocuments);
  }

  // --- IV. Candidate Search (Placeholder Interactivity) ---
  const candidateSearchInput = document.querySelector('.search-input');
  if (candidateSearchInput) {
    candidateSearchInput.addEventListener('keyup', (e) => {
      const searchTerm = e.target.value.toLowerCase();
      const placeholder = document.querySelector('.candidate-list .placeholder');
      
      if (placeholder) {
          if (searchTerm) {
              placeholder.textContent = `Mostrando resultados para "${searchTerm}"... (funcionalidad de ejemplo).`;
          } else {
              placeholder.textContent = 'El listado de candidaturas se publica aquí.';
          }
      }
    });
  }

  // --- IV. Electoral Timeline Interactivity ---
  const timelineSteps = document.querySelectorAll('.timeline-step');
  if(timelineSteps.length > 0) {
    timelineSteps.forEach(step => {
      step.addEventListener('click', () => {
        // Remove active class from all steps
        timelineSteps.forEach(s => s.classList.remove('active'));
        // Add active class to the clicked step
        step.classList.add('active');
      });
    });
  }

});