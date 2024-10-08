//1. Seleziono gli elementi nella dom
const accendiEl = document.getElementById('accendi');
const offEl = document.getElementById('off');




// 2. Collego un event list al bottone
accendiEl.addEventListener('click', function () {
    offEl.src = 'yellow_lamp.png';
    accendiEl.innerHTML = 'Spegni';   
})

