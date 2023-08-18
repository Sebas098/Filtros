let produto1={
    nombre:"papitas",
    precio:"2000",
    promocion:false,
}

let produto2={
    nombre:"detodito",
    precio:"2500",
    promocion:true,
}

let produto3={
    nombre:"Malta",
    precio:"2400",
    promocion:false,
}

let produto4={
    nombre:"Arroz",
    precio:"3000",
    promocion:true,
}

let produto5={
    nombre:"aceite",
    precio:"10000",
    promocion:true,
}


let produtos=[
    produto1,
    produto2,
    produto3,
    produto4,
    produto5,

    
           ]

   let filtro = produtos.filter(function(produtos){
return(produtos.promocion.precio >=2000)


})
console.log(produtos)


let filtroDos = produtos.filter(function(produtos){
    return(produtos.promocion === false && produtos.nombre === "Arroz" <3000)
    
    
    })
    console.log(produtos)

    
   let filtroTres = produtos.filter(function(produtos){
    return(produtos.promocion === false && produtos.nombre === "aceite" <10000)
    
    
    })
    console.log(produtos)