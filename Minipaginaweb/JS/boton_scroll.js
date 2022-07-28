const d = document, 
    w = window;

export default function scrollTopButtom(btn){
    // lo primero q tenemos q hacer antes de dar click, es detectar el scroll y a que distancia de scrolltop, osea vertical,
    //ese elemento se muestre
    // hay 2 propiedades que muestran a que distancia se activa el scroll
    const $scrollBtn = d.querySelector(btn);

    
    w.addEventListener("scroll", e => {

        let scrollTop = w.pageYOffset ||d.documentElement.scrollTop;

        if(scrollTop > 600){
            $scrollBtn.classList.remove("hidden")
        }
        else{
            $scrollBtn.classList.add("hidden")
            
        }


        console.log(w.pageYOffset, d.documentElement.scrollTop);
    });
    d.addEventListener("click", e => {
        if(e.target.matches(btn)){
            w.scrollTo({
                behavior:"smooth",
                top:0,
                left:0
            })
        }
    })
}