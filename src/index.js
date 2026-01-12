import pkg from 'whatsapp-web.js';
const { Client, LocalAuth } = pkg;
import { handleMessage } from "./handlers/message.handler.js";
import qrcode from "qrcode-terminal";

// Configuración del cliente con autenticación local
const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        headless: true,  // Ejecuta Chrome en modo sin cabeza
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    }
});

client.on("qr", (qr) => {
    console.log("\n🔐 Escanea este código QR con WhatsApp:");
    console.log("1. Abre WhatsApp en tu teléfono");
    console.log("2. Toca los tres puntos → Ajustes → Busca el scaner");
    console.log("3. Escanea el código QR\n");
    
    qrcode.generate(qr, { small: true }, function (qrcodeStr) {
        console.log(qrcodeStr);
    });
});

client.on("ready", () => {
    console.log("✅ Bot está listo y conectado!");
    console.log("📱 Usando WhatsApp Web API");
});


client.on("message", async (message) => {
    // Ignorar actualizaciones de estado
    if (message.from === "status@broadcast") return;
    
    // Ignorar mensajes de grupos
    if (message.from.includes('@g.us')) return;
    
    // Solo responder a chats individuales
    if (message.from.endsWith('@c.us')) {
        try {
            const response = await handleMessage(message.body);
            if (response !== null) {
                await message.reply(response);
            } else {
                console.log("❌ No se encontró ninguna respuesta para el mensaje:", message.body);
            }
        } catch (error) {
            console.error("❌ Error procesando mensaje:", error);
        }
    }
});

client.initialize();