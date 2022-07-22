
//creamos la constante de la key api
const API_KEY = "df0f7d1d35a21125181dc6ecc10d03ff";


// Recibe la data
const fetchData = position => {
    const {latitude , longitude } = position.coords;
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat={latitude}&lon={longitude}&appid={API_KEY}`)
        .then(response =>  response.json())
        .then(data => console.log(data))
}

const onLoad = () => {
    navigator.geolocation.getCurrentPosition(fetchData);
}