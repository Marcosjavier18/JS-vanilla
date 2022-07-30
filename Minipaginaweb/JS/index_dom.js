import hamburgerMenu from "./menu_hamburgesa.js";
import { digitalClock,alarm }  from "./reloj.js";
import {moveBall,shortcuts} from "./teclado.js";
import countdown from "./cuenta_regresiva.js";
import scrollTopButtom from "./boton_scroll.js";
import darkTheme from "./tema_oscuro.js";
import responsiveMedia from "./objeto_responsive.js";
import responsiveTester from "./prueba_responsive.js";
import userDeviceInfo from "./deteccion_dispositivos.js";
import networkStatus from "./deteccion_red.js";
import webCam from "./deteccion_webcam.js";
import getGeolocation from "./geolocalizacion.js";
import searchFilters from "./filtro_busqueda.js";
import draw from "./sorteo_digital.js";
import slider from "./slider_responsive.js";
import scrollEspia from "./scroll_espia.js";
import smartVideo from "./video_inteligente.js";
import contactFormValidation from "./validaciones_form.js";


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
     "(min-width:1024px)",
     `<a href="https://www.youtube.com/watch?v=F4neLJQC1_E&ab_channel=NPRMusic" target="_blank" rel="noopener">Ver Video</a>`, 
     `<iframe width="560" height="315" src="https://www.youtube.com/embed/2nNUnkVnoTI?start=15" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
     responsiveMedia("gmaps",
     "(min-width:1024px)",
     `<a href="https://goo.gl/maps/NfTfajoyxxtGw5pFA" target="_blank" rel="noopener">Ver Mapa</a>`, 
     `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13618.730966150759!2d-64.18332754999999!3d-31.422866000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a28f63cf2077%3A0xca71e10e4641086b!2sPaseo%20del%20Buen%20Pastor!5e0!3m2!1ses-419!2sar!4v1659009805345!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);
     
     

    responsiveTester("responsive-tester");

    userDeviceInfo("user-device");

    webCam("webcam");

    getGeolocation("geolocation");
    //el primer parametro hace referencia al input que va a buscar y el segundo parametro al tipo de selector en el que va a buscar en el textContent en la etiqueta HTML
    searchFilters(".card-filter",".card");


    draw("#winner-btn", ".player");

    slider();

    scrollEspia();

    smartVideo();

    contactFormValidation();

    });
    
    //esto sirve para hacer una interfaz interactiva.
    
    d.addEventListener("keydown", e =>{
        shortcuts(e);
        moveBall(e,".ball",".stage");
    });
    darkTheme(".dark-theme-btn","dark-mode");

    networkStatus();