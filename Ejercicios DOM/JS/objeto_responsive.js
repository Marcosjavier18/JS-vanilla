
const d = document,
    w = window;

//mq = media query
export default function responsiveMedia(id,mq, mobileContent, desktopContent){
    let breakpoint = w.matchMedia(mq);
    
    const responsive = (e) => {
        if(e.matches){ //cuando la media query se cumpla devuelve true, sino false
            d.getElementById(id).innerHTML = desktopContent;
        }
        else{
        d.getElementById(id).innerHTML = mobileContent;
        }
        
        // console.log("MQ",breakpoint,e.matches);
    };

    breakpoint.addEventListener("change",responsive);
    responsive(breakpoint);
}