let nomeHeroi = "Rocket";
let saldo = soma(140,50)
let nivel


function soma(vitorias, derrotas){
    return vitorias - derrotas
}

if (saldo <= 10) {
nivel = "ferro"
} else if (saldo <= 20){
    nivel = "bronze"
} else if (saldo <= 50){
    nivel = "prata"
} else if (saldo <= 80){
    nivel = "ouro"       
} else if (saldo <= 90){
    nivel = "diamante"
} else if (saldo <= 100){
    nivel = "lendário"
} else if (saldo >= 101){
    nivel = "imortal"
}

console.log("O Herói tem de saldo de " + saldo + " está no nível de " + nivel)



