
    
    let comienza = false;
    let turno = 0;
    const tablero = [];
    let ganador = 0;
    let jugador1 = document.getElementById('jugador1');
    let jugador2 = document.getElementById('jugador2');
    let anuncio = document.getElementsByClassName('container-ganador');
   

    let iniciar = document.getElementById('comienza');
    iniciar.addEventListener('click',comenzar);
    tablero[0] = document.getElementById('b0');
    tablero[1] = document.getElementById('b1');
    tablero[2] = document.getElementById('b2');
    tablero[3] = document.getElementById('b3');
    tablero[4] = document.getElementById('b4');
    tablero[5] = document.getElementById('b5');
    tablero[6] = document.getElementById('b6');
    tablero[7] = document.getElementById('b7');
    tablero[8] = document.getElementById('b8');
    
    let aviso = document.getElementById('ganador'); 
    let avisoParrafo = document.getElementById('ganador-parrafo');
    
    /*tablero.forEach(i => {
            tablero[i].innerHTML = '';
        });*/

    function comenzar(){
        aviso.className = 'ganador-oculto'
        
        if(iniciar.innerHTML == 'Repetir' && ganador != 0){
            
            for(let i = 0; i<9; i++){
                tablero[i].innerHTML = ''
                iniciar.innerHTML = 'Comienza'
                comienza = true;
                ganador = 0;
               
                aviso.className = 'ganador-oculto'
                
            }
        }
        comienza = true;
        ganador = 0;
       
        turno = 1;
        console.log('jugador ' + turno);
        
    }

   

    
    
    function revisar() { 
        if((tablero[0].innerHTML == 'X' &&  tablero[1].innerHTML == 'X' &&  tablero[2].innerHTML == 'X')
        || (tablero[3].innerHTML == 'X' &&  tablero[4].innerHTML == 'X' &&  tablero[5].innerHTML == 'X')
        || (tablero[6].innerHTML == 'X' &&  tablero[7].innerHTML == 'X' &&  tablero[8].innerHTML == 'X')
        || (tablero[0].innerHTML == 'X' &&  tablero[3].innerHTML == 'X' &&  tablero[6].innerHTML == 'X')
        || (tablero[1].innerHTML == 'X' &&  tablero[4].innerHTML == 'X' &&  tablero[7].innerHTML == 'X')
        || (tablero[2].innerHTML == 'X' &&  tablero[5].innerHTML == 'X' &&  tablero[8].innerHTML == 'X')
        || (tablero[0].innerHTML == 'X' &&  tablero[4].innerHTML == 'X' &&  tablero[8].innerHTML == 'X')
        || (tablero[2].innerHTML == 'X' &&  tablero[4].innerHTML == 'X' &&  tablero[6].innerHTML == 'X')
        ){
           // comienza == false;
           ganador = 1

        }
    
        if((tablero[0].innerHTML == 'O' &&  tablero[1].innerHTML == 'O' &&  tablero[2].innerHTML == 'O')
        || (tablero[3].innerHTML == 'O' &&  tablero[4].innerHTML == 'O' &&  tablero[5].innerHTML == 'O')
        || (tablero[6].innerHTML == 'O' &&  tablero[7].innerHTML == 'O' &&  tablero[8].innerHTML == 'O')
        || (tablero[0].innerHTML == 'O' &&  tablero[3].innerHTML == 'O' &&  tablero[6].innerHTML == 'O')
        || (tablero[1].innerHTML == 'O' &&  tablero[4].innerHTML == 'O' &&  tablero[7].innerHTML == 'O')
        || (tablero[2].innerHTML == 'O' &&  tablero[5].innerHTML == 'O' &&  tablero[8].innerHTML == 'O')
        || (tablero[0].innerHTML == 'O' &&  tablero[4].innerHTML == 'O' &&  tablero[8].innerHTML == 'O')
        || (tablero[2].innerHTML == 'O' &&  tablero[4].innerHTML == 'O' &&  tablero[6].innerHTML == 'O')
        ){
            //comienza == false;
            ganador = 2
        }

        return ganador;
    }
    
    
    


function colocar(boton){
    if(comienza == true){
        if (turno == 1 && boton.innerHTML=='') {
            turno = 2;
            boton.innerHTML = "X";
            console.log('x')

        }else if(turno == 2 && boton.innerHTML==''){
            turno = 1;
            boton.innerHTML ='O';
            console.log('O')
        }
    }

    ganador = revisar();

    if(ganador == 1){
        console.log('Gano el jugador 1');
        iniciar.innerHTML='Repetir'
        //jugador1.style.backgroundColor = '#011f30';
        comienza = false;
        //jugador2.style.backgroudColor = '#5A4BBF';
        aviso.className = 'ganador'
        avisoParrafo.innerHTML = 'Gano el jugador 1'
    }else if(ganador == 2){
        console.log('Gano el jugador 2');
        iniciar.innerHTML='Repetir'
        //jugador1.style.backgroudColor = '#5A4BBF';
        comienza = false;
        //jugador2.style.backgroundColor = '#011f30';
        aviso.className = 'ganador'
        avisoParrafo.innerHTML = 'Gano el jugador 2'
    }

    if(tablero[0].innerHTML != '' && tablero[1].innerHTML != '' && tablero[2].innerHTML != '' && tablero[3].innerHTML != '' && tablero[4].innerHTML != '' && tablero[5].innerHTML != '' && tablero[6].innerHTML != '' && tablero[7].innerHTML != '' && tablero[8].innerHTML != ''){
        iniciar.innerHTML='Repetir'
        comienza == false;
        ganador = 3;
        console.log('empate')
        aviso.className = 'ganador'
        avisoParrafo.innerHTML = 'Tenemos un empate'

    }
    
    
}