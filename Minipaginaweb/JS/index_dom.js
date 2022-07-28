import hamburgerMenu from "./menu_hamburgesa.js";
import { digitalClock,alarm }  from "./reloj.js";
import {moveBall,shortcuts} from "./teclado.js";
import countdown from "./cuenta_regresiva.js";
import scrollTopButtom from "./boton_scroll.js";
import darkTheme from "./tema_oscuro.js";

const d = document;
d.addEventListener("DOMContentLoaded", (e) =>{
    //solo paso nombres de selectores.
    hamburgerMenu(".panel-btn",".panel",".menu a");
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
    alarm("assets/alarma.mp3","#activar-alarma","#desactivar-alarma");
    countdown("countdown",
    "Sep 15, 2022 22:41:00",
     "Arranque del mundial");
     scrollTopButtom(".scroll-top-btn");
     darkTheme(".dark-theme-btn","darkMode");
});

//esto sirve para hacer una interfaz interactiva.

d.addEventListener("keydown", e =>{
    shortcuts(e);
    moveBall(e,".ball",".stage");
});