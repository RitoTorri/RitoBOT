/**
 * Mensajes estáticos del bot.
 * Son funciones que retornan strings formateados.
 * @param {Object} data - Datos opcionales para personalizar el mensaje o inyectar datos de APIS
 */

const saludoBienvenido = (data = {}) => `
╭━━━━━━━━━━━━━━━━━━╮
   ✨ *¡Hola!* ✨
╰━━━━━━━━━━━━━━━━━━╯

Me llamo RitoBOT, sere tu asistente.  
Estoy aquí para resolver tus dudas y brindarte información.

────────────────────
`;

const mensajeAyuda = (data = {}) => `
╭━━━━━━━━━━━━━━━━━━╮
   ✨ *Ayuda* ✨
╰━━━━━━━━━━━━━━━━━━╯

Si tienes alguna duda, puedes leer la documentación en el siguiente enlace:

────────────────────
`;

const listaComandos = (data = {}) => `
╭━━━━━━━━━━━━━━━━━━╮
   ✨ *Comandos* ✨
╰━━━━━━━━━━━━━━━━━━╯

Si envias un mensaje con un comando, te responderá con la información correspondiente.

Hola
Buenos dias
Buenas tardes
Buenas noches
Buenas
ayuda
comandos
autor
`;

const autor = (data = {}) => `
*👨‍💻 Autor*

👋 Hola, soy *Jesus Cortez* desarrollador de este pequeño proyecto, si te gusta puedes dare una ⭐ en el repositorio. Ademas de seguirmer en Github. Si estas interesando en otrs proyectos puedes comunicarte conmig por estos medios.

1️⃣ *📧 CORREO ELECTRÓNICO*
• cortezfrancisco025@gmail.com

2️⃣ *💼 LINKEDIN*
• https://www.linkedin.com/in/francisco-cortez-torres-553693380

3️⃣ *🐙 GITHUB*
• https://github.com/RitoTorri

4️⃣ *📱 WHATSAPP*
• 0416-6511524

`;

/**
 * Añade aquí nuevas funciones de mensaje.
 * Recuerda agregar la función en el import de commandMessages.js
 */

export default { saludoBienvenido, mensajeAyuda, listaComandos, autor };