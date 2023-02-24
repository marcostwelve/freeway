// variaveis do ator
let xAtor = 85;
let yAtor = 366;
let colisao = false;

// pontos
let meusPontos = 0;

function mostraAtor() {
  image(imgAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor() {
  if(keyIsDown(UP_ARROW)) {
    yAtor -= 3;
  }
  if(keyIsDown(DOWN_ARROW)) {
    if(movimentacao()) {
      yAtor += 3;
    }
  }
}

function verificaColisao() {
  // collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for(let i = 0; i < imgCarros.length; i++) {
    colisao = collideRectCircle(xCarros[i], yCarros[i], larguraCarro, alturaCarro, xAtor, yAtor, 15);
    
    if(colisao) {
      voltaInicio();
      somColisao.play();
      if(pontosMaiorQueZero()) {
        meusPontos -= 1;
      }
    }
  }
}

function voltaInicio() {
  yAtor = 366;
}

function incluiPontos() {
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 260, 100));
  text(meusPontos, width / 5, 27);
}


function marcaPonto() {
  if(yAtor < 15) {
    meusPontos += 1;
    somPonto.play();
    voltaInicio();
  }
}

function pontosMaiorQueZero() {
  return meusPontos > 0;
}

function movimentacao() {
  return yAtor < 366;
}