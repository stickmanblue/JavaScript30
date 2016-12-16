(function(){

document.addEventListener("DOMContentLoaded", function(event) { 
    // play sound on key down
    window.addEventListener('keydown', function(e){
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        if (!audio) return;
        
        audio.currentTime=0;
        audio.play();

        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        key.classList.add('playing');
    });

    // remove class after transition happens
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend',function removeTransition(e) {        
        if (e.propertyName !== 'transform') return;
        this.classList.remove('playing');
    }));    
});

}());


