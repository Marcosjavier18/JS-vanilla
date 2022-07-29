const d = document,
    n = navigator;

export default function getGeolocation(id){
    const $id = d.getElementById(id),
     options = {
        //le decimos que trate de hacer la mejor lectura posible.
        enableHighAccuracy: true,
        //cuanto tiempo tarda en encontrar la respuesta
        timeout: 5000,
        // para que no se guarden en cache las lecturas
        maximumAge:0
     };

    const success = position =>{
        // del objeto position traeme solo las coordenadas
        let coords = position.coords;
        console.log(position);
        
        $id.innerHTML = `<p>Tu posicion actual es:</p>
                            <ul>
                            <li>Latitud <b> ${coords.latitude}</b></li>
                            <li>Longitud <b> ${coords.longitude}</b></li>
                            <li>Precision <b> ${coords.accuracy}</b>metros </li>
                            </ul>
                            <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},3z"
                            target="_blank" rel="noopener">Ver en google Maps</a>
                            `; 

    };

    const error = (err) => {
        $id.innerHTML = `<p><mark>Error ${err.code}:${err.message}</p></mark>`
        console.log(`Error ${err.code}:${err.message}`);
    };

     n.geolocation.getCurrentPosition(success, error, options);
     //hay otra que se llama WatchPosition que nos dice si la ubicacion ha tenido algun cambio
}