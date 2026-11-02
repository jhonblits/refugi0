# Un refugio para ti (GitHub Pages)

Página estática: no necesita instalar nada ni compilar.

## Publicarla
1. Crea un repositorio nuevo en github.com (nombre poco obvio, por ejemplo `refugio-xk7`, público).
2. **Add file → Upload files** y sube TODO el contenido de esta carpeta
   (`index.html`, `style.css`, `script.js` y la carpeta `assets`). Pulsa **Commit changes**.
3. **Settings → Pages → Deploy from a branch → main → / (root) → Save**.
4. En 1–2 minutos tu enlace será `https://TU-USUARIO.github.io/NOMBRE-DEL-REPOSITORIO/`.

Si ya tienes la otra página (la de la pregunta) en un repositorio, usa un repositorio distinto para esta.

## Personalizar
Todo el texto está al inicio de `script.js`, en el bloque `CONFIG`:
- `nombre`: si lo llenas, el título dice "Respira, Nombre."
- `intro`, `sentir`, `abre`, `veo`, `promesas`, `final`: los mensajes. Cámbialos por tus propias palabras.
- `ayuda`: la línea de apoyo del final (déjala en "" para quitarla). Confirma que el número siga vigente.
- Fotos: reemplaza los archivos de `assets/` con el mismo nombre, o cambia la ruta en `CONFIG`.
- El video de la carta "me extrañes" es `assets/video-para-ti.mp4`; puedes reemplazarlo por otro.
