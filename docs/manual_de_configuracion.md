# 🤖 Conexión del Bot con WhatsApp

Después de ejecutar el programa, en la consola aparecerá un **código QR** 📱 que debes escanear con WhatsApp.  
Luego verás el mensaje: `✅ Bot está listo y conectado!`  
Desde otro dispositivo puedes enviar mensajes al bot y responderá automáticamente si coincide con los comandos configurados en `src/utils/messagesCategory.js`.

---

# 📜 Comandos por Defecto

El bot responde por defecto a estos comandos:

✨ **Saludos:**
- `hola` 👋
- `buenos dias` ☀️
- `buenas tardes` 🌤️
- `buenas noches` 🌙
- `buenas` 👋

ℹ️ **Información:**
- `ayuda` ❓
- `comandos` 📋
- `autor` 👨‍💻

Puedes **eliminarlos, modificarlos o agregar** nuevos comandos según tus necesidades.

---

# ⚙️ Configuración del Bot

## 📁 **Ubicación de Archivos**

Los mensajes se configuran en dos archivos:

1. **`src/utils/messagesCategory.js`** 🎯 → Define los comandos que activan respuestas
2. **`src/utils/staticMessages.js`** 📝 → Contiene el texto de las respuestas

---

## 🔧 **Cómo Funciona**

### **1. Crear Nuevo Mensaje** (`staticMessages.js`)
```javascript
// 📝 Crea una función con tu mensaje
const miMensaje = (data = {}) => `
✨ Tu texto aquí con formato
`;

// 📤 Exporta la función (agrégala al final)
export default { saludoBienvenido, mensajeAyuda, miMensaje };
```

### **2. Agregar Nuevo Comando** (`messagesCategory.js`)
```javascript
const category = {
    // 🎭 CATEGORÍA EXISTENTE - Agrega comandos aquí
    saludos: {
        "hola": staticMessages.saludoBienvenido(),
        "mi comando": staticMessages.miMensaje()  // ← ✨ NUEVO
    },
    
    // 🆕 O crea una NUEVA CATEGORÍA
    servicios: {
        "consultar": staticMessages.miMensaje()
    }
}
```

---

## 🚀 **Ejemplo Práctico**

**Objetivo:** Que el bot responda con precios cuando escriban `"precios"`

### **Paso 1 - Crear el mensaje:**
```javascript
// 📍 En staticMessages.js
const precios = (data = {}) => `
💲 *Nuestros Precios:*
• Básico: 100€
• Premium: 200€
• Enterprise: 300€
`;

export default { saludoBienvenido, precios }; // ← Agrega 'precios'
```

### **Paso 2 - Agregar el comando:**
```javascript
// 📍 En messagesCategory.js
const category = {
    informacion: {
        "precios": staticMessages.precios()  // ← ✨ Agrega esta línea
    }
}
```

✅ **Listo:** Ejecuta el programa y envía `"precios"` para ver el resultado.

---

## 📋 **Reglas Importantes**

### ✅ **SÍ HACER:**
- ✨ Agregar nuevas propiedades al objeto `category`
- 📝 Crear nuevas funciones en `staticMessages.js`
- 🔤 Usar **minúsculas** en los comandos: `"precios"`, `"ayuda"`
- 🗑️ Puedes borrar categorías existentes si no las necesitas

### ❌ **NO HACER:**
- 🚫 Cambiar el nombre de la variable `category`
- 🔠 Usar mayúsculas en los comandos ya que el mensaje del usuario se convertirá en minúsculas

---

## 🎯 **Resumen Rápido**

| Archivo | Qué Hacer | Ejemplo |
|---------|-----------|---------|
| **`staticMessages.js`** 📝 | Crear funciones con mensajes | `const precios = () => "100€"` |
| **`messagesCategory.js`** 🎯 | Agregar comandos a `category` | `"precios": staticMessages.precios()` |

**📌 Fórmula:** Comando → Busca en `category` → Ejecuta función → Envía mensaje a WhatsApp

---

## 🔄 **Flujo Visual Simplificado**
```
📱 Usuario: "hola" 
    ↓
🔍 Busca en messagesCategory.js
    ↓
🎯 Encuentra: category.saludos["hola"]
    ↓
⚙️ Ejecuta: staticMessages.saludoBienvenido()
    ↓
📤 Envía: "¡Hola! Soy RitoBOT"
```

✨ **¡Listo para personalizar!** Agrega tus propios comandos y respuestas.