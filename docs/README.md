# Carpeta /docs — dónde colocar los PDF oficiales

Coloque en esta carpeta los documentos oficiales en formato PDF para que la subpágina de Transparencia los ofrezca como descarga directa.

Nombres de archivo sugeridos (usar exactamente estos nombres o actualizar los enlaces en `transparencia.html`):

- `acta_fundacion_20230513.pdf` — Acta de Fundación (13 de mayo 2023)
- `estatuto_partido_an.pdf` — Estatuto del Partido
- `reglamento_electoral_an.pdf` — Reglamento Electoral
- `ideario_an.pdf` — Ideario (Principios y Visión)

Documentos financieros (por año/trimestre):

- `presupuesto_<AÑO>.pdf` (ej: `presupuesto_2025.pdf`)
- `estados_<AÑO>_<TRIMESTRE>.pdf` (ej: `estados_2025_q1.pdf`)

Aviso TEN (opcional): si desea que el aviso del TEN se cargue dinámicamente desde JSON, guarde `data/ten-latest.json` con esta estructura:

```json
{
  "title": "Aviso del TEN - Convocatoria",
  "body": "Texto breve del aviso...",
  "address": "Dirección / Horario"
}
```

## Probar el sitio localmente (importante para `includes`)

Si abres los archivos `.html` directamente con el explorador (protocolo `file://`) el navegador bloqueará las llamadas `fetch()` usadas para inyectar los fragmentos (`includes/header.html`, `includes/footer.html`). Para ver el header y los includes correctamente, sirve el proyecto por HTTP.

Ejemplos rápidos (PowerShell):

Con Python 3:

```powershell
cd "D:\Almacenamiento\trabajo\2026_a\AHORA NACION\Ahora_Nación"
python -m http.server 8000
# Abrir en el navegador: http://localhost:8000
```

Con npx (sin instalar paquetes globales):

```powershell
cd "D:\Almacenamiento\trabajo\2026_a\AHORA NACION\Ahora_Nación"
npx http-server -p 8000
# Abrir en el navegador: http://localhost:8000
```

Con VS Code: instala la extensión "Live Server" y pulsa "Go Live" en la esquina inferior derecha.

Después de servir por HTTP, recarga la página y abre DevTools (F12) → pestaña Network/Console para confirmar que `includes/header.html` devuelve 200 y que no aparecen errores relacionados con `include error`.
