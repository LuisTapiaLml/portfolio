import { formulario } from './formulario.js';
import { mensaje } from './mensaje.js';

const botones_menu = document.querySelectorAll('.boton-menu');
const aside = document.querySelector('aside');
const form =  document.querySelector('.formulario-contacto');


botones_menu.forEach( boton_menu => {

    boton_menu.addEventListener('click',(e)=>{

        const accion = e.currentTarget.dataset.accion;

        accion === 'mostrar' ?  aside.classList.add('activo') : aside.classList.remove('activo') 
    
    });
});


form.addEventListener('submit',async (e)=>{
    e.preventDefault();

    let valores =  formulario('.formulario-contacto');

    if(!valores.error){

        const respuesta = await mensaje( valores );
    
        if(respuesta.estatus === 'success' ){
            Swal.fire(
                'Genial!',
                'He recibido tu mensaje con éxito, me contactaré lo mas pronto posible!',
                'success'
            )
            form.reset();
        }else{
            Swal.fire(
                'Vaya!',
                'Hubo un problema el enviar el mensaje!',
                'error'
            )
        }
    
    }else{

        Swal.fire(
            'Error!',
            'verifique los datos ingresados en los campos',
            'error'
        )
    
    }

});