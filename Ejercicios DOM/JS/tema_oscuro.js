const d = document;
const ls = localStorage;


//A los etiquetas que quieran que sean dark mode , hay que ponerle la etiqueta data-dark y cambiar las propiedades en CSS.
//classDark para gnerar el tema oscuro
// cuando queremos aplicar estilos por un tipo de atributos se declara como ("[]") .
export default function darkTheme(btn,classDark){
    const $themeBtn = d.querySelector(btn),
     $selectors = d.querySelectorAll("[data-dark]");    


    // console.log($selectors);

    let moon = "🌙",
        sun = "☀️";

    const lightMode = () =>{ 
        $selectors.forEach((el) => el.classList.remove(classDark));
        $themeBtn.textContent = moon;
        ls.setItem("theme","light");
    }
    
    const darkMode = () => {
        $selectors.forEach((el) => el.classList.add(classDark));
        $themeBtn.textContent = sun;
        ls.setItem("theme","dark");
    }

    d.addEventListener("click", (e) =>{
        if(e.target.matches(btn)){
            // console.log($themeBtn.textContent);
            if($themeBtn.textContent === moon){
                darkMode();
            }
            else{
               lightMode();

            }

        }
    });
    //Vamos a usar localstorage para saber si ya activamos el dark mode o no, sirve para muchas mas cosas
    d.addEventListener("DOMContentLoaded", (e) => {
    //    console.log(ls.getItem("theme"));
        if(ls.getItem("theme") === null){
            ls.setItem("theme","light")
        }

        if(ls.getItem("theme") === "light"){
            lightMode();
        }
        if(ls.getItem("theme") === "dark"){
            darkMode();
        }
       
    })

}