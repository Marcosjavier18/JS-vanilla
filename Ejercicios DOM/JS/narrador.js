const d = document , w = window , n = navigator;

export default function speechReader(){
    const $speechSelect = d.getElementById("speech-select"),
        $speechTextarea = d.getElementById("speech-text"),
          $speechBtn = d.getElementById("speech-btn"),
          //API ACA ABAJO
          speechMessage = new SpeechSynthesisUtterance();

        //   console.log(speechMessage);

        let voices = [];

        d.addEventListener("DOMContentLoaded", (e) => {
            // console.log(w.speechSynthesis);
            // console.log(w.speechSynthesis.getVoices());
           
            //llama a las voces
            w.speechSynthesis.addEventListener("voiceschanged", (e) => {
                // console.log(e)
                voices = w.speechSynthesis.getVoices();
                // console.log(voices);

                //por cada voz que tenga en este arreglo, vas a crear dinamicamente una etiqueta option con crear elemento

                voices.forEach((voice) => {
                    const $option = d.createElement("option");
                    $option.value = voice.name;
                    $option.textContent = `${voice.name} - ${voice.lang}`;

                    $speechSelect.appendChild($option);
                });

            })
        });

        d.addEventListener("change",e=>{
            //hacemos delegacion de evento y en el "click" tambien
            if(e.target === $speechSelect){
                speechMessage.voice = voices.find(voice =>  voice.name === e.target.value);
            }

        });

        d.addEventListener("click",e=>{
            if(e.target === $speechBtn){
                speechMessage.text = $speechTextarea.value;
                w.speechSynthesis.speak(speechMessage);
            }
        })
}