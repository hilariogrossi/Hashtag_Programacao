const listaNotasCompletas = [
    {nota_1: 8, nota_2: 7}, 
    {nota_1: 4, nota_2: 8}, 
    {nota_1: 5, nota_2: 4}, 
    {nota_1: 7, nota_2: 6}, 
    {nota_1: 9, nota_2: 9.5}, 
    {nota_1: 10, nota_2: 0},

]

const mediaAlunosAprovados = listaNotasCompletas.filter(
        (notasAluno) => (notasAluno.nota_1 + notasAluno.nota_2)/2 >= 6
    
    );

console.log(listaNotasCompletas);
console.log(mediaAlunosAprovados);
