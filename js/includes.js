// includes.js — carga fragmentos HTML en elementos con data-include
(async function() {
  async function loadInclude(el) {
    const url = el.getAttribute('data-include');
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error('Failed to fetch ' + url);
      const text = await res.text();
      el.innerHTML = text;
    } catch (err) {
      console.error('include error', err);
      el.innerHTML = '';
    }
  }

  const includeEls = document.querySelectorAll('[data-include]');
  const promises = Array.from(includeEls).map(el => loadInclude(el));
  await Promise.all(promises);
  // Señalamos que los includes ya fueron insertados
  document.dispatchEvent(new CustomEvent('includesLoaded'));
})();
