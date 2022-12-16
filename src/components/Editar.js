import React from 'react'


//destructuración de las pro
export const Editar = ({peli, conseguirPeliculas, setEditar, setListadoState}) => {
    const titulo_componente = "Editar pelicula";

    const guardarEdicion = (e, id) => {
        e.preventDefault();

      //Conseguir el target del evento (conseguir el formulario)
      let target = e.target;
      //console.log(target);

      //Buscar el indice del objeto de la pelicula a actualizar
      const pelis_almacenadas = conseguirPeliculas();
        console.log(pelis_almacenadas);

        //Buscar el id del indice del objeto con la base del id que le estoy pasando
        const indice = pelis_almacenadas.findIndex(peli => peli.id === id);

        console.log(indice);

        //Crear un onjeto con el indice que le estamos pasando
            let peli_actualizada = {
                id,
                titulo: target.titulo.value, //sacamos la info del campo titulo formulario
                descripcion: target.descripcion.value
            };

            console.log(indice, peli);

            //Actualizar el elemento con ese indice(amachacar la info y meterle el nuevo objeto)
            pelis_almacenadas[indice] = peli_actualizada;
            console.log(pelis_almacenadas);

            //Guardar el nuevo array de objetos en el localStorage
                //nuevo objeto sobre escriba al anterior
                localStorage.setItem("pelis", JSON.stringify(pelis_almacenadas));

            //Actualizar el estado
            setListadoState(pelis_almacenadas);
            setEditar(0);

    }


    return (
        <div className='edit_form'>

            <h3 className="title">{ titulo_componente }</h3>
            <form onSubmit={ e => guardarEdicion(e, peli.id) }>
                <input type="text"
                        name="titulo"
                        className="titulo_editado"
                        defaultValue={ peli.titulo } />

                <textarea
                        name="descripcion"
                        defaultValue={ peli.descripcion }
                        className="descripcion_editada" />

                    <input type="submit" className="editar" value="Actualizar" />

            </form>
        </div>
    )
}
