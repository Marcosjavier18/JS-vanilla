import hamburgerMenu from "./menu_hamburgesa.js";
import { digitalClock,alarm }  from "./reloj.js";
import {moveBall,shortcuts} from "./teclado.js";
import countdown from "./cuenta_regresiva.js";
import scrollTopButtom from "./boton_scroll.js";
import darkTheme from "./tema_oscuro.js";
import responsiveMedia from "./objeto_responsive.js";

const d = document;
d.addEventListener("DOMContentLoaded", (e) =>{
    //solo paso nombres de selectores.
    hamburgerMenu(".panel-btn",".panel",".menu a");

    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");

    alarm("assets/alarma.mp3",
    "#activar-alarma",
    "#desactivar-alarma");

    countdown("countdown",
    "Jul 27, 2022 22:41:00",
     "Arranque del mundial");

     scrollTopButtom(".scroll-top-btn");

     //youtube es el id, media query min-wi
     responsiveMedia("youtube",
     "(min-wi:1024px)",
     "Contenido Movil", 
     "Contenido Escritorio");
     responsiveMedia("gmaps",
     "(min-wi:1024px)",
     "Contenido Movil", 
     "Contenido Escritorio");
    });
    
    //esto sirve para hacer una interfaz interactiva.
    
    d.addEventListener("keydown", e =>{
        shortcuts(e);
        moveBall(e,".ball",".stage");
    });
    darkTheme(".dark-theme-btn","dark-mode");