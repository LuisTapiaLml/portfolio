const botones_menu = document.querySelectorAll('.boton-menu');
const aside = document.querySelector('aside');



botones_menu.forEach( boton_menu => {

    boton_menu.addEventListener('click',(e)=>{

        const accion = e.currentTarget.dataset.accion;

        accion === 'mostrar' ?  aside.classList.add('activo') : aside.classList.remove('activo') 
    
    });
});