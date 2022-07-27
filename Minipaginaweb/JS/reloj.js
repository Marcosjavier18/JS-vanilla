const d = document;

//utilizamos delegacion de eventos
export function digitalClock(clock,btnPlay,btnStop) {
    let clockTempo; //guarda el valor de setInterval
    d.addEventListener("click", e=>{
        if(e.target.matches(btnPlay)){
          clockTempo =  setInterval(() => {
              let clockHour = new Date().toLocaleTimeString();
              d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`;
            },1000);

        e.target.disabled = true;
        }

        if(e.target.matches(btnStop)){
            clearInterval(clockTempo);
            d.querySelector(clock).innerHTML = null;
            d.querySelector(btnPlay).disabled = false;
        }
    })

}
export function alarm(sound,btnPlay,btnStop) {
    let alarmTempo;
    const $alarm = d.createElement("audio"); 
    $alarm.src = sound;

//como usamos delegacion de eventos:
    d.addEventListener("click", (e) => {
        if(e.target.matches(btnPlay)) {
          alarmTempo =  setTimeout(() => {
            $alarm.play();
          },2000) ;
          e.target.disabled = true ; //desactiva el boton q desencadeno el evento
        }
        if(e.target.matches(btnStop)){
            clearTimeout(alarmTempo);
            $alarm.pause();
            $alarm.currentTime = 0;
            d.querySelector(btnPlay).disabled = false;
        }


    })

}
