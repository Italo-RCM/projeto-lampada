//Declarando variavel.
var somLampadaLigar = new Audio();somLampadaLigar.src = "som/ligar-desligar-lampada.wav"
var somLampadaQuebrar = new Audio();somLampadaQuebrar.src = "som/quebrar-lampada.wav"
var somLampadaTrocar = new Audio();somLampadaTrocar.src = "som/trocar-lampadaa.wav"
const buttonOn = document.getElementById("buttonOn");
const buttonOff = document.getElementById("buttonOff");
const buttonQuebrar = document.getElementById("buttonQuebrar");
const buttonConcertar = document.getElementById("buttonConcertar");
const lampada = document.getElementById("lampada");





//Função para trocar a imagem ao clicar no botão.
function lampadaOn() { //Fazer a imagem da lampara ligada aparecer.
    lampada.src = "img/ligada.png";
}

function lampadaOff() { //Fazer a imagem da lampara apagada aparecer.
    lampada.src = "img/desligada.png";
}

function lampadaQuebrada() { //Fazer a imagem da lampara quebrada aparecer.
    lampada.src = "img/quebrada.png";
}





//Função para fazer o botão sumir e aparecer.
function sumirButtonConcertar () { //Função para fazer o botão concertar lampada aparecer e sumir.
    var x = document.getElementById("buttonConcertar");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function sumirButtonLigar() { //Função para fazer o botão ligar lampada aparecer e sumir.
    var x = document.getElementById("buttonOn");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}    

function sumirButtonDesligar() { //Função para fazer o botão desligar lampada aparecer e sumir.
    var x = document.getElementById("buttonOff");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function sumirButtonQuebrar() { //Função para fazer o botão quebrar lampada aparecer e sumir.
    var x = document.getElementById("buttonQuebrar");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}





//Adicionando evento de click aos botões.
buttonOn.addEventListener("click", lampadaOn);
buttonOff.addEventListener("click", lampadaOff);
buttonQuebrar.addEventListener("click",
    lampadaQuebrada,
    sumirButtonConcertar,
    sumirButtonLigar,
    sumirButtonDesligar,
    sumirButtonQuebrar
);
buttonConcertar.addEventListener("click", lampadaOff, lampadaQuebrada,
sumirButtonConcertar,
sumirButtonLigar,
sumirButtonDesligar,
sumirButtonQuebrar)