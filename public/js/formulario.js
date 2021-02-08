
const formulario =  ( elFormulario ) => {

    let formulario =  document.querySelector( elFormulario );

    if(!formulario) return false;

    const elementos = formulario.querySelectorAll(".campo_data");

    let datos = {
        error:false
    };
    
    console.log( typeof(elementos) );

    elementos.forEach( elemento => {
        
        if( elemento.value.trim() === ""  ) {
            
            elemento.classList.add('error');

            datos['error'] = true;
            
        }else {
            
            if( elemento.type === 'email' ){
            
                let email = validateEmail( elemento.value.trim() );
                
                if(!email){
                    elemento.classList.add('error');

                    datos['error'] = true;
                }else{
                    elemento.classList.remove('error');
                    datos[ elemento.name ] =  elemento.value.trim();
                }
            
            }else{
                elemento.classList.remove('error');
                datos[ elemento.name ] =  elemento.value.trim();
            }
        }

    });

    return datos;
}

const validateEmail = (email) =>  {

    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(email);
}

export { formulario }