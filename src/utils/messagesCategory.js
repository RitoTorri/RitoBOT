import staticMessages from "./staticMessages.js";

/**
 * Objeto que organiza los comandos por categorías.
 * Cada categoría contiene comandos como propiedades con sus respuestas.
 * Las propieedades de las category vendrian siendo los mensajes enviados por el usuario.
 * Si usuario envia hola, el bot ira a saludos -> propiedad hola -> busca la funcion saludoBienvenido() en staticMessages
 */
const category = {
    saludos: {
        "hola": staticMessages.saludoBienvenido(),
        "buenos dias": `¡Buenos días! ☀️\n${staticMessages.saludoBienvenido()}`,
        "buenas tardes": `¡Buenas tardes! 🌞\n${staticMessages.saludoBienvenido()}`,
        "buenas noches": `¡Buenas noches! 🌃\n${staticMessages.saludoBienvenido()}`,
        "buenas": `¡Buenas! 🌞\n${staticMessages.saludoBienvenido()}`
    },
    informacion: {
        "ayuda": staticMessages.mensajeAyuda(),
        "comandos": staticMessages.listaComandos(),
        "autor": staticMessages.autor()
    }
}

export default category;