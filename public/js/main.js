import { mensaje } from './mensaje.js';

const botones_menu = document.querySelectorAll('.boton-menu');
const aside = document.querySelector('aside');
const formulario =  document.querySelector('.formulario-contacto');


botones_menu.forEach( boton_menu => {

    boton_menu.addEventListener('click',(e)=>{

        const accion = e.currentTarget.dataset.accion;

        accion === 'mostrar' ?  aside.classList.add('activo') : aside.classList.remove('activo') 
    
    });
});


formulario.addEventListener('submit',async (e)=>{
    e.preventDefault();
    
    const respuesta = await mensaje();

    console.log(respuesta);

});