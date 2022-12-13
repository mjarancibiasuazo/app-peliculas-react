import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage';


export const Crear = () => {

    const tituloComponente = "Añadir Pelicula";


    //ESTADO / destructuración de array
    const [ peliState, setPeliState ] = useState({
        titulo: '',
        descripcion: ''
    });
    
    //destructuración de objeto
    const { titulo, descripcion } = peliState;

    const conseguirDatosForm = e => {
        //previene la recarga al enviar el form
        e.preventDefault();

        //CAPTURAR DATOS DEL FORMULARIO
        let target = e.target;
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value;

        //alert(titulo + "-" + descripcion);

        //CREAR OBJETO DE LA PELICULA A GUARDAR

        let peli = {
            id: new Date().getTime(),
            titulo,
            descripcion
        };

        //GUARDAR ESTADO
        setPeliState(peli);

        //GUARDAR EN EL ALMACENAMIENTO LOCAL
        GuardarEnStorage("pelis", peli);
    
    }


    return (
        <div className="add">
            <h3 className="title">{tituloComponente}</h3>
            <strong>
            
            {(titulo && descripcion) && "Has creado la pelicula: "+titulo }

            </strong>
           
            <form onSubmit={conseguirDatosForm}>
                <input type="text"
                    id="titulo"
                    name="titulo"
                    placeholder="Titulo" />


                <textarea
                    id="descripcion"
                    name="descripcion"
                    placeholder="Descripción"></textarea>


                <input type="submit"
                    id="save"
                    value="Guardar" />
            </form>
        </div>

    )
}
