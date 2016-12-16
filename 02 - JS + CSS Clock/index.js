(function(){

document.addEventListener("DOMContentLoaded", function(event) { 
    const hourHand = document.querySelector('.hour-hand');
    const minuteHand = document.querySelector('.min-hand');
    const secondHand = document.querySelector('.second-hand');

    function rotoateHand(el, degrees) {        
        el.style.transform = `rotate(${degrees}deg)`;
    }

    function setTime() {
        const now = new Date();

        const minutesAsPercentOfHour = now.getMinutes()/60;

        rotoateHand(hourHand,   (((now.getHours() + minutesAsPercentOfHour)/12) * 360)+90);
        rotoateHand(minuteHand, (minutesAsPercentOfHour * 360)+90);
        rotoateHand(secondHand, ((now.getSeconds()/60) * 360)+90);
    }

    setInterval(setTime, 1000);
    setTime();
});
}());


