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

    if(valores){

        const respuesta = await mensaje( valores );
    
        console.log( respuesta );
    
    }else{

        alert('hubo un error');
    
    }

});