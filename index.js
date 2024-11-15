let qtdVitoria = 150
let qtdDerrota = 50

function calculo(vitorias, derrotas) {
    let saldo = vitorias - derrotas
    let rank = ""
    if (saldo<=10){
        rank = "Ferro"
    }
    else if (saldo<=20 && saldo>10){
        rank = "Bronze"
    }
    else if (saldo<=50 && saldo>20){
        rank = "Prata"
    }
    else if (saldo<=80 && saldo>50){
        rank = "Ouro"
    }
    else if (saldo<=90 && saldo>80){
        rank = "Diamante"
    }
    else if (saldo<=100 && saldo>90){
        rank = "Lendario"
    }
    else if (saldo>100){
        rank = "Imortal"
    }
    return [rank, saldo]
}



let rankeamento  = calculo(qtdVitoria,qtdDerrota)
console.log(`O Herói tem de saldo ${rankeamento[1]} vitórias e está no rank ${rankeamento[0]}`)