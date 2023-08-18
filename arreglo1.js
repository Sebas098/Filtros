let numeros=[7,14,21,28,100]
let nombres=Array("juan","pedro","sara","cristina")

//filtrando Un arreglo 
let filtro=numeros.filter(function(numero){
    return(numero<20)
})
 console.log(filtro)

 let filtrosDos=nombres.filter(function(nombre){
    return(nombre.length>4)
 })
 console.log(filtrosDos)