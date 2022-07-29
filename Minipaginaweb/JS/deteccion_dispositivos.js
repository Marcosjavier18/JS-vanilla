const d = document,
    n = navigator,
    ua = n.userAgent;
export default function userDeviceInfo(id){
    //hace referencia al id  user-device de html
    const $id = d.getElementById(id),
    isMobile ={
        //trata de buscar si en la cadena de texto de usarAgent tiene la palabra android 
        android: () => ua.match(/android/i),
        ios: () => ua.match(/iphone|ipad|ipod/i),
        windows: () => ua.match(/windows phone/i),
        //funcion anonima porque any esta haciendo referencia a las otras 3 propiedades q tiene el objeto
        //si utilizara la arrow function recordemos que el contexto de this no seria isMobile, sino seria el contexto donde se ha creado el isMobile
        any: function () {
            return this.android() || this.ios() || this.windows();
        }
    },
    isDesktop = {
        linux: () => ua.match(/linux/.i),
        mac: () => ua.match(/mac os/.i),
        windows: () => ua.match(/windows nt/.i),
        any: function () {
        return this.linux() || this.mac() || this.windows();
    }
    },
    isBrowser = {
        chrome:() => ua.match(/chrome/i),
        safari:() => ua.match(/safari/i),
        firefox:() => ua.match(/firefox/i),
        opera:() => ua.match(/opera|opera mini/i),
        ie:() => ua.match(/msie|iemobile/i),
        edge:() => ua.match(/edge/i),
        any: function () {
            return (
                this.ie()||
                this.edge()||
                this.chrome()||
                this.safari()||
                this.firefox()||
                this.opera()
            );
        },
    };

    // console.log(ua);
    // console.log(isMobile.android());
    // console.log(isMobile.ios());
    // console.log(isMobile.any());
    // console.log(isDesktop.chrome());

    $id.innerHTML = `
    <ul>
        <li>User Agent: <b>${ua}</b></li>
        <li>Plataforma: <b>${isMobile.any()?isMobile.any():isDesktop.any()}</b></li>
        <li>Navegador: <b>${isBrowser.any()}</b></li>
    </ul>`;

    // CONTENIDO EXCLUSIVO
    if(isBrowser.chrome()){
        $id.innerHTML += `<p><mark>Este contenido solo se muestra en Chrome</mark></p>`
    }
    if(isBrowser.firefox()){
        $id.innerHTML += `<p><mark>Este contenido solo se muestra en Firefox</mark></p>`
    }
    if(isBrowser.ie()){
        $id.innerHTML += `<p><mark>Este contenido solo se muestra en ie</mark></p>`
    }
    if(isDesktop.linux()){
        $id.innerHTML += `<p><mark>Descargar nuestro software para linux</mark></p>`
    }

    if(isDesktop.mac()){
        $id.innerHTML += `<p><mark>Descargar nuestro software para mac</mark></p>`
    }

    if(isDesktop.windows()){
        $id.innerHTML += `<p><mark>Descargar nuestro software para windows</mark></p>`
    }

        /* REDIRECCIONES */
        if(isMobile.android()){
            window.location.href = "https://jonmircha.com";
        }

};