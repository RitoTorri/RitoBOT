import staticMessages from "./staticMessages.js";

export const greetings = {
    "hola": `¡Hola! 👋 Qué gusto saludarte.\n\n${staticMessages.welcomeMenu}`,

    "buenos dias": `¡Muy buenos días! ☀️\n*Espero que tengas una excelente jornada.*\n\n${staticMessages.welcomeMenu}`,

    "buenas tardes": `¡Buenas tardes! ☕\n*Deseo que estés teniendo una tarde productiva.*\n\n${staticMessages.unavailable}`,
};

const unavailable = `¡Buenas noches! 🌙\n*Que tengas un descanso reparador.*\n\n${staticMessages.unavailable}`;

const menu = { "menu": staticMessages.welcomeMenu };

const optionsMenu = {
    "informacion": staticMessages.info,
    "servicios": staticMessages.services,
    "contactos": staticMessages.contact,
    "ubicacion": staticMessages.location,
    "horario": staticMessages.shedule,
}

const optionsServices = {
    "1": staticMessages.optionsServices["1"],
    "2": staticMessages.optionsServices["2"],
    "3": staticMessages.optionsServices["3"],
    "4": staticMessages.optionsServices["4"],
}

export default { greetings, unavailable, menu, optionsMenu, optionsServices };