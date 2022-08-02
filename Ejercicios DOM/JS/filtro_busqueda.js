const d = document;


export default function searchFilters(input,selector){
    d.addEventListener("keyup", (e) => {
        if(e.target.matches(input)){
            //console.log(e.key);
            //por cada elemento va a buscar
            //console.log(e.target.value);
            
            if(e.key === "Escape"){
                e.target.value = "";
            }

            d.querySelectorAll(selector).forEach((el) => 
                //si esto se cumple, osea lo q escribe el usuario en el input
                //esta es la condicion a evaluar, si es verdadero le remueve el filter, si es false se lo agrega
                el.textContent.toLowerCase().includes(e.target.value)
                    ?el.classList.remove("filter")
                    :el.classList.add("filter")
            );
           }
        });
}