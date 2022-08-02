export default function hamburgerMenu(panelBtn,panel,menuLink){  
   const d = document;
   
   
   d.addEventListener("click", e=> {
    // fijate si el objeto que origina el evento coincide con el selector
    if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){ //tiene que haber un espacio despues del template string
        d.querySelector(panel).classList.toggle("is-active");
        d.querySelector(panelBtn).classList.toggle("is-active");

    }
        // No vamos hacer un intercambio
    if(e.target.matches(menuLink)){
        d.querySelector(panel).classList.remove("is-active");
        d.querySelector(panelBtn).classList.remove("is-active");
    }
   })
}