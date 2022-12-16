import React, { useEffect, useState } from 'react'
import { Editar } from './Editar';

export const Listado = ({listadoState, setListadoState}) => {

    const [editar, setEditar] = useState(0);

    //HOOKS QUE EJECUTA EL MÉTODO CONSEGUIRPELICULAS
    useEffect(() => {

        console.log("Componentes del listado de peliculas cargado!!!");
        conseguirPeliculas();

    }, []);//indica que se ejecuta 1 vez el componente.


    //MÉTODO QUE SACA INFORMACIÓN DEL LOCALSTORAGE
    const conseguirPeliculas = () => {
        let peliculas = JSON.parse(localStorage.getItem("pelis"));

        setListadoState(peliculas);

        return peliculas;
    }

    //FUNCIÓN QUE BORRA PELI
    const borrarPeli = (id) => {
       // conseguir peliculas almacenadas

       let pelis_almacenadas = conseguirPeliculas();

       //Filtrar esas peliculas para que elimine del array lo que no quiero

       let nuevo_array_pelis = pelis_almacenadas.filter(peli => peli.id !== parseInt(id));
        console.log(pelis_almacenadas, nuevo_array_pelis);
       
        //Actualizar estado del listado
       setListadoState(nuevo_array_pelis);
       
       //Actualizar los datos en el localStorage
       localStorage.setItem('pelis', JSON.stringify(nuevo_array_pelis));

    }

    return (
        <>
            {listadoState != null ?
                listadoState.map(peli => {

                    return (
                        <article key={peli.id} className="peli-item">
                            <h3 className="tittle">{peli.titulo}</h3>
                            <p className="descripcion">{peli.descripcion}</p>

                            <button className="edit" onClick={ () => setEditar(peli.id)}>Editar</button>
                            <button className="delete" onClick={ () => borrarPeli(peli.id)}>Borrar</button>

                            {/*aparece formulario de editar*/}
                            { editar === peli.id && (
                                
                                
                                <Editar peli={peli} 
                                        conseguirPeliculas={ conseguirPeliculas }
                                        setEditar={ setEditar }
                                        setListadoState={ setListadoState }
                                />

                            )}

                        </article>

                    );

                })

            : <h2>No hay peliculas para mostrar</h2>
        }

        </>
    )
}
