let mins = document.querySelector('.mins');
let seconds = document.querySelector('.seconds');
let start = document.querySelector('.start');
let reset = document.querySelector('.reset');
let stop = document.querySelector('.stop');

start.addEventListener('click', startWatch)
// reset.addEventListener('click',)
// stop.addEventListener('click',)

let minutesInitial = 0;
let secondsInitial = 0;

function startWatch(){

    let secondsSet = setInterval(secondsBegin,1000);

        function secondsBegin(){
        secondsInitial++;
        seconds.innerHTML=secondsInitial;
        }

    let minsSet = setInterval(minsBegin,60000)
        function minsBegin(){
            minutesInitial++;
            mins.innerHTML=minutesInitial;
        }

}

