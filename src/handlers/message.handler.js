import commandMessages from "../utils/commandMessages.js";

export const handleMessage = async (message) => {
    let response;

    const minutes = new Date().getMinutes();
    const hour = new Date().getHours();

    const msgLowerCase = message.toLowerCase();
    const messageUser = msgLowerCase.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    console.log(messageUser);

    response = commandMessages.greetings[messageUser];
    if (response) return response

    response = commandMessages.optionsMenu[messageUser];
    if (response) return response;

    response = commandMessages.menu[messageUser];
    if (response) return response;

    response = commandMessages.optionsServices[messageUser];
    if (response) return response;

    // Aquí se puede agregar la condición de horario
    //if (hour < 10 ||  hour > 17) return commandMessages.unavailable;
    
    else return null;
}