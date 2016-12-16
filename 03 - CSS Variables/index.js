(function(){

document.addEventListener("DOMContentLoaded", function(event) { 
    function handleUpdate() {
        const suffix = this.dataset.sizing || '';
        document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${suffix}`);        
    }

    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
});
}());