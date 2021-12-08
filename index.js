window.onload = function() { document.onkeypress = mostrarInformacionCaracter}
let notas = [
    {
        "nota": "Heater-1", 
        "letra":'q'
    }, 
    {
        "nota": "Heater-2", 
        "letra":'w'
    },
    {
        "nota": "Heater-3",
        "letra":'e'
    },
    {
        "nota": "Heater-4_1", 
        "letra":'a'
    }, 
    {
        "nota": "Heater-6", 
        "letra":'s'
    }, 
    {
        "nota": "Dsc_Oh", 
        "letra":'d'
    }, 
    {
        "nota": "Kick_n_Hat", 
        "letra":'z'
    }, 
    {
        "nota": "RP4_KICK_1", 
        "letra":'x'
    }, 
    {
        "nota": "Cev_H2", 
        "letra":'c'
    } 
]

function mostrarInformacionCaracter(evObject) {
                let num;
                let elCaracter = String.fromCharCode(evObject.which);
                elCaracter=elCaracter.toLocaleLowerCase();
                if(elCaracter==='q'){
                    control.innerHTML = 'HEATER 1' ; 
                } else if(elCaracter==='w') {
                    control.innerHTML = 'HEATER 2' ;
                } else if(elCaracter==='e') {
                    control.innerHTML = 'HEATER 3' ; 
                } else if(elCaracter==='a') {
                    control.innerHTML = 'HEATER 4' ;
                } else if(elCaracter==='s') {
                    control.innerHTML = 'CLAP' ;
                } else if(elCaracter==='d') {
                    control.innerHTML = 'OPEN HH' ;
                } else if(elCaracter==='z') {
                    control.innerHTML = "kick n' Hat";
                } else if(elCaracter==='x') {
                    control.innerHTML = 'Kick' ;
                } else if(elCaracter==='c') {
                    control.innerHTML = 'Closed HH' ;
                } 
                // control.innerHTML = elCaracter ;
                EventoAudio(elCaracter) 
}

const EventoAudio = (elCaracter) =>{
    let etiquetaAudio = document.getElementById(elCaracter)
    etiquetaAudio.play()   
}

const Eventomouse = () =>{
    notas.forEach(element =>{

        let boton = document.getElementById(element.nota)

        boton.addEventListener("click", () => {
            EventoAudio(element.letra);
        })
    })
}

Eventomouse();
