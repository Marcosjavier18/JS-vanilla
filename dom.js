/* **********     Curso JavaScript: 60. WEB APIs - #jonmircha     ********** */
/* https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model */
/* https://developer.mozilla.org/en-US/docs/Mozilla/Gecko/Chrome/API/Browser_API */
/* https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model */

/* console.log(window);
console.log(document);

let texto = "Hola, soy tu amigo y docente digital... Jonathan MirCha";
const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
hablar(texto); */
/*






/* **********     Curso JavaScript: 61. DOM: Introducción - #jonmircha     ********** */
/*
console.log("********** Elementos del Documento **********");
console.log(window.document);
console.log(document);
console.log(document.head); //ETIQUETA HEAD
console.log(document.body); //ETIQUETA BODY
console.log(document.documentElement); //ETIQUETA HTML
console.log(document.doctype); //ETIQUETA DEL DOCTYPE
console.log(document.charset);//ACEDEMOS AL CHARSET
console.log(document.title);//ETIQUETA TITLE
console.log(document.links);//LINK 
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);

//ESTO SIRVE PARA ESCRIBIR EN LA CONSOLA EN TIEMPO REAL CLICKEANDO LOS ELEMENTOS ANTES DE LOS 3 SEGUNDOS EN ESTE CASO
setTimeout(() => {
  console.log(document.getSelection().toString());
}, 2000);
document.write("<h2>Hola Mundo desde el DOM</h2>"); 

*/





/* **********     Curso JavaScript: 62. DOM: Nodos, Elementos y Selectores - #jonmircha     ********** */
//https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType

/*

console.log(document.getElementsByTagName("li")); //NOS DEVUELVE TODOS LOS ELEMENTOS QUE TENGAN POR NOMBRE DE ETIQUETA TENGAN LI
console.log(document.getElementsByClassName("card"));//los devuelve por nombre de clase
console.log(document.getElementsByName("nombre")); //accedemos atravez del atributo nombre
//estos 3 primeros fueron reemplazados por query selector
console.log(document.getElementById("menu"));//los identificadores son unicos.
console.log(document.querySelector("#menu"));//consulta de selector significa,es mas lento que el getElementById. Querryselector solo trae el primer elemento
console.log(document.querySelector("a"))//recibe como parametro un selector valido de CSS, una etiqueta HTML que este dentro de cierto ID
console.log(document.querySelectorAll("a"));//si quiero traer todos los selectores de este tipo
console.log(document.querySelectorAll("a").length);//la longitud del nodo
document.querySelectorAll("a").forEach((el) => console.log(el));//trae todos los enlaces que por cada enlace imprime el coigo html en la consola
console.log(document.querySelector(".card"));
console.log(document.querySelectorAll(".card"));
console.log(document.querySelectorAll(".card")[2]);//como es un conjunto de elementos como un arreglo, podemos acceder a la 3ra tarjeta con [2]
console.log(document.querySelector("#menu li"));
console.log(document.querySelectorAll("#menu li")); 





*/




/* **********     Curso JavaScript: 63. DOM: Atributos y Data-Attributes - #jonmircha     ********** */

    // a partir de html5 tambien el standar nos permite crear nuestro propios atributos, se conoce como data-atribute.
    // para crearlos solo nos pide como declararlo con la palabra "data" delante del nombre
    //
    //
    // accedemos atravez de la notacion .href , .id , .lang , .source , etc..
    //
    //
/*
//accedemos al atributo lang que tiene la etiqueta HTML
console.log(document.documentElement.lang);
//atributo getAttribute nos trae el atributo lang
console.log(document.documentElement.getAttribute("lang"));
//accedemos al atributo .href
console.log(document.querySelector(".link-dom").href);
//obtenemos los datos
console.log(document.querySelector(".link-dom").getAttribute("href"));
//establecemos un nuevo valor al atributo
document.documentElement.lang = "en";
console.log(document.documentElement.lang);
//seteamos un nuevo atributo
document.documentElement.setAttribute("lang", "es-MX");
console.log(document.documentElement.lang);

//vamos a guardar en variables nuestros elementos del dom
//las variables donde vayas a guardarn elementos q hacen referencia de tipo Dom 
//ponerle un $ adelante del nombre
const $linkDOM = document.querySelector(".link-dom");

$linkDOM.setAttribute("target", "_blank");
$linkDOM.setAttribute("rel", "noopener");
//cambiamos la href del atributo
$linkDOM.setAttribute("href", "https://facebook.com");
console.log($linkDOM.hasAttribute("rel"));
$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel"));

//Data-Attributes
//
console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);
//cambiamos el atributo de la variable DOM mirar la consola.
$linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento");
console.log($linkDOM.dataset.description);
//cambiamos la descripcion de la variable DOM
$linkDOM.dataset.description = "Suscríbete a mi canal y comparte";
console.log($linkDOM.dataset.description);
console.log($linkDOM.hasAttribute("data-id"));
$linkDOM.removeAttribute("data-id");
console.log($linkDOM.hasAttribute("data-id"));
/*






/* **********     Curso JavaScript: 64. DOM: Estilos y Variables CSS - #jonmircha     ********** */
//
//
//
//
//
//

/*

    //guardamos en una variable para DOM mi enlace.
const $linkDOM = document.querySelector(".link-dom");
//los estilos tambien son atributos, es mas frecuente ver .style que tener el getAtribute.("style")
console.log($linkDOM.style);

console.log($linkDOM.getAttribute("style"));

//podemos acceder a una propiedad en particular con la notacion del punto "."
//accedemos al background o al color
console.log($linkDOM.style.backgroundColor);
console.log($linkDOM.style.color);

//la ventana tambien tiene una manera de mostrarnos las propiedades CSS, pero ojo
// estas propiedades se conocen propiedades dinamicas, es una parte de las web api


//y otra manera de acceder a ellas es mediante window.getComputertyle , asi :
//accedimos a todas las propiedades disponibles en CSS, que son 335
console.log(window.getComputedStyle($linkDOM));
//accededmos a una sola propiedades en particular , no hace falta aclarar que es el window
console.log(getComputedStyle($linkDOM).getPropertyValue("color"));

//establecemos valores a la variable de DOM
$linkDOM.style.setProperty("text-decoration", "none");
$linkDOM.style.setProperty("display", "block");
// vemos las variables en consola 1 x 1
console.log(getComputedStyle($linkDOM).getPropertyValue("display"));
console.log(getComputedStyle($linkDOM).getPropertyValue("text-decoration"));
//tambien podemos ingresar al valor por medio del . 
$linkDOM.style.width = "50%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = ".5rem";

console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
//las computedstyle tienen q ver con las propiedades que afectan directamente el navegador.
console.log(getComputedStyle($linkDOM));


//Variables CSS - Custom Properties CSS Propiedades configurables
//tenemos que saber en que selector estan las etiquetas. Asique accedemos a la etiqueta HTML
//creamos las variables con referencia en el DOM
const $html = document.documentElement,
  $body = document.body;

  //Creamos variables para cada custom property que declaramos en el selector root de index.html
  //y accedemos a sus propiedades.
  //no tienen el dolar $ porque no son variables del DOM, son normalitas
let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
  varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

  //las mandamos a consola
console.log(varDarkColor, varYellowColor);

  //a las propiedades de la variable del DOM , le asignamos propiedades de otra variable
$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

  //modificamos algunas de las variables, es similar a lo que ya hicimos
  //en el primer parametro del Set, pasamos el nombre de la propiedad y segundo parametro el valor a asignar.
$html.style.setProperty("--dark-color", "pink"); //no se aplica el cambio, se guarda en el html, pero el root es negro.

//ahora tenemos que actualizar la variable para que se aplique, redfinimos la variable declarada arriba
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
//para que el body tome el nuevo color. le seteamos el nuevo color al background
$body.style.setProperty("background-color", varDarkColor); 



/*





*/
/* **********     Curso JavaScript: 65. DOM: Clases CSS - #jonmircha     ********** */
/*
//
//La palabra class es reservada para crear Clases. aca cambia a la hora de acceder, podemos acceder a la cadena texto que tiene escrita el atributo class
//atravez de una propiedad que se llama Class Name,   o podemos acceder a un objeto especial que nos va a devolver un objeto del navegador que se llama
// Dom Token List, que es como si fuese un arreglo, donde cada posicion nos devuelve cada una de las clases que tenga el elemento en cuestino
//
//
//
//



//Creamos una variable del tipo DOM por eso el $, osea nos traemos la primer tarjeta con querySelector
 const $card = document.querySelector(".card");

console.log($card);
console.log($card.className);
console.log($card.classList);
//nos devuelve un boolean en caso de tener o no la clase que le indicamos
console.log($card.classList.contains("rotate-45"));
//agregamos la clase con el add. (la clase seria "rotate-45")
$card.classList.add("rotate-45");
//nos devuelve  un boolean si contiene la clase
console.log($card.classList.contains("rotate-45"));
console.log($card.className);
console.log($card.classList);
  //removemos la clase(rotate-45)
$card.classList.remove("rotate-45");
console.log($card.classList.contains("rotate-45"));
//toggle funciona como palanca,que es lo que significa
//si el elemento tiene la clase,si no la tiene se la agrega
//a card en su lista de clases agregal aca como no la tenia, se le agrego
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
//a card en su lista de clases agregal aca como lo tiene, se le borra
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
//a card en su lista de clases agregal aca la volvemos a agregar
$card.classList.toggle("rotate-45");
  //replace reemplaza, el primer parametro es el que vamos a reemplazar, y el segundo el nuevo elemento, quita la de 45 y agrega la de 135
$card.classList.replace("rotate-45", "rotate-135");
//a card en su lista de clases agregale opacity y la clase sepia
$card.classList.add("opacity-80", "sepia");
//sacamos el efecto 
$card.classList.remove("opacity-80", "sepia");
//aca si no lo tiene, lo agrega.
$card.classList.toggle("opacity-100", "sepia"); 



/*





*/
/* **********     Curso JavaScript: 66. DOM: Texto y HTML - #jonmircha     ********** */
/*
// Aprendemos a interactuar con el contenido textual y HTML de un elemento, de un selector o una etiqueta HTML
//
//
//
//
//
//

// Capturamos en una variable de tipo DOM la referencia del elemento p id="que-es"
const $whatIsDOM = document.getElementById("que-es");

//Preparamos la variable de tipo text
let text = `
    <p>
      El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model</i></b>) es un API para documentos HTML y XML.
    </p>
    <p>
      Éste proveé una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
    </p>
    <p>
      <mark>El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
    </p>
  `;

//Esta propiedad no funciona, se creo para internet explorer
//$whatIsDOM.innerText = text; //al meterlo en un template string esta mapeando todas las tabulaciones, no me reconoce las etiquetas HTML. esta es la caracterista de innerText
//Esta es la propiedad standar
$whatIsDOM.textContent = text; //Agregar contenido textual.
$whatIsDOM.innerHTML = text; //Reemplaza lo que tenga contenido ese nodo e inserta contenido HTML, ahora si se renderiza como si fuese codig HTML
$whatIsDOM.outerHTML = text; 

//Cuando usar innerHTML y cuando textContent:
// Imaginemos una aplicacion de chat, hay chats , en youtube quisieramos agregar una imagen a un comentario, una etiqueta img que apunte a una url que se encuentre en internet
//esto te lo va a bloquear el chat de youtube, porque seguramente el texto que introducimos en el input, esta validado para que no se inyecte codigo html
//sin embargo, hay chats que si lo permiten , si te deja agregar codigo html es porque pega dinamicamente a algo que acepta codigo html
//Cuando solo querramos insertar texto: textContent
// cuando queremos agregar img o archivos html, usamos innerHTML,
// outerHTML, si somos estrictos con la semantica, vemos que tiene un parrafo extra adentro, porque tiene 3 parrafos adentro, para corregirlo usamos
//el outerHTML, lo que hace es que, mientras que innerHTML reemplaza el contenido HTML del elemento DOM del cual lo hemos activado,lo que hace OUTHTML,
//es reemplazar el elemento del DOM por el contenido que tenemos pasandole en este caso "text"

/*





*/
/* **********     Curso JavaScript: 67. DOM Traversing: Recorriendo el DOM - #jonmircha     ********** */
/*
//
// Que es el DOM traversing: es una serie de propiedades del API DOM para poder recorrer, tomando de referencia un nodo,
//poder recorrer diferentes elementos, todos estos metodos son para los elementos, recordemos que hay varios tipos de nodos
// hay alrededor de 12: un nodo son los elementos(HTML) , nodos de texto, de comentario de fragmentos, etc...
//Vamos a utilizar las propiedades que nos sirven para recorrer los elementos.


//Este  DOM traversing es enfocado a los elementos, osea etiquetas HTML, si quisieramos capturar comentarios HTML que dejamos en el documento, 
// tenemos q accederlo con otro tipo de nodo.


//Creamos la variable DOM y seleccionamos el primer elemento de .cards
 const $cards = document.querySelector(".cards");

console.log($cards);
//Devuelve los hijos, que serian las imagenes
console.log($cards.children);
console.log($cards.children[2]); //señala la figura 3
//Retorna el elemento padre , señala al body
console.log($cards.parentElement);
  //Primer hijo
console.log($cards.firstElementChild);
  //Ultimo hijo, seria la q apunta a Nature, la ultima figura
console.log($cards.lastElementChild);
  //Apunta al anterior elemento hermano
console.log($cards.previousElementSibling);
  //Apunta al siguiente elemento hermano
console.log($cards.nextElementSibling);
  //el metodo closest hace: busca al ancestro , al padre mas cercano del selector que nosotros le demos
console.log($cards.closest("div")); //Manda null porque , porque hacia arriba no tiene ningun ancestro del tipo div
console.log($cards.closest("body")); //devuelve body
console.log($cards.children[3].closest("section"));  //mi referencia es el 3 hijo de cards, cual es el ancestral mas cercano
                                                    // y nos devuelve section.cards
/*





 */




/* **********     Curso JavaScript: 68. DOM: Creando Elementos y Fragmentos - #jonmircha     ********** */
/*
//Creamos elementos dinamicamente, un elemento es una etiqueta HTML
//
//



//creamos una variable DOM con el createElement creamos un elemento del DOM con la etiqueta figure
//esta etiqueta figure necesita una etiqueta  img y una etiqueta figcaption. Aca podemos agregar la etiqueta valida de HTML 
//que querramos agregar
//

const $figure = document.createElement("figure"),
  $img = document.createElement("img"),
  $figcaption = document.createElement("figcaption"),
  $figcaptionText = document.createTextNode("Animals"),
  $cards = document.querySelector(".cards"),
  $figure2 = document.createElement("figure");


  //Aca incorporamos las etiquetas creadas dinamicamente al arbol del DOM
  //al nodo figure en su lista de clases le agregamos la clase card. Hay creamos un nodo.
  $figure.classList.add("card");
  //Configuramos el src y el alt de la img
  $img.setAttribute("src", "https://placeimg.com/200/200/animals");
  $img.setAttribute("alt", "Animals");

//Esto sirve para agregar un hijo. sirve para agregar un nodo, en este caso Figure
//aca le agregamos el texto a la imagen
$figcaption.appendChild($figcaptionText);
//Al nodo figura, le agregamos el nodo img
$figure.appendChild($img);
//tambien le agregamos el figcapiton node.
$figure.appendChild($figcaption);
//agregamos la figura al hijo, aunque esta vacia .
$cards.appendChild($figure);

  // ---------- OTRA FORMA DE CREAR UNA FIGURA O NODO

  //usamos la propiedad innerHTML para agregarle el contenido dinamicamente, la desventaja que al hacerlo como texto JS no lo considera como un nodo
$figure2.innerHTML = `
<img src="https://placeimg.com/200/200/people" alt="People">
<figcaption>People</figcaption>
`;
//Aca agregamos la clase card a la figura2 para que tome los estilos
$figure2.classList.add("card");
//le asignamos al nodo card la figura2
$cards.appendChild($figure2);
// FIN FIGURA 2



//Tenemos un arreglo con las estaciones
const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
  $ul = document.createElement("ul"); //creamos una etiqueta dinamica llamada ul

  //vamos a poner un titulo y separarnos del nodo de tarjetas
document.write("<h3>Estaciones del Año</h3>");
document.body.appendChild($ul); // Se lo vamos agregar al elemento padre "body"

//Al arreglo estaciones le ejecutamos un forEach y para cada elemento haga lo siguiente: cree una variable Li DOM,y luego
//Accedemos a la propiedad textContent que solo necesitamos texto para la Li, y despues asignamos el valor del elemento que recorre el forEach
//Le decimos que a la ul le agregue dicho elemento. Esto genera la lista de estaciones del año
estaciones.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $ul.appendChild($li);
});

      //--------- CREAMOS OTRA LISTA CON LOS CONTINENTES y hacemos lo mismo de darriba. solo que con innertHTML no creamos el nodo. Solo que en cada iteracion agregamos nuevo contenido 
      //a la propiedad innerHTML de la lista numero2
const continentes = ["África", "América", "Asia", "Europa", "Oceanía"],
  $ul2 = document.createElement("ul");

document.write("<h3>Continentes del Mundo</h3>");
document.body.appendChild($ul2);
$ul2.innerHTML = "";  //con el forEach lo recorremos.
continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`));  // += concatenar, se empieza la inicializacion como vacia para q se agreguen



//En lugar de estar a cada iteracion estar pegandole al dom, en el DOM podemos crear fragmentos dinamicos,
//FRAGMENTOS:  son variables que se crean dinamicamente, y a ese fragmento del DOM podemos estar iterandolo, a cada iteracion que le tengamos
//que estar agregando un nuevo elemento, en lugar de estar pegandole al DOM directo, le pegamos a ese fragmento del DOM que esta en memoria, y una vez
//que ya tengamos los elementos cargados en el fragmento, ahi hacemos 1 sola insercion al DOM con todos los registros que nuestra peticion haya capturado.



const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ],
  //creamos una tercera UL
  $ul3 = document.createElement("ul"),
  //aca creamos otra variable que se llama fragment, que crea el fragmento de un documento
  $fragment = document.createDocumentFragment();


    //Como son fragmentos del DOM, no  podemos usar innerHTML, tenemos que crear nodos
meses.forEach((el) => { //aca le decimos que por cada vuelta, cree nuestro documento de Li 
  const $li = document.createElement("li");//A este li le agregamos este textCont le agregamos el elemento , en este caso el mes
  $li.textContent = el; //Y al final lo agregamos al nodo fragmento el apendchild
  $fragment.appendChild($li);
});

//Aca escribimos el documento
document.write("<h3>Meses del Año</h3>");
$ul3.appendChild($fragment); //Aca a la UL3 le agregamos como hijo el fragmento
document.body.appendChild($ul3);  //Aca decimos que al body le agregamos el hijo ul3



*/

/*





*/
/* **********     Curso JavaScript: 69. DOM: Templates HTML - #jonmircha     ********** */
/*
//La etiqueta template , es como un modelo a seguir. en el cual nuestra estructura es el contenido HTML que quieras mediante JS se convierta en dinamico
//es otra forma de poder interactuar con el DOM, ahora aprenderemos con los fragmentos y los templates.
//La etiqueta template es una etiqueta que no se visualiza, se puede ver en la pestaña Elements pero no se visualiza
//
//


      //creamos una variable donde almacenamos que apunte a card y otra que apunte al template
 const $cards = document.querySelector(".cards"),
  $template = document.getElementById("template-card").content, //accedemos al contenido de template card
  $fragment = document.createDocumentFragment(), //creamos un fragmento para no estar pegandole cada vez que se agregue una nueva tarjeta,
  cardsContent = [   //creamos la variable que se llama contenido de carta
    {
      title: "Tecnología",
      img: "https://placeimg.com/200/200/tech",
    },
    {
      title: "Animales",
      img: "https://placeimg.com/200/200/animals",
    },
    {
      title: "Arquitectura",
      img: "https://placeimg.com/200/200/arch",
    },
    {
      title: "Gente",
      img: "https://placeimg.com/200/200/people",
    },
    {
      title: "Naturaleza",
      img: "https://placeimg.com/200/200/nature",
    },  
  ];      //aca ya tenemos el contenido

cardsContent.forEach((el) => {  //por cada elemento que trae card content- 
  //aca asignamos los atributos y demas
  $template.querySelector("img").setAttribute("src", el.img); //tomamos como la variable template y solo navegamos por su estructura del DOM, aca encuentra una img y le establecemos el valor nuevo
  $template.querySelector("img").setAttribute("alt", el.title);
  $template.querySelector("figcaption").textContent = el.title; //le ponemos el titulo a la tarjeta.

  let $clone = document.importNode($template, true); //aca clonamos la estructura del nodo (variable de referencia osea de que me voy a basar, al ponerle true copia toda la estructura)

  $fragment.appendChild($clone);  //al fragmento le agregamos el clon
});

$cards.appendChild($fragment); //al elemento cards le agregamos el fragmento, con esto le hacemos una sola insercion al DOM y no tenemos que interactuar con el cada vez que recorre el forEach las tarjetas


*/
/*





*/
/* **********     Curso JavaScript: 70. DOM: Modificando Elementos (Old Style) - #jonmircha     ********** */
/*
//
//
//
//
//
//
//
//
//
//


const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure"),
  $cloneCards = $cards.cloneNode(true); //con el true clonamos todo

$newCard.innerHTML = `
  <img src="https://placeimg.com/200/200/any" alt="Any">
  <figcaption>Any</figcaption>
`;
$newCard.classList.add("card");

// $cards.replaceChild($newCard, $cards.children[2]);  //Reemplazamos al tarjeta 3 por otra imagen cualquiera
//$cards.removeChild($cards.lastElementChild);
$cards.insertBefore($newCard, $cards.firstElementChild); //Se inserta antes de un nodo que tomamos como referencia.
document.body.appendChild($cloneCards); //lo agrega al final con el appendChild.
/*


*/



/* **********     Curso JavaScript: 71. DOM: Modificando Elementos (Cool Style) - #jonmircha     ********** */
/*
3 METODOS PARA INSERTAR ELEMENTOS:
.insertAdjacent...
  .insertAdjacentElement(position, el) agrega elemento
  .insertAdjacentHTML(position, html) seria como innerHTML, agrega HTML
  .insertAdjacentText(position, text)

Posiciones:
  beforebegin(hermano anterior)
  afterbegin(primer hijo)
  beforeend(ultimo hijo)
  afterend(hermano siguiente)
*/

/*
// tomamos como referencia la seccion de tarjeta,
 const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure");


  //Esto representa el contenido html de la figura, la creamos en una nueva variable.
let $contenCard = `   
  <img src="https://placeimg.com/200/200/any" alt="Any">
  <figcaption></figcaption>  
`;
$newCard.classList.add("card"); //lo agregamos

$newCard.insertAdjacentHTML("afterbegin", $contenCard); //la agregaria como primer hijo
//$cards.insertAdjacentElement("beforeend", $newCard);  //insertamos la carta como ultimo hijo detrno de la box
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any");  //Agregamos el texto a la imagen
//con afterend se agrega como hermano posterior, afuera del cuadro.


$cards.prepend($newCard); //preprend seria como hijo primero
$cards.append($newCard);
$cards.before($newCard);
$cards.after($newCard);


/*





*/
/* **********     Curso JavaScript: 72. DOM: Manejadores de Eventos - #jonmircha y Curso JavaScript: 73. DOM: Eventos con Parámetros y Remover Eventos - #jonmircha     ********** */
/*
Los eventos son los mecanismos que tenemos en JavaScript para controlar las acciones del usuario y definir el comportamiento del documento en cierto momento o cuando se cumplan ciertas condiciones.

Las funciones que se ejecutan en un evento se llaman Event Handler (Manejador de Eventos).

/////////////// https://developer.mozilla.org/en-US/docs/Web/Events



 function holaMundo() {
  alert("Hola Mundo");
  console.log(event);
}

//("")
//vamos a crear una funcion que reciba como parametro el nombre a saludar
function saludar(nombre = "Desconocid@") { //Si no le pasamos parametro, sale como Desconocido
  alert(`Hola ${nombre}`); //imprimimos Hola nombre de la persona
  console.log(event);
}


//creamos las variables y llamamos a la etiqueta
const $eventoSemantico = document.getElementById("evento-semantico"),
   $eventoMultiple = document.getElementById("evento-multiple");//,
   $eventoRemover = document.getElementById("evento-remover");


  //la limitante es que una vez que definimos el evento semantico, solo puede ejecutar 1 funcion
$eventoSemantico.onclick = holaMundo; //le agregamos como un prototipo, aca ya tenemos la funcion definida previamente
//aca declaramos pero con function arroy y funcion anonima, 
//toda funcion que se cconvierta en un manejador de evento, osea que se ejecuta en algun momento en un evento, no puede recibir parametros, el unico parametro que recibe es el evento en si
$eventoSemantico.onclick = function (e) {  //para simplificar la palabra event, usamos el parametro "e"
  alert("Hola Mundo Manejador de Eventos Semántico");
  console.log(e);
  //console.log(event); //event es una palabra reservada, es lo mismo que la linea de arriba con (e)
};


//addEventListener puede recibir varios parametros, primero el nombre del evento y luego la funcion que se ejecuta al evento asociado
//con esta declaracion, desaparece el ON antes del evento
$eventoMultiple.addEventListener("click", holaMundo);
$eventoMultiple.addEventListener("click", (e) => { //ponemos una funcion anonima (e)
  alert("Hola Mundo Manejador de Eventos Múltiple");
  console.log(e);
  console.log(e.type);
  console.log(e.target);
  console.log(event);
});

//Creamos una funcion anonima , que la funcion anonima sea la manejadora de evento y directamente ejecutar la funcion saludar.
//la arrow function es la manejadora del evento.
//ahora podemos ejecutar cuantas veces querramos la funcion "saludar"
//asi es como le podemos pasar parametros a un evento sin la limitacion de los manejadores de eventos.
$eventoMultiple.addEventListener("click", () => {
  saludar();
  saludar("Marcos");
});


//Tambien podemos eliminar evento de un elemento.
//
//
// remove event listener. remueve el evento asocido
// trabajamos con el evento dobleclick
//para removerla, tiene que ser una funcion declarada. no puede ser anonima
const removerDobleClick = (e) => {
  alert(`Removiendo el evento de tipo ${e.type}`); //trae el evento que se ejecuta.
  console.log(e);
  $eventoRemover.removeEventListener("dblclick", removerDobleClick); //el segundo parametro es la misma funcion.
  $eventoRemover.disabled = true; //eventoRemover es el boton, 
};

$eventoRemover.addEventListener("dblclick", removerDobleClick); //aca solo llamamos el evento con la funcion para removerlo

*/
/*





*/
/* **********     Curso JavaScript: 74. DOM: Flujo de Eventos (Burbuja y Captura) - #jonmircha     ********** */

/*Una burbuja es un flujo de eventos que cuando un evento ocurre en un elemento, primero ejecuta el controlador en sí mismo, luego en su padre, y luego en todos sus ancestros.
//Básicamente se mueve hacia arriba desde el elemento más interno al elemento más externo.
//El principio de captura es completamente opuesto a la burbuja.
//En la captura de eventos, los eventos se propagan desde el elemento más externo al elemento más interno. La captura de eventos a veces se llama goteo de eventos.
Cuando utilizamos javascript, a menudo utilizamos addEventListener(), donde normalmente pasamos dos parámetros
*)   event
*)   Callback function
La función addEventListener() también acepta un tercer argumento oculto, useCapture, que acepta un valor booleano. Este parámetro useCapture se establece por defecto a false.
//
//
*/


/*
Si no se especifica el parámetro boolean, el valor por defecto es false.
  Si el boolean es falso se ejecuta la fase de burbuja (ir del elemento más interno al más externo <body>)
  Si el boolean es verdadero se ejecuta la fase de captura (ir del elemento más externo <body> al más interno)
*/

/*
//Variable  del DOM que traigan todos los div de la section eventos-flujo
const $divsEventos = document.querySelectorAll(".eventos-flujo div");



//recibe como parametro el evento, y manda a console un mensaje con el nombre y quien origino el click
function flujoEventos(e) {
  console.log(
    `Hola te saluda ${this.className}, el click lo originó ${e.target.className}`
  );
}
//esto va a ser un node list con los 3 divs
console.log($divsEventos);


//imaginemos que en una interfaz dinamica, esa botonera se forma a partir de un catalogo que tenemos en la base de datos, tenemos que ir a consultar la base de datos
//imprimir un boton por cada registro que venga de la base de datos y a ese boton asignarle un boton dinamicamente un evento, para esto deberiamos asignarle dinamicamente el evento a todos los elementos
//
//
//
//Lo que vamos hacer es : es con el metodo forEach asignamos el eventListener de manera dinamica
// el div es el elemento atributo.
$divsEventos.forEach((div) => {
      //Fase de burbuja,  los propaga de dafuera hacia adentro
  //div.addEventListener("click", flujoEventos);
  //div.addEventListener("click", flujoEventos, false);
  //Fase de captura , los propaga de afuera para adentro.
  //div.addEventListener("click", flujoEventos, true);
  div.addEventListener("click", flujoEventos, { // ESTA CONFIG ES DE BURBUJA......asociamos el evento click y llamamos a la funcion flujoeventos
    capture: false,
    once: true,
  });
}); 

*/
/*





*/
/* **********     Curso JavaScript: 75. DOM: stopPropagation & preventDefault - #jonmircha     ********** */
//Detenemos la propagacion, hay veces que no queremos que el evento se propague a los elementos hijos o padres y solamente se ejecute 1 vez
//la funcion manejadora
// Tambien hay elementos del DOM que tienen comportamientos por default , por ejemplo pensemos en el boton submit q tiene un formulario, sin necesidad q lo programemos ->
// al momento que apretamos submit, ese formulario se procesa, 
//otro ejemplo cuando estamos controlano el scroll con las flechas o mouse, es el comportamiento que tiene por default las flechas del teclado
//otro comportamiento que tienen los enlaces es que apenas los clickeas se abren en una ventana nueva. 
//
//
//asi prevenimos las acciones que tiene por defecto el DOM
/*
const $divsEventos = document.querySelectorAll(".eventos-flujo div"),
  $linkEventos = document.querySelector(".eventos-flujo a");

function flujoEventos(e) {
  console.log(
    `Hola te saluda ${this.className}, el click lo originó ${e.target.className}`
  );
  e.stopPropagation(); //saca el cuadrito
}

console.log($divsEventos);

$divsEventos.forEach((div) => {
  //Fase de burbuja
  div.addEventListener("click", flujoEventos);
  //div.addEventListener("click", flujoEventos, false);
  //Fase de captura
  //div.addEventListener("click", flujoEventos, true);
  //div.addEventListener("click", flujoEventos, {
    //capture: false,
    //once: true,
  //});
});


$linkEventos.addEventListener("click", (e) => {
  alert("Hola soy tu amigo y docente digital... Jonathan MirCha"); // si lo dejamos asi, nos manda un mensaje de alerta. Es una solicitud a una api
   e.preventDefault(); 
   e.stopPropagation();
}); 





*/

/* **********     Curso JavaScript: 76. DOM: Delegación de Eventos - #jonmircha     ********** */
//ES LA FORMA MAS OPTIVA DE TRABAJAR CON EVENTOS EN JS
//Este concepto es MUY importante, optimiza mucho a nivel de recursos de memoria las aplicaciones de JS
// la delegacion de los eventos no consiste en otra cosa que : 
//
//recordemos que anteriormente a un click le delegamos 3 eventos. esto no es lo optimo. porque aca generamos un listener por cada evento que se genera.
// Cuando en realidad podriamos tener el evento asignado a un elemento padre superior y a partir de ahi simplemente buscando el selector que coincida para ver quien genero el evento
//desencadenar la programacion que quiera al momento del evento, por ejemplo en un formulario de 30 inputs y cada uno tenga validaciones, en lugar de trabajar el evento onchange, onblur,onfocus
//el evento en cuestion en vez de asignarle  a los 30 input, se lo asignamos al formulario como tal o se lo asignamos al nodo
//
//
/*
 function flujoEventos(e) {
  console.log(
    `Hola te saluda ${this} el click lo originó ${e.target.className}`
  );
  e.stopPropagation();
}
//mejora el rendimiento de la aplicacion , le asignamos una sola vez al evento click , lo demas lo programamos con if evaluandolo que coincida el selector con el que queremos que el elemento aplqieu la programacion
// otro detalle importante, esta tecnica es muy importarnte en peticiones asincronas, cuando usamos AJAX o fetch y generamos elementos dinamicos
//
document.addEventListener("click", (e) => {
  if (e.target.matches(".eventos-flujo div")) {
    flujoEventos(e);
  }

  if (e.target.matches(".eventos-flujo a")) {
    alert("Hola soy tu amigo y docente digital... Jonathan MirCha");
    e.preventDefault();
    //e.stopPropagation();
  }
}); 
/*





*/
/* **********     Curso JavaScript: 77. BOM: Propiedades y Eventos - #jonmircha     ********** */
/*
 //EL BOM no es mas que metodos o objetos que cuelgan directamente de windows, lo de arriba lo veniamos trabajando con document,que es el objeto JS que representa el arbol de nodos de elementos HTML.

El evento DOMContentLoaded es disparado cuando el documento HTML ha sido completamente cargado y parseado, sin esperar hojas de estilo, imágenes y subtramas para finalizar la carga.

El evento load se dispara cuando se ha detectado la carga completa de la página.

Es un error frecuente usar load cuando DOMContentLoaded es mucho más apropiado.

Peticiones asíncronas pausan el parseo del DOM.
*/

/*

//Nos conviene ejecutar un console.clear antes de cada reposicionamiento
window.addEventListener("resize", (e) => {
  console.clear();
  console.log("********** Evento Resize **********");
  console.log(window.innerWidth); //representa la parte del viewport, saca la parte de la ventana la caja de herramientas, titulos etc
  console.log(window.innerHeight);
  console.log(window.outerWidth); //ventana del navegador
  console.log(window.outerHeight);
  console.log(e);
}); 

//Control de desplazamiento del scroll , si movemos el scroll cambian los valores.
window.addEventListener("scroll", (e) => {
  console.clear();
  console.log("********** Evento Scroll **********");
  console.log(window.scrollX);
  console.log(window.scrollY);
  console.log(e);
});

// Por ejemplo, dentro de la pantalla tambien podemos identificar en que coordenada empieza a dibujarse la ventana del navegador.
// aca hacemos que esas propiedades se carguen en un evento que tiene la ventana y se llama load -> este evento se ejecuta cuando la ventana del navegador termina de cargar
// 
window.addEventListener("load", (e) => {
  console.log("********** Evento Load **********");
  console.log(window.screenX);
  console.log(window.screenY);
  console.log(e);
});

// carga mucho mas rapido que el "load" , esto carga cuando el DOM esta listo.
//sobretodo cuando estamos haciendo peticiones asincronas
document.addEventListener("DOMContentLoaded", (e) => {
  console.log("********** Evento DOMContentLoaded **********");
  console.log(window.screenX);
  console.log(window.screenY);
  console.log(e);
}); 


*/
/*





*/
/* **********     Curso JavaScript: 78. BOM: Métodos - #jonmircha     ********** */
// SE CENTRAN EN CARAACTERISTICAS Y PROPIEDADES QUE COMO TAL TIENE EL OBJETO WINDOWS. objeto global de nuestro navegador
//ver clase de aler confirm promt clase 30. 
//window.alert("Alerta");
//window.confirm("Confirmación"); //puede validar a true o false
//window.prompt("Aviso"); //Nos agrega un input en el cual el usuario puede escribir algo, y si guardamos el promt en una variable guardamos lo que el usuario edsta digitando
/*
//creamos los 3 botones en HTML y creamos las variables DOM
const $btnAbrir = document.getElementById("abrir-ventana"),
  $btnCerrar = document.getElementById("cerrar-ventana"),
  $btnImprimir = document.getElementById("imprimir-ventana");


  //para que se cierre la ventana emergente que abrimos, tenemos que clear la variable ventana, entonces se abre como otra pestaña y luego la tenemos que cerrar con la otra funcion.
let ventana;

//asiganmos los 3 metodos a cada uno de los botones
$btnAbrir.addEventListener(
  "click",
  (e) => (ventana = window.open("https://jonmircha.com"))
);

$btnCerrar.addEventListener("click", (e) => {
  //window.close();
  ventana.close();
});

$btnImprimir.addEventListener("click", (e) => window.print()); 

*/

/*





*/
/* **********     Curso JavaScript: 79. BOM: Objetos: URL, Historial y Navegador - #jonmircha     ********** */
//url : mejor conocido como location
// historial: guarda cuantas paginas se puede volver hacia atras o hacia adelante, el almacenamiento del historial donde me encuentro
//
//
//
//


/*

 console.log("********** Objeto URL (location) **********");
console.log(location);
console.log(location.origin);
console.log(location.protocol);
console.log(location.host);
console.log(location.hostname);
console.log(location.port);
console.log(location.href);
console.log(location.hash);
console.log(location.search);
console.log(location.pathname);
//location.reload();
/*
console.log("********** Objeto Historial (history) **********");
console.log(history);
console.log(history.length);
//history.forward(1); //sirven para navegar para atras o hacia adelante-
//history.go(-3);
//history.back(2);
*/

//Es muy importante porque 

console.log("********** Objeto Navegador (navigator) **********");
console.log(navigator);
console.log(navigator.connection);
console.log(navigator.geolocation);
console.log(navigator.mediaDevices);
console.log(navigator.mimeTypes);
console.log(navigator.onLine);
console.log(navigator.serviceWorker);
console.log(navigator.storage);
console.log(navigator.usb);
console.log(navigator.userAgent); 
