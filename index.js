// Declarando as variáveis
let nome
let nivel
let XP

if (nome === undefined) {
    console.log("O nome do herói não foi definido");
}else if (XP === undefined) {
    console.log("A experiência do herói não foi definida");
} else if (XP <= 1000) {
    nivel = "Ferro";
} else if (XP <= 2000) {
    nivel = "Bronze";
} else if (XP <= 5000) {
    nivel = "Prata";
} else if (XP <= 7000) {
    nivel = "Ouro";
} else if (XP <= 8000) {
    nivel = "Platina";
} else if (XP <= 9000) {
    nivel = "Ascendente";
} else if (XP <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

if(nome && XP) {
    console.log(`O Herói de nome ${nome} está no nível de ${nivel}`)
}
