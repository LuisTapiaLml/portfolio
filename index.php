<?php

    include "./assets/php/funciones.php";

    carga();

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portafolio</title>

    <link rel="stylesheet" href="assets/css/all.min.css">

    <link rel="stylesheet" href="./assets/css/styles.css">

</head>

<body>

    <div class="main-container">
        <header class="responsive-header">
            <button class="boton-menu" data-accion="mostrar">
                <i class="fas fa-bars"></i>
            </button>
        </header>
        <aside>
            <header class="heder-aside">
                <div class="boton-cerar-menu">
                    <button class="boton-menu" data-accion="ocultar">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="img-container">
                    <img src="https://fakeimg.pl/350x200/?text=LT" alt="profile image">
                </div>
                <p class="nombre titulo">Luis Tapia</p>
                <p>Full stack jr Developer</p>
            </header>
            <div>
                <section class="info">

                    <div>
                        <span>País:</span>
                        <span>México</span>
                    </div>
                    <div>
                        <span>Estado:</span>
                        <span>CDMX</span>
                    </div>
                    <div>
                        <span>Edad:</span>
                        <span>22</span>
                    </div>

                </section>
                <section class="idiomas">
                    <article class="idioma">
                        <div class="percent">
                            <svg viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="120" cy="120" r="110" stroke="#191923" stroke-width="15" />
                                <circle cx="120" cy="120" r="110" stroke="#191923" stroke-width="15" />
                                <path
                                    d="M120 10C134.445 10 148.749 12.8452 162.095 18.3733C175.441 23.9013 187.567 32.0038 197.782 42.2183C207.996 52.4327 216.099 64.559 221.627 77.9048C227.155 91.2507 230 105.555 230 120C230 134.445 227.155 148.749 221.627 162.095C216.099 175.441 207.996 187.567 197.782 197.782C187.567 207.996 175.441 216.099 162.095 221.627C148.749 227.155 134.445 230 120 230C105.555 230 91.2506 227.155 77.9048 221.627C64.559 216.099 52.4327 207.996 42.2182 197.782C32.0038 187.567 23.9012 175.441 18.3732 162.095C12.8452 148.749 9.99999 134.445 10 120C10 105.555 12.8452 91.2506 18.3733 77.9048C23.9013 64.559 32.0038 52.4326 42.2183 42.2182C52.4328 32.0038 64.5591 23.9012 77.9049 18.3732C91.2507 12.8452 105.555 9.99999 120 10L120 10Z"
                                    stroke="#FFC107" stroke-width="15" />
                            </svg>

                            <div class="number">
                                <p>100<span>%</span></p>
                            </div>
                        </div>
                        <p class="nombre-idioma">Español</p>
                    </article>
                    <article class="idioma">
                        <div class="percent">
                            <svg viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="120" cy="120" r="110" stroke="#191923" stroke-width="15" />
                                <circle cx="120" cy="120" r="110" stroke="#191923" stroke-width="15" />
                                <path
                                    d="M120 10C140.286 10 160.178 15.6099 177.475 26.2096C194.772 36.8092 208.801 51.9857 218.011 70.061C227.221 88.1364 231.253 108.407 229.661 128.63C228.069 148.854 220.916 168.244 208.992 184.656C197.068 201.068 180.837 213.863 162.095 221.627C143.353 229.39 122.829 231.819 102.792 228.646C82.7555 225.472 63.9867 216.82 48.5607 203.645C33.1348 190.47 21.6526 173.285 15.3838 153.992"
                                    stroke="#FFC107" stroke-width="15" />
                            </svg>
                            <div class="number">
                                <p>70<span>%</span></p>
                            </div>
                        </div>
                        <p class="nombre-idioma">Ingles</p>
                    </article>
                </section>
                <section class="descarga-cv">
                    <a href="./assets/php/descarga.php">Descarga CV  <i class="fas fa-download"></i></a>
                </section>
            </div>
            <footer class="footer-aside">
                sdas
            </footer>
        </aside>
        <main>
            <div class="hero">
                <div>
                    <h1>Portfolio</h1>
                </div>
            </div>
            <section>
                <h2>Tecnologias</h2>
            
                <div class="skills">
                    <div>
                        <i class="fab fa-html5"></i>
                        <span>HTML5 </span>
                    </div>
                    <div>
                        <i class="fab fa-css3-alt"></i>
                        <span>CSS3 </span>
                    </div>
                    <div>
                        <i class="fab fa-js"></i>
                        <span>JavaScript</span>
                    </div>
                    <div>
                        <i class="fab fa-sass"></i>
                        <span>Sass</span>
                    </div>
                    <div>
                        <i class="fab fa-react"></i>
                        <span>React js</span>
                    </div>
                    <div>
                        <i class="fab fa-php"></i>
                        <span>php</span>
                    </div>
                    <div>
                        <img src="assets/img/icons/microsoft-sql-server.svg" alt="">
                        <span>SQL Server</span>
                    </div>
                    <div>
                        <i class="fab fa-github"></i>
                        <span>Git</span>
                    </div>
                </div>
            </section>
            <section >
                <h2 class="titulo">Portfolio</h2>
                <div class="proyectos">
                    <article class="proyecto">
                        <div class="contenedor-imagen">
                            <img src="assets/img/organic.JPEG" alt="imagen proyecto porfolio developer web">
                        </div>
                        <div class="descripcion">
                            <span class="titulo">Organic Food</span>
                            
                            <p>Landing page de restaurant de comida organica</p>
    
                            <a href="http://www.organic.luisptapia.com" class="link" target="_blank" >Ir a proyecto <i class="fas fa-angle-right"></i> </a>
                        </div>
                    </article>
                    <article class="proyecto">
                        <div class="contenedor-imagen">
                            <img src="assets/img/codigoqr.JPEG" alt="imagen proyecto porfolio developer web">
                        </div>
                        <div class="descripcion">
                            <span class="titulo">QR Code Generator</span>
                            
                            <p>Generador de Códigos QR</p>
    
                            <a href="http://www.qrcode.luisptapia.com" class="link" target="_blank" >Ir a proyecto <i class="fas fa-angle-right"></i></a>
                        </div>
                    </article>
    
                    <article class="proyecto">
                        <div class="contenedor-imagen">
                            <img src="assets/img/mousike.JPEG" alt="imagen proyecto porfolio developer web">
                        </div>
                        <div class="descripcion">
                            <span class="titulo">Mousike</span>
                            
                            <p> Reproductor de música bajo demanda (Deezer API) </p>
    
                            <a href="http://www.mousike.luisptapia.com" class="link" target="_blank" >Ir a proyecto <i class="fas fa-angle-right"></i></a>
                        </div>
                    </article>
                </div>

            </section>

            <section class="contacto">
                <h2 class="titulo">Contacto</h2>
                <form class="formulario-contacto">
                    <label >
                        <div class="icono">
                            <i class="fas fa-user-alt"></i>
                        </div>
                        <input type="text" placeholder="Nombre">
                    </label>
                    <label >
                        <div class="icono">
                            <i class="fas fa-at"></i>
                        </div>
                        <input type="text" placeholder="Email">
                    </label>
                    <label >
                        <div class="icono">
                            <i class="far fa-envelope"></i>
                        </div>
                        <textarea name="" id="" cols="30" rows="5" placeholder="Mensaje" ></textarea>
                    </label>

                    <button class="btn">Enviar Mensaje</button>
                </form>
            </section>

        </main>
    </div>


    <script src="assets/js/main.js"></script>

</body>

</html>