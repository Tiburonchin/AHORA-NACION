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
