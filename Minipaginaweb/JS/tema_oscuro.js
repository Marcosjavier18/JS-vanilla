const d = document;

//classDark para gnerar el tema oscuro
// cuando queremos aplicar estilos por un tipo de atributos se declara como ("[]") .
export default function darkTheme(btn,classDark){
    const $themeBtn = d.querySelector(btn),
     $selectors = d.querySelectorAll("[data-dark]");    


    console.log($selectors);

    let moon = "🌙",
        sun = "☀️";

    d.addEventListener("click", (e) =>{
        if(e.target.matches(btn)){
            console.log($themeBtn.textContent)
            if($themeBtn.textContent === moon){
                $selectors.forEach((el) => el.classList.add(classDark));
                $themeBtn.textContent = sun;
            }
            else{
                $selectors.forEach((el) => el.classList.remove(classDark));
                $themeBtn.textContent = moon;

            }

        }
    })

}