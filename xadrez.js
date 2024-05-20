/**
 * As linhas abaixo são as declarações das variáveis do ambiente
 */

const pecaTemp = document.getElementById('pecaTemp'); // variável atribuída para uso do elemento <div id="pecaTemp">
const cor1 = "#fff"; // cor branca para uso no tabuleiro
const cor2 = "#000"; // cor preta para uso no tabuleiro
const medida = "px"; // variável para uso de unidade de medida em pixel para uso nos valores dos stributos css/style
const larguraCelulaPadrao = 100; // variável utilizada para definir o tamanho da largura padrão da célula/quadrante padrão do tabuleiro
const alturaCelulaPadrao = 100; // variável utilizada para definir o tamanho da altura padrão da célula/quadrante padrão do tabuleiro
const larguraPecaPadrao = 50; // variável utilizada para definir o tamanho da largura padrão das peças
const alturaPecaPadrao = 50; // variável utilizada para definir o tamanho da altura padrão das peças
const linhas = ["1","2","3","4","5","6","7","8"]; // variável do tipo matriz para definir a quantidade e nomes das linhas do tabuleiro
const colunas = ["a","b","c","d","e","f","g","h"]; // variável do tipo matriz para definir a quantidade e nomes das colunas do tabuleiro
var pecas = []; // variável do tipo matriz que vai atribuir os objetos das peças
var celula = []; // variável do tipo matriz que vai atribuir os objetos das células/quadrantes
var numCelula = 0; // variável que vai contabilizar a quantidade de células dos quadrantes (linhas * colunas)
var corAtual = cor1; // variável que vai definir a cor atual da repetição entre linhas e colunas
var posicaoSuperior = 0; // variável que vai definir a posição superior inicial das células/quadrantes do tabuleiro, para uso na estrutura de repetição (for) das linhas e colunas
var divsCelulas = []; // variável do tipo matriz que vai atribuir os elementos <div> das células/quadrantes
var pecaClicada;
var pecaMovimentada = [];
var linhaOrigem = [];
var colunaOrigem = [];
var linhaDestino = [];
var colunaDestino = [];

class Tabuleiro { // declaração do objeto Tabuleiro
    constructor (cor, x, y, linha, coluna, altura, largura, nome, posicaoVetor) { // declaração do construtor do objeto Tabuleiro e parâmetros
        this.cor = cor; // definição da variável cor do objeto Tabuleiro
        this.x = x; // definição da variável x do objeto Tabuleiro
        this.y = y; // definição da variável y do objeto Tabuleiro
        this.linha = linha; // definição da variável linha do objeto Tabuleiro
        this.coluna = coluna; // definição da variável coluna do objeto Tabuleiro
        this.altura = altura; // definição da variável altura do objeto Tabuleiro
        this.largura = largura; // definição da variável largura do objeto Tabuleiro
        this.nome = nome; // definição da variável nome do objeto Tabuleiro
        this.posicaoVetor = posicaoVetor; // definição da variável posicaoVetor do objeto Tabuleiro
    }
}

class Peca { // declaração do objeto Peca
    constructor (cor, linha, coluna, altura, largura, nome, img, tipo, posicaoVetor, nMovimento) { // declaração do construtor do objeto Peca e parâmetros
        this.cor = cor; // definição da variável cor do objeto Peca
        this.linha = linha; // definição da variável linha do objeto Peca
        this.coluna = coluna; // definição da variável coluna do objeto Peca
        this.altura = altura; // definição da variável altura do objeto Peca
        this.largura = largura; // definição da variável largura do objeto Peca
        this.nome = nome; // definição da variável nome do objeto Peca
        this.img = img; // definição da variável img do objeto Peca
        this.tipo = tipo; // definição da variável tipo do objeto Peca
        this.posicaoVetor = posicaoVetor; // definição da variável posicaoVetor do objeto Peca
        this.nMovimento = nMovimento; // definição da variável nMovimento do objeto Peca
    }
}

/**
 * As variáveis abaixo servirão para declarar os vetores da variável "pecas", os quais são proveniente da criação do objeto Peca
 */
pecas[0] = new Peca(cor2, linhas[0], colunas[0], alturaPecaPadrao, larguraPecaPadrao, "torre_preto_1", './torre_preta.png', "torre", 0, 0);
pecas[1] = new Peca(cor2, linhas[0], colunas[7], alturaPecaPadrao, larguraPecaPadrao, "torre_preto_2", './torre_preta.png', "torre", 1, 0);
pecas[2] = new Peca(cor2, linhas[0], colunas[1], alturaPecaPadrao, larguraPecaPadrao, "cavalo_preto_1", './cavalo_preto.png', "cavalo", 2, 0);
pecas[3] = new Peca(cor2, linhas[0], colunas[6], alturaPecaPadrao, larguraPecaPadrao, "cavalo_preto_2", './cavalo_preto.png', "cavalo", 3, 0);
pecas[4] = new Peca(cor2, linhas[0], colunas[2], alturaPecaPadrao, larguraPecaPadrao, "bispo_preto_1", './bispo_preto.png', "bispo", 4, 0);
pecas[5] = new Peca(cor2, linhas[0], colunas[5], alturaPecaPadrao, larguraPecaPadrao, "bispo_preto_2", './bispo_preto.png', "bispo", 5, 0);
pecas[6] = new Peca(cor2, linhas[0], colunas[3], alturaPecaPadrao, larguraPecaPadrao, "rei_preto", './rei_preto.png', "rei", 6, 0);
pecas[7] = new Peca(cor2, linhas[0], colunas[4], alturaPecaPadrao, larguraPecaPadrao, "rainha_preto", './rainha_preta.png', "rainha", 7, 0);
pecas[8] = new Peca(cor2, linhas[1], colunas[0], alturaPecaPadrao, larguraPecaPadrao, "peao_preto_1", './peao_preto.png', "peao", 8, 0);
pecas[9] = new Peca(cor2, linhas[1], colunas[1], alturaPecaPadrao, larguraPecaPadrao, "peao_preto_2", './peao_preto.png', "peao", 9, 0);
pecas[10] = new Peca(cor2, linhas[1], colunas[2], alturaPecaPadrao, larguraPecaPadrao, "peao_preto_3", './peao_preto.png', "peao", 10, 0);
pecas[11] = new Peca(cor2, linhas[1], colunas[3], alturaPecaPadrao, larguraPecaPadrao, "peao_preto_4", './peao_preto.png', "peao", 11, 0);
pecas[12] = new Peca(cor2, linhas[1], colunas[4], alturaPecaPadrao, larguraPecaPadrao, "peao_preto_5", './peao_preto.png', "peao", 12, 0);
pecas[13] = new Peca(cor2, linhas[1], colunas[5], alturaPecaPadrao, larguraPecaPadrao, "peao_preto_6", './peao_preto.png', "peao", 13, 0);
pecas[14] = new Peca(cor2, linhas[1], colunas[6], alturaPecaPadrao, larguraPecaPadrao, "peao_preto_7", './peao_preto.png', "peao", 14, 0);
pecas[15] = new Peca(cor2, linhas[1], colunas[7], alturaPecaPadrao, larguraPecaPadrao, "peao_preto_8", './peao_preto.png', "peao", 15, 0);

pecas[16] = new Peca(cor1, linhas[7], colunas[0], alturaPecaPadrao, larguraPecaPadrao, "torre_branco_1", './torre_branca.png', "torre", 16, 0);
pecas[17] = new Peca(cor1, linhas[7], colunas[7], alturaPecaPadrao, larguraPecaPadrao, "torre_branco_2", './torre_branca.png', "torre", 17, 0);
pecas[18] = new Peca(cor1, linhas[7], colunas[1], alturaPecaPadrao, larguraPecaPadrao, "cavalo_branco_1", './cavalo_branco.png', "cavalo", 18, 0);
pecas[19] = new Peca(cor1, linhas[7], colunas[6], alturaPecaPadrao, larguraPecaPadrao, "cavalo_branco_2", './cavalo_branco.png', "cavalo", 19, 0);
pecas[20] = new Peca(cor1, linhas[7], colunas[5], alturaPecaPadrao, larguraPecaPadrao, "bispo_branco_1", './bispo_branco.png', "bispo", 20, 0);
pecas[21] = new Peca(cor1, linhas[7], colunas[2], alturaPecaPadrao, larguraPecaPadrao, "bispo_branco_2", './bispo_branco.png', "bispo", 21, 0);
pecas[22] = new Peca(cor1, linhas[7], colunas[3], alturaPecaPadrao, larguraPecaPadrao, "rei_branco", './rei_branco.png', "rei", 22, 0);
pecas[23] = new Peca(cor1, linhas[7], colunas[4], alturaPecaPadrao, larguraPecaPadrao, "rainha_branco", './rainha_branca.png', "rei", 23, 0);
pecas[24] = new Peca(cor1, linhas[6], colunas[0], alturaPecaPadrao, larguraPecaPadrao, "peao_branco_1", './peao_branco.png', "peao", 24, 0);
pecas[25] = new Peca(cor1, linhas[6], colunas[1], alturaPecaPadrao, larguraPecaPadrao, "peao_branco_2", './peao_branco.png', "peao", 25, 0);
pecas[26] = new Peca(cor1, linhas[6], colunas[2], alturaPecaPadrao, larguraPecaPadrao, "peao_branco_3", './peao_branco.png', "peao", 26, 0);
pecas[27] = new Peca(cor1, linhas[6], colunas[3], alturaPecaPadrao, larguraPecaPadrao, "peao_branco_4", './peao_branco.png', "peao", 27, 0);
pecas[28] = new Peca(cor1, linhas[6], colunas[4], alturaPecaPadrao, larguraPecaPadrao, "peao_branco_5", './peao_branco.png', "peao", 28, 0);
pecas[29] = new Peca(cor1, linhas[6], colunas[5], alturaPecaPadrao, larguraPecaPadrao, "peao_branco_6", './peao_branco.png', "peao", 29, 0);
pecas[30] = new Peca(cor1, linhas[6], colunas[6], alturaPecaPadrao, larguraPecaPadrao, "peao_branco_7", './peao_branco.png', "peao", 30, 0);
pecas[31] = new Peca(cor1, linhas[6], colunas[7], alturaPecaPadrao, larguraPecaPadrao, "peao_branco_8", './peao_branco.png', "peao", 31, 0);

/**
 * Desafio concluído: criar todos os 64 "objetos" em uma estrutura de loop
 */

for (let l = 0; l < linhas.length; l++) { // estrutura de repetição que vai repetir todas as linhas da variável "linhas" 
    let posicaoEsquerda = 0; // variável que vai definir a posição inicial da esquerda das células/quadrantes do tabuleiro, a cada repetição de linha

    if (corAtual == cor1) { // estrutura de validação que vai validar se a cor atual é a cor 1 e executar a linha de código abaixo, caso seja verdadeira a validação
        corAtual = cor2; // variável corAtual receberá o valor da outra variável cor 2, ou seja, vai trocar de cor
    } else { // bloco de código a ser executado caso a validação seja falsa
        corAtual = cor1; // variável corAtual receberá o valor da outra variável cor 1, ou seja, vai trocar de cor
    } // fechamento do if (bloco de códigos da estrutura de validação)

    for (let c = 0; c < colunas.length; c++) { // estrutura de repetição que vai repetir todas as colunas da variável "colunas"
        celula[numCelula] = new Tabuleiro(corAtual, posicaoSuperior, posicaoEsquerda, linhas[l], colunas[c], alturaCelulaPadrao, larguraCelulaPadrao, "celula_" + colunas[c] + "_" + linhas[l], l); // declaração dos vetores da variável "celula", os quais são proveniente da criação do objeto Tabuleiro
        posicaoEsquerda += larguraCelulaPadrao; // variável posicaoEsquerda será atribuído o valor dela mesmo + a largura de célula padrão, para alinhar horizontalmente as células/quadrantes do tabuleiro

        if (corAtual == cor1) { // estrutura de validação que vai validar se a cor atual é a cor 1 e executar a linha de código abaixo, caso seja verdadeira a validação
            corAtual = cor2; // variável corAtual receberá o valor da outra variável cor 2, ou seja, vai trocar de cor
        } else { // bloco de código a ser executado caso a validação seja falsa
            corAtual = cor1; // variável corAtual receberá o valor da outra variável cor 1, ou seja, vai trocar de cor
        } // fechamento do if (bloco de códigos da estrutura de validação)

        numCelula++; // a variável numCelula receberá o valor dela mesmo + 1
    } // fechamento do for (bloco de códigos da estrutura de repetição)
    posicaoSuperior += alturaCelulaPadrao; // variável posicaoSuperior será atribuído o valor dela mesmo + a altura de célula padrão, para alinhar verticalmente as células/quadrantes do tabuleiro
} // fechamento do for (bloco de códigos da estrutura de repetição)

for (let c = 0; c < celula.length; c++) { // estrutura de repetição que vai repetir todos os vetores da variável/matriz "celula"
    divsCelulas[c] = document.createElement("div"); // <div></div>
    divsCelulas[c].id = celula[c].nome; // <div id="..."></div>
    divsCelulas[c].style.backgroundColor = celula[c].cor; // <div id="..." style="background-color: ...;"></div>
    divsCelulas[c].style.position = "absolute"; // <div id="..." style="background-color: ...; position: absolute;"></div>
    divsCelulas[c].style.top = celula[c].x + medida; // <div id="..." style="background-color: ...; position: absolute; top: ..px;"></div>
    divsCelulas[c].style.left = celula[c].y + medida; // <div id="..." style="background-color: ...; position: absolute; top: ..px; left: ..px;"></div>
    divsCelulas[c].style.height = celula[c].altura + medida; // <div id="..." style="background-color: ...; position: absolute; top: ..px; left: ..px; height: ..px;"></div>
    divsCelulas[c].style.width = celula[c].largura + medida; // <div id="..." style="background-color: ...; position: absolute; top: ..px; left: ..px; height: ..px; width: ..px;"></div>
    divsCelulas[c].dataset.line = celula[c].linha; // <div id="..." style="background-color: ...; position: absolute; top: ..px; left: ..px; height: ..px; width: ..px;" data-line=".."></div>
    divsCelulas[c].dataset.column = celula[c].coluna; // <div id="..." style="background-color: ...; position: absolute; top: ..px; left: ..px; height: ..px; width: ..px;" data-line=".." data-column=".."></div>
    // divsCelulas[c].innerText = celula[c].coluna + celula[c].linha;
    if (celula[c].cor == cor1) { // estrutura de validação que vai validar se a cor atual é a cor 1 e executar a linha de código abaixo, caso seja verdadeira a validação
        divsCelulas[c].style.color = cor2; // o atributo css divsCelulas[c].style.color receberá o valor da outra variável cor 2, ou seja, vai trocar de cor
    } else { // bloco de código a ser executado caso a validação seja falsa
        divsCelulas[c].style.color = cor1; // o atributo css divsCelulas[c].style.color receberá o valor da outra variável cor 1, ou seja, vai trocar de cor
    } // fechamento do if (bloco de códigos da estrutura de validação)

    divsCelulas[c].style.display = "grid"; // o atributo css divsCelulas[c].style.display receberá o valor "grid", para melhor uso do alinhamento de itens dentro da <div>
    // divsCelulas[c].style.textAlign = "center";
    divsCelulas[c].style.alignItems = "center"; // o atributo css divsCelulas[c].style.alignItems receberá o valor "center", para alinhar verticalmente ao centro os elementos que estiverem dentro da <div>

    for (let p = 0; p < pecas.length; p++) { // estrutura de repetição que vai repetir todos os vetores da variável/matriz pecas
        if (celula[c].linha == pecas[p].linha && celula[c].coluna == pecas[p].coluna) { // estrutura de validação que vai validar se a linha e coluna do vetor/objeto Tabuleiro é igual à linha e coluna do vetor/objeto Peca
            let peca_tmp = document.createElement("img"); // <img />
            peca_tmp.src = pecas[p].img; // <img src="..." />
            peca_tmp.width = pecas[p].largura; // <img src="..." width="..." />
            peca_tmp.height = pecas[p].altura; // <img src="..." width="..." height="..." />
            peca_tmp.style.marginLeft = "auto"; // <img src="..." width="..." height="..." style="margin-left: auto;" />
            peca_tmp.style.marginRight = "auto"; // <img src="..." width="..." height="..." style="margin-left: auto; margin-left: auto;" />
            peca_tmp.dataset.indexNumber = pecas[p].posicaoVetor; // <img src="..." width="..." height="..." style="margin-left: auto; margin-left: auto;" data-index-number=".." />
            peca_tmp.id = pecas[p].nome; // <img src="..." width="..." height="..." style="margin-left: auto; margin-left: auto;" data-index-number=".." id=".." />
            divsCelulas[c].appendChild(peca_tmp); // vetor variável/matriz <div> que receberá a peça/<img/> temporária 
        } // fechamento do if (bloco de códigos da estrutura de validação)
    } // fechamento do for (bloc de códigos da estrutura de repetição)

    document.body.appendChild(divsCelulas[c]); // o elemento <body> receberá a célula/quadrante/<div> da variável/matriz divsCelulas
} // fechamento do for (bloco de códigos da estrutura de repetição)

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
        let pecaTemp = pecas[peca.dataset.indexNumber];
        if (!this.impedirMovimento(pecaTemp)) {
            historico_movimentos.pecaMovimentada.push(peca);
            historico_movimentos.linhaOrigem.push(linhaOrigem);
            historico_movimentos.colunaOrigem.push(colunaOrigem);
            historico_movimentos.linhaDestino.push(linhaDestino);
            historico_movimentos.colunaDestino.push(colunaDestino);
        }
    }

    impedirMovimento(pecaTemp) {
        let linhaTemp = linhas[parseInt(pecaTemp.linha) + 1];
        let colunaTemp = colunas[colunas.indexOf(pecaTemp.coluna) + 1];
        if (this.peca.tipo != "cavalo") {
            if (this.quadranteDireitaLivre(pecaTemp)) {

            }
        }
        return true;
    }

    quadranteDireitaLivre(pecaTemp) {
        let linhaTemp = pecas[pecaTemp.linha + 1];
        if (linhaTemp != null) {
            console.log("linha da direita existe.");
        }
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

(function() { // execução em tempo real das linhas de código do bloco de função inominada
    document.onmouseup = handleMouseUp;
    function handleMouseUp(event) {
        pecaTemp.innerHTML = '';
        pecaTemp.style.display = "none";
        let elementoDestino = event.target;
        event = event || window.event; // IE-ism
        if (elementoDestino.tagName == "IMG" || elementoDestino.tagName == "img") {
            console.log("Ops! Não é possível realizar este movimento, pois a peça " + elementoDestino.id + " já está ocupando a posição.");
        } else {
            console.log(elementoDestino.id);
            if (elementoDestino.tagName == "DIV" || elementoDestino.tagName == "div") {
                if (elementoDestino.innerHTML == "") {
                    /**
                     * As linhas de código abaixo analisam o movimento das peças e autorizam as mesmas
                     */
                    let movimentoPermitido = false;
                    let pecaAnalisada;
                    let nVetorPeca = pecaClicada.dataset.indexNumber;
                    if (nVetorPeca) {
                        pecaAnalisada = pecas[nVetorPeca];

                        /**
                         * As linhas de código abaixo analisam o movimento dos peões pretos e autorizam os movimentos dos mesmos
                         */
                        if (
                            pecaAnalisada.linha < elementoDestino.dataset.line && 
                            pecaAnalisada.coluna == elementoDestino.dataset.column && 
                            pecaAnalisada.tipo == "peao" && pecaAnalisada.cor == cor2
                        ) {
                            if (
                                pecaAnalisada.nMovimento == 0 && 
                                elementoDestino.dataset.line <= (parseInt(pecaAnalisada.linha) + 2)
                            ) {
                                movimentoPermitido = true;
                            } else if (
                                pecaAnalisada.nMovimento > 0 && 
                                elementoDestino.dataset.line == (parseInt(pecaAnalisada.linha) + 1)
                            ) {
                                movimentoPermitido = true;
                            }
                        }

                        /**
                         * As linhas de código abaixo analisam o movimento das torres pretas e autorizam os movimentos das mesmas
                         */
                        if (
                            pecaAnalisada.linha == elementoDestino.dataset.line && // elementoDestino.dataset.line é uma string e precisa ser convertida para tipo numérico, caso precise ser utilizada como número
                            pecaAnalisada.coluna != elementoDestino.dataset.column && 
                            pecaAnalisada.tipo == "torre" && pecaAnalisada.cor == cor2
                        ) {
                            if ()
                        }
                    }

                    /**
                     * A estrutura de validação abaixo verifica se o movimento está autorizado e executa as linhas de código do bloco if{}
                     */
                    if (movimentoPermitido == true) {
                        pecaMovimentada.push(pecaClicada);
                        linhaOrigem.push(pecas[pecaClicada.dataset.indexNumber].linha);
                        colunaOrigem.push(pecas[pecaClicada.dataset.indexNumber].coluna);
                        linhaDestino.push(elementoDestino.dataset.line);
                        colunaDestino.push(elementoDestino.dataset.column);
                        pecaAnalisada.linha = elementoDestino.dataset.line;
                        pecaAnalisada.nMovimento++;

                        console.log("pecaMovimentada: ", pecaMovimentada);
                        console.log("linhaOrigem: ", linhaOrigem);
                        console.log("colunaOrigem: ", colunaOrigem);
                        console.log("linhaDestino: ", linhaDestino);
                        console.log("colunaDestino: ", colunaDestino);
    
                        let pecaClicadaTemp = pecaClicada;
                        pecaClicada.remove();
                        elementoDestino.appendChild(pecaClicadaTemp);
                    } else {
                        console.log("Movimento não permitido.");
                    }

                } else {
                    console.log("Ops! Não é possível realizar este movimento, pois o quadrante " + elementoDestino.id + " já está ocupado.");
                }
            }
        }
        pecaClicada = null;
    }

    document.onmousedown = handleMouseDown;
    function handleMouseDown(event) {
        event = event || window.event; // IE-ism
        pecaClicada = event.target;
        if (pecaClicada.tagName == "IMG" || pecaClicada.tagName == "img") {
            pecaTemp.style.display = "block";
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
            body;

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