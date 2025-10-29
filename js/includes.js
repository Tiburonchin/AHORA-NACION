// includes.js — carga fragmentos HTML en elementos con data-include
(async function() {
  async function loadInclude(el) {
    const url = el.getAttribute('data-include');
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error('Failed to fetch ' + url + ' (status ' + res.status + ')');
      const text = await res.text();
      el.innerHTML = text;
    } catch (err) {
      // Mensaje claro en consola con guía rápida
      console.error('include error loading', url, err);

      // Mostrar un aviso visible en la UI para acelerar el diagnóstico
      el.innerHTML = '<div class="include-error" style="padding:1rem;border:1px solid #f1c0c0;background:#fff6f6;color:#900;">' +
        '<strong>Error cargando fragmento:</strong> ' + url +
        '<div style="font-size:.9rem;margin-top:.5rem;color:#444">Comprueba que el sitio se sirve por <code>http://</code> o <code>https://</code> (no con <code>file://</code>), y revisa la Consola/Network en DevTools.</div>' +
        '</div>';
    }
  }

  const includeEls = document.querySelectorAll('[data-include]');
  const promises = Array.from(includeEls).map(el => loadInclude(el));
  await Promise.all(promises);
  // Señalamos que los includes ya fueron insertados
  document.dispatchEvent(new CustomEvent('includesLoaded'));
})();
