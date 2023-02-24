// variaveis do carro
let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 151, 210, 270, 318];
let velocidadeCarros = [2.7, 3.2, 4, 5, 3.3, 2.4];


// tamanho dos carros
let larguraCarro = 50;
let alturaCarro = 40;

function mostraCarro() {
  for(let i = 0; i < imgCarros.length; i++) {
    image(imgCarros[i], xCarros[i], yCarros[i], larguraCarro, alturaCarro);
  }
}

function movimentaCarro() {
  for(let i = 0; i < imgCarros.length; i++) {
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialCarro() {
  for(let i = 0; i < imgCarros.length; i++) {
    if(passouATelaToda(xCarros[i])) {
      xCarros[i] = 600;
    }
  }
}

function passouATelaToda(xCarro) {
  return xCarro < -50;
}