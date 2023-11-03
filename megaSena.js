//Gera os numeros aleatorios, mas n sei se vai gerar a sorte kkk

function megaSena(min, max, quantidade) {
    const numerosAleatorios = [];

    for (let i = 0; i < quantidade; i++) {
        const numero = Math.floor(Math.random() * (max - min + 1)) + min;
        numerosAleatorios.push(numero);
    }

    return numerosAleatorios;
}

const sorteioDaSorte = megaSena(1, 100, 6);
console.log(sorteioDaSorte);
