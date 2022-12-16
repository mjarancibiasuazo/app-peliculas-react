

import React, { useState } from 'react'

//listadoState (array de pelis para sacar los datos/ setListadoState método para guardar cosas en el mismo estado )
export const Buscador = ({listadoState, setListadoState}) => {

    //ESTADOS
    const [busqueda, setBusquedaState] = useState('');
    const [noEncontrado, setNoEncontradoState] = useState(false);


    const buscarPeli = (e) => {
        //Crear estado y actualizarlo
        setBusquedaState(e.target.value);

        console.log(busqueda);

        //filtrar para buscar cualquier coincidencias

        let pelis_encontradas = listadoState.filter(peli => {
            return peli.titulo.toLowerCase().includes(busqueda.toLocaleLowerCase());

        });

        if(busqueda.length <=1 || pelis_encontradas <= 0){
            pelis_encontradas = JSON.parse(localStorage.getItem("pelis"));
            setNoEncontradoState(true);
        }else{
            setNoEncontradoState(false);
        }

        //console.log(pelis_encontradas);

        //Actualizar el estado del listado principal con lo que he logrado filtrar
        setListadoState(pelis_encontradas);
    }





    return (
        <div className="search">
            <h3 className="title">Buscador: { busqueda }</h3>

            {(noEncontrado == true && busqueda.lenght > 1) && (
                <span className='no-encontrado'>No se ha encontrado ninguna coincidencia</span>
            )}
            
            
            <form>
                <input type="text" 
                        id="search_field"
                        name="busqueda"
                        autoComplete="off"
                        onChange={ buscarPeli }
                />


                <button>Buscar</button>
            </form>
        </div>

    )
}
