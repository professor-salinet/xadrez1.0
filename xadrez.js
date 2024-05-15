class Tabuleiro {
    constructor (cor, x, y, linha, coluna, altura, largura, nome, posicaoVetor) {
        this.cor = cor;
        this.x = x;
        this.y = y;
        this.linha = linha;
        this.coluna = coluna;
        this.altura = altura;
        this.largura = largura;
        this.nome = nome;
        this.posicaoVetor = posicaoVetor;
    }
}

class Peca {
    constructor (cor, linha, coluna, altura, largura, nome, img, tipo, posicaoVetor) {
        this.cor = cor;
        this.linha = linha;
        this.coluna = coluna;
        this.altura = altura;
        this.largura = largura;
        this.nome = nome;
        this.img = img;
        this.tipo = tipo;
        this.posicaoVetor = posicaoVetor;
    }
}

const cor1 = "#fff"; // branco
const cor2 = "#000"; // preto
const medida = "px"; // unidade de medida em pixel
const larguraCelulaPadrao = 100;
const alturaCelulaPadrao = 100;
const larguraPecaPadrao = 50;
const alturaPecaPadrao = 50;
const linhas = ["1","2","3","4","5","6","7","8"];
const colunas = ["a","b","c","d","e","f","g","h"];
const totalCelulas = linhas.length * colunas.length;

var pecas = [];

pecas[0] = new Peca(cor2, linhas[0], colunas[0], alturaPecaPadrao, larguraPecaPadrao, "torre_preto_1", './torre_preta.png', "torre", 0);
pecas[1] = new Peca(cor2, linhas[0], colunas[7], alturaPecaPadrao, larguraPecaPadrao, "torre_preto_2", './torre_preta.png', "torre", 1);
pecas[2] = new Peca(cor2, linhas[0], colunas[1], alturaPecaPadrao, larguraPecaPadrao, "cavalo_preto_1", './cavalo_preto.png', "cavalo", 2);
pecas[3] = new Peca(cor2, linhas[0], colunas[6], alturaPecaPadrao, larguraPecaPadrao, "cavalo_preto_2", './cavalo_preto.png', "cavalo", 3);
pecas[4] = new Peca(cor2, linhas[0], colunas[2], alturaPecaPadrao, larguraPecaPadrao, "bispo_preto_1", './bispo_preto.png', "bispo", 4);
pecas[5] = new Peca(cor2, linhas[0], colunas[5], alturaPecaPadrao, larguraPecaPadrao, "bispo_preto_2", './bispo_preto.png', "bispo", 5);
pecas[6] = new Peca(cor2, linhas[0], colunas[3], alturaPecaPadrao, larguraPecaPadrao, "rei_preto", './rei_preto.png', "rei", 6);
pecas[7] = new Peca(cor2, linhas[0], colunas[4], alturaPecaPadrao, larguraPecaPadrao, "rainha_preto", './rainha_preta.png', "rainha", 7);
pecas[8] = new Peca(cor2, linhas[1], colunas[0], alturaPecaPadrao, larguraPecaPadrao, "peao_preto_1", './peao_preto.png', "peao", 8);
pecas[9] = new Peca(cor2, linhas[1], colunas[1], alturaPecaPadrao, larguraPecaPadrao, "peao_preto_2", './peao_preto.png', "peao", 9);
pecas[10] = new Peca(cor2, linhas[1], colunas[2], alturaPecaPadrao, larguraPecaPadrao, "peao_preto_3", './peao_preto.png', "peao", 10);
pecas[11] = new Peca(cor2, linhas[1], colunas[3], alturaPecaPadrao, larguraPecaPadrao, "peao_preto_4", './peao_preto.png', "peao", 11);
pecas[12] = new Peca(cor2, linhas[1], colunas[4], alturaPecaPadrao, larguraPecaPadrao, "peao_preto_5", './peao_preto.png', "peao", 12);
pecas[13] = new Peca(cor2, linhas[1], colunas[5], alturaPecaPadrao, larguraPecaPadrao, "peao_preto_6", './peao_preto.png', "peao", 13);
pecas[14] = new Peca(cor2, linhas[1], colunas[6], alturaPecaPadrao, larguraPecaPadrao, "peao_preto_7", './peao_preto.png', "peao", 14);
pecas[15] = new Peca(cor2, linhas[1], colunas[7], alturaPecaPadrao, larguraPecaPadrao, "peao_preto_8", './peao_preto.png', "peao", 15);

pecas[16] = new Peca(cor1, linhas[7], colunas[0], alturaPecaPadrao, larguraPecaPadrao, "torre_branco_1", './torre_branca.png', "torre", 16);
pecas[17] = new Peca(cor1, linhas[7], colunas[7], alturaPecaPadrao, larguraPecaPadrao, "torre_branco_2", './torre_branca.png', "torre", 17);
pecas[18] = new Peca(cor1, linhas[7], colunas[1], alturaPecaPadrao, larguraPecaPadrao, "cavalo_branco_1", './cavalo_branco.png', "cavalo", 18);
pecas[19] = new Peca(cor1, linhas[7], colunas[6], alturaPecaPadrao, larguraPecaPadrao, "cavalo_branco_2", './cavalo_branco.png', "cavalo", 19);
pecas[20] = new Peca(cor1, linhas[7], colunas[5], alturaPecaPadrao, larguraPecaPadrao, "bispo_branco_1", './bispo_branco.png', "bispo", 20);
pecas[21] = new Peca(cor1, linhas[7], colunas[2], alturaPecaPadrao, larguraPecaPadrao, "bispo_branco_2", './bispo_branco.png', "bispo", 21);
pecas[22] = new Peca(cor1, linhas[7], colunas[3], alturaPecaPadrao, larguraPecaPadrao, "rei_branco", './rei_branco.png', "rei", 22);
pecas[23] = new Peca(cor1, linhas[7], colunas[4], alturaPecaPadrao, larguraPecaPadrao, "rainha_branco", './rainha_branca.png', "rei", 23);
pecas[24] = new Peca(cor1, linhas[6], colunas[0], alturaPecaPadrao, larguraPecaPadrao, "peao_branco_1", './peao_branco.png', "peao", 24);
pecas[25] = new Peca(cor1, linhas[6], colunas[1], alturaPecaPadrao, larguraPecaPadrao, "peao_branco_2", './peao_branco.png', "peao", 25);
pecas[26] = new Peca(cor1, linhas[6], colunas[2], alturaPecaPadrao, larguraPecaPadrao, "peao_branco_3", './peao_branco.png', "peao", 26);
pecas[27] = new Peca(cor1, linhas[6], colunas[3], alturaPecaPadrao, larguraPecaPadrao, "peao_branco_4", './peao_branco.png', "peao", 27);
pecas[28] = new Peca(cor1, linhas[6], colunas[4], alturaPecaPadrao, larguraPecaPadrao, "peao_branco_5", './peao_branco.png', "peao", 28);
pecas[29] = new Peca(cor1, linhas[6], colunas[5], alturaPecaPadrao, larguraPecaPadrao, "peao_branco_6", './peao_branco.png', "peao", 29);
pecas[30] = new Peca(cor1, linhas[6], colunas[6], alturaPecaPadrao, larguraPecaPadrao, "peao_branco_7", './peao_branco.png', "peao", 30);
pecas[31] = new Peca(cor1, linhas[6], colunas[7], alturaPecaPadrao, larguraPecaPadrao, "peao_branco_8", './peao_branco.png', "peao", 31);

/**
 * Desafio: criar todos os 64 "objetos" em uma estrutura de loop
 */

var celula = [];
var numCelula = 0;
var corAtual = cor1;
var posicaoSuperior = 0;

for (let l = 0; l < linhas.length; l++) {
    let posicaoEsquerda = 0;
    if (corAtual == cor1) {
        corAtual = cor2;
    } else {
        corAtual = cor1;
    }
    for (let c = 0; c < colunas.length; c++) {
        celula[numCelula] = new Tabuleiro(corAtual, posicaoSuperior, posicaoEsquerda, linhas[l], colunas[c], alturaCelulaPadrao, larguraCelulaPadrao, "celula_" + colunas[c] + "_" + linhas[l], l);
        posicaoEsquerda += larguraCelulaPadrao;

        if (corAtual == cor1) {
            corAtual = cor2;
        } else {
            corAtual = cor1;
        }

        numCelula++;
    }
    posicaoSuperior += alturaCelulaPadrao;
}

var divsCelulas = [];

for (let c = 0; c < celula.length; c++) {
    divsCelulas[c] = document.createElement("div"); // <div></div>
    divsCelulas[c].id = celula[c].nome;
    divsCelulas[c].style.backgroundColor = celula[c].cor;
    divsCelulas[c].style.position = "absolute";
    divsCelulas[c].style.top = celula[c].x + medida;
    divsCelulas[c].style.left = celula[c].y + medida;
    divsCelulas[c].style.height = celula[c].altura + medida;
    divsCelulas[c].style.width = celula[c].largura + medida;
    divsCelulas[c].dataset.line = celula[c].linha;
    divsCelulas[c].dataset.column = celula[c].coluna;
    // divsCelulas[c].innerText = celula[c].coluna + celula[c].linha;
    if (celula[c].cor == cor1) {
        divsCelulas[c].style.color = cor2;
    } else {
        divsCelulas[c].style.color = cor1;
    }
    divsCelulas[c].style.display = "grid";
    // divsCelulas[c].style.textAlign = "center";
    divsCelulas[c].style.alignItems = "center";

    for (let p = 0; p < pecas.length; p++) {
        if (celula[c].linha == pecas[p].linha && celula[c].coluna == pecas[p].coluna) {
            let peca_tmp = document.createElement("img");
            peca_tmp.src = pecas[p].img;
            peca_tmp.width = pecas[p].largura;
            peca_tmp.height = pecas[p].altura;
            peca_tmp.style.marginLeft = "auto";
            peca_tmp.style.marginRight = "auto";
            peca_tmp.dataset.indexNumber = pecas[p].posicaoVetor;
            peca_tmp.id = pecas[p].nome;
            divsCelulas[c].appendChild(peca_tmp);
        }
    }

    document.body.appendChild(divsCelulas[c]);
}

class Movimento {
    constructor (/** parâmetros */ peca, linhaOrigem, colunaOrigem, linhaDestino, colunaDestino, historico_movimentos) {
        this.peca = peca;
        this.linhaDestino = linhaDestino;
        this.colunaDestino = colunaDestino;
        this.linhaOrigem = linhaOrigem;
        this.colunaOrigem = colunaOrigem;
        this.historico_movimentos = historico_movimentos;
    }

    moverPeca (peca, linhaOrigem, colunaOrigem, linhaDestino, colunaDestino, historico_movimentos) {
        if (!this.impedirMovimento()) {
            historico_movimentos.pecaMovimentada.push(peca);
            historico_movimentos.linhaOrigem.push(linhaOrigem);
            historico_movimentos.colunaOrigem.push(colunaOrigem);
            historico_movimentos.linhaDestino.push(linhaDestino);
            historico_movimentos.colunaDestino.push(colunaDestino);
        }
    }

    impedirMovimento(peca) {
        let linhaTemp = linhas[parseInt(peca.linha) + 1];
        let colunaTemp = colunas[colunas.indexOf(peca.coluna) + 1];
        if (pecaTemp.tipo != "cavalo") {
            if (this.quadranteDireitaLivre()) {

            }
        }
        return true;
    }

    quadranteDireitaLivre(peca) {
        let linhaTemp = peca.
        if (peca.dataset.indexNumber)
        return true;
    }
}

var movimento = new Movimento();

class HistoricoMovimentos {
    constructor () {
        this.pecaMovimentada = [];
        this.linhaOrigem = [];
        this.colunaOrigem = [];
        this.linhaDestino = [];
        this.colunaDestino = [];
    }
}

var historico_movimentos = new HistoricoMovimentos();

(function() {
    document.onmouseup = handleMouseUp;
    function handleMouseUp(event) {
        let pecaTemp = document.getElementById('pecaTemp');
        pecaTemp.innerHTML = '';
        pecaTemp.style.display = "none";
        event = event || window.event; // IE-ism
        if (event.target.tagName == "IMG" || event.target.tagName == "img") {
            console.log("Ops! Não é possível realizar este movimento, pois a peça " + event.target.id + " já está ocupando a posição.");
        } else {
            console.log(event.target.id);
            if (event.target.tagName == "DIV" || event.target.tagName == "div") {
                if (event.target.innerHTML == "") {
                    pecaMovimentada.push(pecaClicada);
                    linhaOrigem.push(pecas[pecaClicada.dataset.indexNumber].linha);
                    colunaOrigem.push(pecas[pecaClicada.dataset.indexNumber].coluna);
                    linhaDestino.push(event.target.dataset.line);
                    colunaDestino.push(event.target.dataset.column);
                    console.log("pecaMovimentada: ", pecaMovimentada);
                    console.log("linhaOrigem: ", linhaOrigem);
                    console.log("colunaOrigem: ", colunaOrigem);
                    console.log("linhaDestino: ", linhaDestino);
                    console.log("colunaDestino: ", colunaDestino);

                    let pecaClicadaTemp = pecaClicada;
                    pecaClicada.remove();
                    event.target.appendChild(pecaClicadaTemp);
                } else {
                    console.log("Ops! Não é possível realizar este movimento, pois o quadrante " + event.target.id + " já está ocupado.");
                }
            }
        }
        pecaClicada = null;
    }

    document.onmousedown = handleMouseDown;
    function handleMouseDown(event) {
        event = event || window.event; // IE-ism
        if (event.target.tagName == "IMG" || event.target.tagName == "img") {
            document.getElementById('pecaTemp').style.display = "block";
            pecaClicada = event.target;
            let imgPecaTemp = document.createElement('img');
            if (pecaClicada.tagName == "img" || pecaClicada.tagName == "IMG") {
                if (pecaClicada != null) {
                    imgPecaTemp.src = './' + pecaClicada.src.replace(/^.*[\\/]/, '');
                }
                imgPecaTemp.width = larguraPecaPadrao;
                imgPecaTemp.height = alturaPecaPadrao;
                pecaTemp.appendChild(imgPecaTemp);
            }
        }
        console.log(pecaClicada.id);
    }

    document.onmousemove = handleMouseMove;
    function handleMouseMove(event) {
        var eventDoc, 
            doc, 
            body,
            pecaTemp = document.getElementById('pecaTemp');

        event = event || window.event; // IE-ism

        if (event.pageX == null && event.clientX != null) {
            eventDoc = (event.target && event.target.ownerDocument) || document;
            doc = eventDoc.documentElement;
            body = eventDoc.body;

            event.pageX = event.clientX +
            (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
            (doc && doc.clientLeft || body && body.clientLeft || 0);
            event.pageY = event.clientY +
            (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
            (doc && doc.clientTop  || body && body.clientTop  || 0 );
        }

        pecaTemp.style.left = (event.pageX + 50) + medida;
        pecaTemp.style.top = event.pageY + medida;
        return false;
    }
})();

var pecaClicada;
var pecaMovimentada = [];
var linhaOrigem = [];
var colunaOrigem = [];
var linhaDestino = [];
var colunaDestino = [];
