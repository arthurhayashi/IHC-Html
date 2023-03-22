let altura =0;
let largura =0;
let vidas =1;
let tempo = 15;

let criaMosquitoTempo = 1500;
let params = (new URL(document.location)).searchParams;
let nivel = prams.get( 'nivel');


if(nivel == 'normal'){
    criaMosquitoTempo = 1500;
}else if(nivel == 'dificil'){
    criaMosquitoTempo = 1000;
}else if(nivel == 'chucknorris'){
    criaMosquitoTempo = 750;
}

function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight;
    largura = window.innerWidth;
}

ajustaTamanhoPalcoJogo();

var cronometro = setInterval(
    function(){
        tempo -= 1;

        if(tempo<0){
            clearInterval(cronometro);
            clearInterval(criaMosquitoTempo);
            window.location.href='vitoria.html';
        }else{
            document.getElementById('cronometro').innerHTML = tempo;
        }
    }
,1000);

function posicaoRandomica(){
    // remover o mosquito anterior (caso exista)
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove();
        if(vidas=3){
            window.location.href="fim_de_jogo.html";
        }else{
            document.getElementById('v' + vidas).src="imagens/coracao_vazio.png";
            vidas++;
        }
    }
    let posicaoX = Math.floor(Math.random()*largura)-580;
    let posicaoY = Math.floor(Math.random()*altura)-700;

    posicaoX = posicaoX<0?0:posicaoX;
    posicaoY = posicaoY<0?0:posicaoY;

    // criar o elemento no html
    let mosquito = document.createElement('img');
    mosquito.src='imagens/mosquito.png';
    mosquito.className = tamanhoAleatorio()+''+ladoAleatorio();
    mosquito.style.left = posicaoX + 'px';
    mosquito.style.top = posicaoY +'px';
    mosquito.style.position='absolute';
    mosquito.id='mosquito';
    mosquito.onclick = function(){
        this.remove();
    }

    document.body.appendChild(mosquito);
}

function tamanhoAleatorio(){
    let classe = Math.floor(Math.random()*3);
    switch(classe){
        case 0 :
            return 'mosquito1';
        case 1 :
            return 'mosquito2';
        case 2:
            return 'mosquito3';
    }
}

function ladoAleatorio(){
    let classe2 = Math.floor(Math.random()*2)

    switch(classe2){
        case 0 :
            return 'ladoA';
        case 1 :
            return 'ladoB';
    }
}