const welcomeMenu = `
╭━━━━━━━━━━━━━━━━━━╮
   ✨ *BIENVENIDO/A* ✨
╰━━━━━━━━━━━━━━━━━━╯

¡Hola! Soy tu asistente. 
Estoy aquí para resolver tus dudas y brindarte información.

*📋 MENÚ PRINCIPAL*
Por favor, elige una opción escribiendo la *palabra clave* o la palabra en *negrita*:

• 👥 *"Información"* → Sobre nosotros
• 🛠️ *"Servicios"* → Nuestras soluciones
• 📞 *"Contactos"* → Como contactarnos
• 📍 *"Ubicación"* → Dirección y mapa
• 🕒 *"Horario"* → Horarios de atención

────────────────────
📝 *Tip:* Escribe *"menu"* siempre que quieras volver a ver esta pantalla.
`;


const info = `✨ *INFORMACIÓN PROFESIONAL* ✨

Conoce a nuestro equipo y proyectos:

👥 *EQUIPO*
• *Jesus Cortez* - Desarrollador backend especializado en:
  ◦ APIs RESTful
  ◦ Diseño e implementación de bases de datos
  ◦ Desarrollo web moderno (React, Node.js)
  ◦ Automatizaciones (Node.js)
`;


const services = `✨ *SERVICIOS PROFESIONALES* ✨

*Soluciones tecnológicas personalizadas:*

1️⃣ 🤖 *AUTOMATIZACIONES DE WHATSAPP*
• Bots para atención al cliente
• Respuestas automáticas programadas
• Integración con sistemas existentes

2️⃣ 🌐 *DESARROLLO WEB*
• Sitios web responsivos y modernos
• Aplicaciones web progresivas (PWA)
• Optimización de velocidad y SEO

3️⃣ 🗄️ *BASES DE DATOS*
• Diseño y optimización de esquemas
• Migraciones y mantenimiento
• Consultas complejas y reporting

4️⃣ 🔌 *APIs REST*
• Desarrollo de APIs escalables
• Documentación técnica completa
• Integración con terceros

---
📌 *¿Te interesa algún servicio?*
_Escribe el *número* correspondiente para más detalles._`;


const optionsServices = {
    "1": `🤖 *AUTOMATIZACIONES DE WHATSAPP - DETALLES*

*¿Qué incluye?*
✅ Bots conversacionales personalizados
✅ Integración con APIs externas (CRM, Google Sheets)
✅ Sistema de respuestas automáticas 24/7
✅ Gestión de múltiples usuarios simultáneos
✅ Panel de administración web

*Casos de uso comunes:*
• Atención al cliente automatizada
• Recordatorios de citas/pagos
• Envío masivo de información
• Procesamiento de pedidos
• Reservaciones y agendamiento

*Tecnologías:* Node.js, Baileys, MongoDB, Express

💰 *Desde: $300 USD* (varía según complejidad)
⏱️ *Tiempo estimado:* 2-4 semanas`,

    "2": `🌐 *DESARROLLO WEB - DETALLES*

*¿Qué ofrezco?*
✅ Sitios web responsivos (móvil, tablet, desktop)
✅ Aplicaciones web progresivas (PWA)
✅ Optimización SEO y velocidad
✅ Diseño UI/UX moderno e intuitivo
✅ Integración con redes sociales
✅ Hosting y dominio incluidos (opcional)

*Tecnologías principales:*
• Frontend: React.js, Next.js, Tailwind CSS
• Backend: Node.js, Express
• Bases de datos: PostgreSQL, MongoDB

*Paquetes disponibles:*
1. *Landing Page* - $500 USD (1-2 semanas)
2. *Sitio Corporativo* - $800-1500 USD (3-5 semanas)
3. *E-commerce básico* - $1200+ USD (4-6 semanas)`,

    "3": `🗄️ *BASES DE DATOS - DETALLES*

*Servicios especializados:*
✅ Diseño y modelado de bases de datos
✅ Migración y optimización de datos existentes
✅ Consultas complejas y procedimientos almacenados
✅ Backups automatizados y recuperación
✅ Seguridad y control de acceso

*Expertise en:*
• SQL: PostgreSQL, MySQL, SQL Server
• NoSQL: MongoDB, Firebase
• ORMs: Prisma, Sequelize, Mongoose

*Problemas que resuelvo:*
• "Mi aplicación es lenta con muchos datos"
• "Necesito organizar información caótica"
• "Quiero reportes automáticos"
• "Mi base de datos no escala"

💾 *Proyecto típico:* $400-800 USD (1-3 semanas)`,

    "4": `🔌 *APIs REST - DETALLES*

*Desarrollo completo de APIs:*
✅ Arquitectura RESTful y documentación (OpenAPI/Swagger)
✅ Autenticación JWT, OAuth 2.0
✅ Integración con servicios de terceros
✅ Pruebas unitarias y de integración
✅ Deployment y monitoreo

*Casos comunes:*
• Conexión entre frontend y backend
• Integración con pasarelas de pago
• APIs para aplicaciones móviles
• Microservicios escalables

*Stack tecnológico preferido:*
• Node.js + Express / NestJS
• TypeScript para mayor robustez
• PostgreSQL / MongoDB
• Docker para containerización

⚡ *Precio base:* $600 USD por API completa
📈 *Precio por endpoints adicionales:* $50-100 c/u`
};


const contact = `📞 *CONTACTO Y CANALES OFICIALES*

*Elige cómo prefieres comunicarte:*

1️⃣ *📧 CORREO ELECTRÓNICO*
• Consultas formales y cotizaciones
• Documentación y archivos adjuntos
• cortezfrancisco025@gmail.com

2️⃣ *💼 LINKEDIN*
• Conexión profesional
• Verificación de experiencia
• https://www.linkedin.com/in/francisco-cortez-torres-553693380

3️⃣ *🐙 GITHUB*
• Portafolio técnico
• Revisión de código
• https://github.com/RitoTorri

4️⃣ *📱 WHATSAPP*
• Respuesta rápida (en horario laboral)
• Consultas breves y claras
• 0416-6511524

---
*📌 Recomendaciones:*
• Para _cotizaciones detalladas_ → usa **Correo**
• Para _colaboraciones_ → **LinkedIn**
• Para _consultas técnicas_ → **GitHub Issues**
• Para _respuestas inmediatas_ → **WhatsApp**

⏱ *Tiempo de respuesta estimado:* 24-48 horas hábiles`;


const location = `📍 *UBICACIÓN*

🌍 *Modalidad de trabajo:* Remota 100%

• Disponible para proyectos nacionales e internacionales
• Comunicación por videollamada, email y chat
• Entregas puntuales y seguimiento constante

📞 *Contactos*: 

• WhatsApp: +58 6511524
• Email: cortezfrancisco025@gmail.com
`;


const shedule = `🕒 *HORARIO DE ATENCIÓN*

*Lunes a Viernes:*
• 10:00 AM - 5:00 PM (Horario central)

*Fuera de horario:*
• Los mensajes serán respondidos al siguiente día hábil

🌙 *Fines de semana y festivos:*
• No hay atención regular
• Respuesta diferida al primer día hábil`;


const unavailable = `⏰ *FUERA DE HORARIO DE ATENCIÓN*

Lamentablemente no estamos disponibles en este momento.

*Nuestro horario regular:*
🕙 Lunes a Viernes
10:00 AM - 5:00 PM

*¿Qué puedes hacer?*
1. Deja tu mensaje y te responderemos al siguiente día hábil
3. Revisa nuestro menú principal escribiendo *"menu"*

¡Gracias por tu comprensión! 😊`;

export default { welcomeMenu, info, services, optionsServices, contact, location, shedule, unavailable };