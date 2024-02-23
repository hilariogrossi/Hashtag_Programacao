const listaNotas = [7.5, 2.5, 7, 4, 3, 5, 7, 2, 8, 2.6, 4, 5.5]
// [7.5, 7, 7, 8] Passaram, pois tem nota maior do que 6

const notasAprovadas = listaNotas.filter((nota) => nota >= 6);

console.log(listaNotas);
console.log(notasAprovadas);
