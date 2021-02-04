const conexion = async  ( url , data , method ) => {

    const respuesta = await fetch( url , {
        
        method : method,
        
        headers : { 
            'Accept': 'application/json',
            'Content-Type': 'application/json' 
        },
    
        body : JSON.stringify(data) 
        
    }) .then(response => {
        
        return response.json();

    }) .catch(error =>{

        return error;

    });

    return respuesta;

};


export { conexion };