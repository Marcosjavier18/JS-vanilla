const d = document , w = window , n = navigator;

//Esta funcion podria recibir el selector como parametro para saber a que formulario va a observar,pero..
//.. el codigo lo vamos a incluir en el mismo codigo.

export default function contactFormValidation(){
    const $form = d.querySelector(".contact-form"),
        $inputs = d.querySelectorAll(".contact-form [required]");

        // console.log($inputs);


        $inputs.forEach( input => {
            const $span = d.createElement("span");
            //le asignamos input.name para q sea unico
            $span.id = input.name;
            // le ponemos el title de input, que contiene el error
            $span.textContent = input.title;
            $span.classList.add("contact-form-error","none");
            input.insertAdjacentElement("afterend",$span); 
        });

        d.addEventListener("keyup", e => {
            if(e.target.matches(".contact-form [required]")){
                let $input = e.target,
                pattern = $input.pattern || $input.dataset.pattern ;

                //console.log($input, pattern)
                if(pattern && $input.value !== ""){
                    // console.log("El input tiene patron");
                    let regex = new RegExp(pattern);
                    // $input = e.target...
                    return !regex.exec($input.value)
                    ? d.getElementById($input.name).classList.add("is-active")
                    : d.getElementById($input.name).classList.remove("is-active")
                }
                if(!pattern){
                    // console.log("El input NO tiene patron");
                    return $input.value === ""
                    ? d.getElementById($input.name).classList.add("is-active")
                    : d.getElementById($input.name).classList.remove("is-active")
                }
            }
        });


    d.addEventListener("submit", (e) =>{
        //previene la accion del formulario, sino procesa los datos
        // e.preventDefault();
        alert("Enviando Formulario")

        const $loader = d.querySelector(".contact-form-loader"),
            $response = d.querySelector(".contact-form-response");

        $loader.classList.remove("none");
        
        setTimeout(() =>{
            $loader.classList.add("none");
            $response.classList.remove("none");
            //se resetea el formulario
            $form.reset();

            setTimeout(()=> $response.classList.add("none"),3000);

        },3000);

    })


}