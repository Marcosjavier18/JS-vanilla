const d = document,
 w = window;

export default function responsiveTester(form){
    const $form = d.getElementById(form);
    //vamos a crear una variable vacia , en esta almacenamos el windows.open de la ventana donde vamos abrir nuestro responsive tester,
    //para q cuando le demos cerrar se pueda cerrar, es para trabajar con window.open y window.close, es recomendable guardar la variable de la ventana q abrimos en una variable
    let tester;

    d.addEventListener("submit", e =>{
        if(e.target === $form){
            e.preventDefault();
            //alert("Formulario Enviado");
            //para acceder al formulario
            tester = window.open($form.direccion.value,
                 "tester",
                  `innerWidth=${$form.ancho.value},innerHeight=${$form.alto.value}`);
        
        
        }   

    });

    d.addEventListener("click", (e) => {
        if(e.target === $form.cerrar){
            tester.close();
        }
    })

}