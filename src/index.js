import pkg from 'whatsapp-web.js';
const { Client, LocalAuth } = pkg;
import { handleMessage } from "./handlers/message.handler.js";
import qrcode from "qrcode-terminal";

const client = new Client({
    authStrategy: new LocalAuth(),
});

client.on("qr", (qr) => {
    qrcode.generate(qr, { small: true }, function (qrcodeStr) {
        console.log(qrcodeStr);
    });
    console.log("\nQR generated successfully!");
});

client.on("ready", () => {
    console.log("Bot is ready!");
});

client.on("message", async (message) => {
    const response = await handleMessage(message.body);
    if (response) message.reply(response);
});

client.initialize();