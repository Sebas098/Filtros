let estudiante1={
    nombre:"Juan",
    cedula:"1033177876",
    promedio:4.2,
    estado:false

}
    let estudiante2={
        nombre:"Sandra",
        cedula:"103312357876",
        promedio:3.4,
        estado:true
    }
     let estudiante3={
            nombre:"Juan",
            cedula:"1033177876",
            promedio:4.2,
            estado:true
        }

            let estudiante4={
                nombre:"Juan",
                cedula:"1033177876",
                promedio:4.2,
                estado:true
            }
                let estudiante5={
                    nombre:"Juan",
                    cedula:"1033177876",
                    promedio:4.2,
                    estado:false

                }


    let estudiantes=[
     estudiante1,
     estudiante2,
     estudiante3,
     estudiante4,
     estudiante5,
     
            ]

    let filtro = estudiantes.filter(function(estudiante){
return(estudiante.promedio >=3.5)

})

let filtroDos = estudiantes.filter(function(estudiante){
    return(estudiante.promedio <4.5 && estudiante.estado==false)})


