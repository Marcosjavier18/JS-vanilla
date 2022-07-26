const d = document;


export default function scrollEspia(){
    const $sections = d.querySelectorAll("section[data-scroll-spy");


    //funcion callback
    const cb = (entries) => {
        //console.log("entries",entries);

        entries.forEach(entry => {
            //console.log("entry",entry);

            const id = entry.target.getAttribute("id");
           // console.log(id);

            if(entry.isIntersecting){
                //cuando un elemento ya tenga el valor de true, busco el primer selector valido que corresponda con este selector
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add("active");
            }else{
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove("active");

            }
        })

    }

    const observer = new IntersectionObserver(cb,{
        // root
        // rootMargin : "-250px",
        threshold: [0.5 , 0.75],
    });
  //  console.log("oberserver", observer);

    $sections.forEach( el => observer.observe(el));

}