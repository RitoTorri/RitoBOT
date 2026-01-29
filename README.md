# 🤖 RitoBOT

<div align="center">
  <img src="public/icon.png" alt="Logo de RitoBOT" width="200">
  
  [![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/)
  [![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
  [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://javascript.com/)
</div>

## 📱 ¿Qué es RitoBOT?

RitoBOT es un **bot inteligente para WhatsApp** 🤖 que responde automáticamente a mensajes enviados por usuarios. Es completamente configurable y puedes personalizarlo para:

- ✅ **Responder comandos específicos** 📋
- ✅ **Automatizar tareas repetitivas** ⚡
- ✅ **Gestionar reservas y citas** 📅
- ✅ **Proveer información instantánea** ℹ️
- ✅ **Integrar con otros sistemas** 🔗

## 🚀 **Instalación Rápida**

```bash
# 1️⃣ Clona el repositorio
git clone https://github.com/RitoTorri/RitoBOT.git

# 2️⃣ Entra en la carpeta del proyecto
cd RitoBOT

# 3️⃣ Instala las dependencias
npm install  # 📦 Las dependencias pueden tardar un momento
```

> ⚠️ **Nota:** Las dependencias requieren descargar Puppeteer (Chromium), lo que puede tomar algunos minutos ⏳

## 🚀 **Cómo ejecutar el bot**

#### 💻 Ejecutar en tu computadora (Local)

Ideal si estás modificando el código constantemente.

```bash
npm start
```

#### 🐳 Ejecutar en Docker (Entorno de producción)

Ideal para servidores o entornos productivos. Necesitas tener Docker instalado. Cualquier cambio en el código requerirá volver a construir la imagen.

```bash
# 1. Construye la imagen (Solo la primera vez o tras cambios en el código)
npm run docker:build

# 2. Levanta el contenedor
npm run docker:run
```

#### ⚠️ Cambio de Entorno
Si decides cambiar de Local a Docker (o viceversa), debes limpiar el estado previo para evitar conflictos de sesión. Ejecuta estos comandos en bash:

```bash
# Elimina archivos de sesión antiguos
rm -rf sesion_prod .wwebjs_auth .wwebjs_cache
```

Una vez limpiados, puedes ejecutar el bot en el entorno deseado con los comandos correspondientes.

## 📚 **Configuración y Uso**

🔧 **Para configurar y conectar RitoBOT con tu WhatsApp**, consulta la guía completa:

### 📖 [📘 Manual de Configuración](https://github.com/RitoTorri/RitoBot/blob/master/docs/manual_de_configuracion.md)

En esta guía aprenderás:

✨ **Conexión con WhatsApp** - Escanea el código QR  
✨ **Comandos por defecto** - Respuestas preconfiguradas  
✨ **Agregar nuevos comandos** - Personaliza a tu gusto  
✨ **Mensajes personalizados** - Diseña tus propias respuestas  

## 💡 **Casos de Uso**

RitoBOT es perfecto para automatizar:

| Caso de Uso | Descripción | Emoji |
|------------|-------------|--------|
| **📞 Atención al Cliente** | Respuestas automáticas 24/7 | 🤝 |
| **📅 Reservas** | Gestión de citas y horarios | 🗓️ |
| **🛒 E-commerce** | Consulta de productos y precios | 🛍️ |
| **🎓 Educación** | FAQ para estudiantes | 📚 |
| **🏢 Negocios** | Información corporativa | 🏢 |

## 🛠️ **Características Principales**

✅ **Fácil configuración** - Sin conocimientos avanzados  
✅ **Respuestas personalizables** - Total control sobre los mensajes  
✅ **Múltiples categorías** - Organiza comandos por temas  
✅ **Formato WhatsApp** - Usa emojis y formato especial ✨  
✅ **Autenticación persistente** - Solo escanea QR una vez  

## 🛠️ **FLujo de Respuestas de RitoBOT**

<div align="center">
  <img src="public/Flujo de RitoBot.jpg" alt="Flujo de Respuestas de RitoBOT" width="600">
</div>

## 🤝 **Contribuir y Reportar Problemas**

¿Encontraste un error o tienes una sugerencia?

🐛 **Reporta un problema:** [Crear Issue](https://github.com/RitoTorri/RitoBOT/issues/new)  
💡 **Sugiere una mejora:** [Discusiones](https://github.com/RitoTorri/RitoBOT/discussions)  
⭐ **Dale una estrella** al proyecto si te fue útil

---

<div align="center">
  
**✨ Configúralo, personalízalo y hazlo tuyo ✨**

[📘 Ver Documentación Completa](https://github.com/RitoTorri/RitoBot/blob/master/docs/manual_de_configuracion.md) • 
[🐛 Reportar Problema](https://github.com/RitoTorri/RitoBOT/issues)

</div>