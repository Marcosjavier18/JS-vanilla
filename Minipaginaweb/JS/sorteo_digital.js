const d = document;

//draw es sorteo
export default function draw(btn,selector){
    const getWinner = (selector) => {
        const $players = d.querySelectorAll(selector),
          random = Math.floor(Math.random() * $players.length),
            winner = $players[random];
                //textContent para extraer el contenido que esta en una lista
                
                //console.log($players,random,winner);
                
                return `El ganador del sorteo : ${winner.textContent}`;
    }

    d.addEventListener("click", e =>{
        //si el click fue originado por el boton q viene en la variable btn, activas el click
        if(e.target.matches(btn)){
            let result = getWinner(selector);
            alert(result);
            console.log(result);
    }
    })
}

// const getWinnerComment = (selector) => {
//     const $players = d.querySelectorAll(selector),
//       random = Math.floor(Math.random() * $players.length),
//         winner = $players[random];
            
//             return `El ganador del sorteo : ${winner.textContent}`;
// }
// getWinnerComment("ytd-comment-thread-renderer");