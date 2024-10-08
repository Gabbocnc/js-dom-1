//1. Seleziono gli elementi nella dom
const accendiEl = document.getElementById('accendi');
const offEl = document.getElementById('off');
const onEl = document.getElementById('on');
const spegniEl = document.getElementById('spegni');



// 2. Collego un event list al bottone
accendiEl.addEventListener('click', function () {
    offEl.src = onEl.src;
    accendiEl.innerHTML = 'Spegni'
})

spegniEl.addEventListener('click', function () {
    onEl.src = offEl.src;
    spegniEl.innerHTML = 'Accendi'
    
}) 

