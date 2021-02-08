const emailTemplates = (tipo = "", dataEmail = {}) => {
    
    let fecha = new Date().toLocaleString("en-US", { timeZone: "America/Mexico_City" });

    let htmlString = `  `;

    switch (tipo) {
        case "portfolio":

            htmlString = `<h1>Genial!</h1>
                    <p>Alguien Esta viendo el portafolio</p>
                    <small> ${fecha} </small>
                `;



            break;

        case "cv":

            htmlString = `<h1>Genial!</h1>
                <p>Alguien Esta viendo el CV</p>
                <small> ${fecha} </small>
            `;

            break


        case "confirmacion":

            htmlString = `<h1>Hola!</h1>
                <h2>Soy <a href="http://luisptapia.com" style="border-bottom: 1px solid blue" > Luis Tapia </a> </h2>
                <p>He recibido su mensaje, me contactaré lo mas pronto posible.</p>
                <small> Gracias 😊 </small>`; 

            break;

        case "contacto":

            htmlString = `
                            <p>${dataEmail.mensaje} </p>
                            <small> ${fecha} </small>`;

            break;

        default:
            break;
    }

    return htmlString;
}

module.exports =  { emailTemplates };