
const formulario =  ( elFormulario ) => {

    let formulario =  document.querySelector( elFormulario );

    if(!formulario) return false;

    const elementos = formulario.elements;

    let datos = {};
    
    console.log( typeof(elementos) );

    // elementos.forEach( elemento => {
        // console.log( elemento );
        // if( elemento.value.trim() === "" ) return false;

        // datos[ elemento.name ] =  elemento.value;

    //});

    return datos;
}


export { formulario }