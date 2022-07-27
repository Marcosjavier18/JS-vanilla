const d = document
export default function countdown(id,limitDate,finalMessage) {
    const $countdown = d.getElementById(id),
    countdownDate = new Date(limitDate).getTime();


    let countdownTempo = setInterval(() => {
        let now = new Date().getTime(),
            limitTime = countdownDate - now,
            days,
            hours,
            minutes,
            seconds;

         // $countdown.innerHTML = `<h3>Faltan: ${days} dias ${hours} horas ${minutes} minutos ${seconds} segundos </h3>`; 

        console.log(countdownDate, now ,limitTime);
        
    },1000);


}