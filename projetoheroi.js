const prompt = require("prompt-sync")();
console.clear();

console.log('PROJETO JORNADA DO HERÓI');
console.log();
console.log('Oi amiguinho, estou aqui para convidá-lo a participar de uma grande aventura, podendo assim se tornar um grande heroi');
console.log('È muito fácil se tornar um grande herói, basta apenas que responda algumas perguntas');
console.log('Apenas com "SIM" ou "NÃO" - Então vamos la!');
console.log();

let p1 = prompt('Você escova seus dentes no minimo 3 vezes ao dia? 1.[sim] 2.[nao]: ').toLowerCase();
let p2 = prompt('Você é educado com seus colegas 1.[sim] 2.[nao]: ').toLowerCase();
let p3 = prompt('Você faz todas as tarefas da escola 1.[sim] 2.[nao]: ').toLowerCase();
let p4 = prompt('Você gosta de praticar esporte1.[sim] 2.[nao]: ').toLowerCase();
let p5 = prompt('Você gosta de games 1.[sim] 2.[nao]: ').toLowerCase();

let pontuacao = 0

if (p1 == 1) {
    pontuacao ++
}
if (p2 == 1) {
    pontuacao ++
}
if (p3 == 1) {
    pontuacao ++
}
if (p4 == 1) {
    pontuacao ++
}
if (p5 == 1) {
    pontuacao ++
}


if (pontuacao == 0) {
    console.log('Você falhou, mais poderá tentar de novo!!!');
} else if (pontuacao == 1 || pontuacao ==2) {
    console.log('Você falhou, mais está no caminho certo, tente novamente!!!');
} else if(pontuacao == 3) {
    console.log('Você chegou perto de seu objetivo, tente novamente!!!');
} else if (pontuacao == 4) {
    console.log('Você se esforçou muito quase conquistou seu objetivo, tente novamente!!!');
} else if(pontuacao == 5) {
    console.log('você conseguiu conquistar seu objetivo')
} else {
    
}




//let resultados = (p1 + p2 + p3 + p4 + p5)
//console.log(resultados);

/*if (p1=='nao' && p2=='nao' && p3=='nao' && p4=='nao' && p5=='nao') {
    console.log('Você falhou, mais poderá tentar de novo!!!');
} else if (p1=='sim' && p2=='nao' && p3=='nao' && p4=='nao' && p5=='nao') {
    console.log('Você falhou, mais está no caminho certo, tente novamente!!!');
} else if (p1=='sim' && p2=='sim' && p3=='nao' && p4=='nao' && p5=='nao') {
    console.log('Você chegou perto de seu objetivo, tente novamente!!!');
} else if (p1=='sim' && p2=='sim' && p3=='sim' && p4=='nao' && p5=='nao') {
    console.log('Você se esforçou muito quase conquistou seu objetivo, tente novamente!!!');
} else if (p1=='sim' && p2=='sim' && p3=='sim' && p4=='sim' && p5=='nao') {
    console.log('Você se esforçou muito quase conquistou seu objetivo, tente novamente!!!');  
} else  {
    console.log();
}
*/
