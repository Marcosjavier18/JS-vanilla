// Recibe la data del usuario
const log = position => {
    console.log(position);

}
//Recibimos la posicion del usuario
const onLoad = () => {
    navigator.geolocation.getCurrentPosition(log);
}