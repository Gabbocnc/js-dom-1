//1. Seleziono gli elementi nella dom
const accendiEl = document.getElementById('accendi');
const offEl = document.getElementById('off');




//2. Collego un event list al bottone
accendiEl.addEventListener('click', function () {
    offEl.src = './assets/img/yellow_lamp.png';
    accendiEl.innerHTML = 'Spegni'; 
 
})


let lampadaAccesa = false; 

accendiEl.addEventListener('click', function () {
    if (lampadaAccesa) {
        // Condizione : Se la lampadina e' accesa, puoi spegnerla
        offEl.src = './assets/img/white_lamp.png'; 
        accendiEl.innerHTML = 'Accendi'; 
    } else {
        // Condizione : Se la lampadina e' spenta, puoi accenderla
        offEl.src = './assets/img/yellow_lamp.png';
        accendiEl.innerHTML = 'Spegni'; 
    }
    //inverto lo stato della lampadina con l operatore !
    lampadaAccesa = !lampadaAccesa; 
})