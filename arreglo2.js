let notas=[5.0,1.0,5.0]

//BUSCANDO 1 ELEMENTO PARTICULAR
let resultado=notas.some(function(nota){
    return(nota==5.0)
})
console.log(resultado)

let resultadoDos=notas.find(function(nota){
    return(nota==5.0)
})
 console.log(resultadoDos)