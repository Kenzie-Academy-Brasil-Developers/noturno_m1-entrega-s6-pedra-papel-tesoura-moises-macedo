//-----------------Pegar Nome----------------------------//


    const resultadoNome = prompt('Nome do jogador')
    const nomeJogador = document.querySelector('.nome-jogador');

    nomeJogador.innerText = resultadoNome


//-----------------Ouvindo clique nas imagens----------------------------//
let escolhaJogador = 0;

//-----------------Ouvindo clique pedra----------------------------//
let pedra = document.querySelector('.hand-back-fist');
const cliqueJogador = document.querySelector('.escolhaJogador');


function cliquePedra () {
    escolhaJogador= 1

    cliqueJogador.innerText = "Pedra"

}
pedra.addEventListener('click',(event) => {
    event.preventDefault(cliquePedra()), jogando();
    });

//-----------------Ouvindo clique papel----------------------------//

let papel = document.querySelector('.hand-open')

function cliquePapel () {
    escolhaJogador = 2

    cliqueJogador.innerText = "Papel"

}
papel.addEventListener('click',(event) => {
    event.preventDefault(cliquePapel()), jogando();
    }); 

//-----------------Ouvindo clique tesoura----------------------------//
let tesoura = document.querySelector('.hand-peace')

function cliqueTesoura () {
    
    escolhaJogador = 3
    cliqueJogador.innerText = "Tesoura"

}
tesoura.addEventListener('click',(event) => {
    event.preventDefault(cliqueTesoura()), jogando();
    }); 

//-----------------Escolha Computador----------------------------//
const randomComputador = document.querySelector('.escolhaComputador');
const resultadoJogador = document.querySelector('.placarJogador');
const resultadoComputador = document.querySelector('.placarComputador');


let escolhaComputador = 0;
//-----------------placar----------------------------//

let placarJogador = 0
let placarComputador = 0 

function jogando (item){
    const resultado = document.querySelector('.resultado')
        

//-----------------Random Computador----------------------------//

    escolhaComputador = Math.floor((Math.random() * (3 - 1 + 1))) + 1;

    if(escolhaComputador === 1) randomComputador.innerText='Pedra';
    else if(escolhaComputador === 2) randomComputador.innerText='Papel';
    else if(escolhaComputador === 3) randomComputador.innerText="Tesoura";
    
//-----------------verificando ganhador----------------------------//
    

    //pedra 1
    //papel 2
    //tesoura 3

    resultado.innerText= ''
    
    if(escolhaJogador === 1 && escolhaComputador === 1){
        resultado.innerText = "Empate"
    }
    else if(escolhaJogador === 2 && escolhaComputador === 2){
        resultado.innerText = "Empate"
    }
    else if(escolhaJogador === 3 && escolhaComputador === 3){
        resultado.innerText = "Empate"
    }
    else if(escolhaJogador === 1 && escolhaComputador === 2){
        resultado.innerText = "Computador ganhou!";
        placarComputador = placarComputador+1      
    }
    else if(escolhaJogador === 1 && escolhaComputador === 3){
        resultado.innerText = `${resultadoNome} ganhou!`;
        placarJogador = placarJogador+1

    }
    else if(escolhaJogador === 2 && escolhaComputador === 1){
        resultado.innerText = `${resultadoNome} ganhou!`;
        placarJogador = placarJogador+1
    }
    else if(escolhaJogador === 2 && escolhaComputador === 3){
        resultado.innerText = `Computador ganhou!`;
        placarComputador = placarComputador+1  
    }
    else if(escolhaJogador === 3 && escolhaComputador === 1){
        resultado.innerText = `Computador ganhou!`;
        placarComputador = placarComputador+1 
    }
    else if(escolhaJogador === 3 && escolhaComputador === 2){
        resultado.innerText = `${resultadoNome} ganhou!`;
        placarJogador = placarJogador+1   
    }

    
    resultadoComputador.innerText = placarComputador
    resultadoJogador.innerText = placarJogador
    
    //console.log(placarComputador)
    //console.log(placarJogador)
    

}
const button = document.querySelector('.buttonJogarNovamente');

button.addEventListener('click', function(){

    location.reload();
})




