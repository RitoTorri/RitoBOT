/**
 * 🎯 Manejador de Mensajes
 * messagesCategory es un objeto que almacena todas las respuestas del bot. 
 * Cada propiedad de messagesCategory son las categorias de mensajes. Informacion, saludos, etc.
 */
import messagesCategory from "../utils/messagesCategory.js";

// Normaliza un texto eliminando acentos y caracteres especiales
const normalizeText = (text) => text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

export const handleMessage = async (message) => {
    if (!message || message.trim() === '') return null;

    // Normalizar el mensaje del usuario
    const normalizedMessage = normalizeText(message.trim());

    // Variable para almacenar la respuesta encontrada
    let response;

    for (const category of Object.values(messagesCategory)) {
        response = category[normalizedMessage];
        if (response) return response;
    }

    // Si no hay coincidencia en ninguna categoría, retornar null
    return null;
};