//hay 3 variables de eventos de teclado, keyUp:cuando la soltamos, keyPress:cuando apretamos la tecla, keyDown: al momento que apretamos la tecla
const d = document;
let x = 0 , 
 y = 0; 


export function moveBall(e,ball,stage){
    const $ball = d.querySelector(ball),
     $stage = d.querySelector(stage),
     limitsBall = $ball.getBoundingClientRect(),
     limitsStage = $stage.getBoundingClientRect();
    //  console.log(e.keyCode);
    //  console.log(e.key);
    //  console.log(limitsBall,limitsStage);


    //e.preventDefault();
    //all elemts tienen 
    //Si usamos el prevent default fuera del switch , se nos cancelarian todas las funciones del teclado como el Tab que cambia de input en un formulario, por ejemplo
    switch(e.keyCode){
                case 37:
                    e.preventDefault(); //deshabilitamos los scrolls horizontales y verticales.
                    if(limitsBall.left > limitsStage.left) x--;
                        // move("left");
            break;
            case 38:
                e.preventDefault();
                if(limitsBall.top > limitsStage.top) y--;
        //   move("up"); 
                        break;
                        
                        case 39:
                            e.preventDefault();
                            if(limitsBall.right < limitsStage.right) x++;
        //     move("right");
                            break;
                            
                            case 40:
                                e.preventDefault(); 
                                if(limitsBall.bottom < limitsStage.bottom)   y++;
        //       move("down");
                                break;
                        
                        
                        default:
                            break;
                        }

            $ball.style.transform = `translate(${(x*10)}px , ${(y*10)}px)`;
    }
//la funcion recibe el evento como tal
// con esto mas otra tecla podemos hacer shortcut
export function shortcuts (e){
    // console.log(e.type);
    // console.log(e.key);
    // console.log(`ctrl:${e.ctrlKey}`);
    // console.log(`alt: ${e.altKey}`);
    // console.log(`shift: ${e.shiftKey}`);
    // console.log(e);

    //vamos a decir que cuando el usuario presione la tecla Alt+a se ejecute una alerta
    // si e.key es igual a A y el evento del teclado presion la tecla key al mismo tiempo
    if(e.key === "a" && e.altKey){
        alert("Haz lanzado una alerta con el Teclado");
        
    }
    if(e.key === "c" && e.altKey){
        confirm("Haz lanzado una confirmacion con el Teclado");

    }
    if(e.key === "p" && e.altKey){
        prompt("Haz lanzado un aviso con el Teclado");

    }
}