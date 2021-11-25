import React, {useContext, useEffect} from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';
import {TransitionGroup, CSSTransition} from 'react-transition-group';



const ListadoProyectos = () => {


// extraer proyectos de state inicial
    const proyectosContext = useContext(proyectoContext);
    const {proyectos, obtenerProyectos} = proyectosContext;

    // este arreglo se utilizo al principio, luego lo pasamos a proyectoState.js
    // const proyectos = [
    //     {nombre: 'Tienda Virtual'},
    //     {nombre: 'IntraNet'},
    //     {nombre: 'Diseño de Sitio Web'}
    // ];


// obtener proyectos cuando carga el componente
    useEffect (() => { // siempre es una arrow function,antes del useEffect nunca debe haber un return (da un error)
        obtenerProyectos();

        // el comentario de abajo es para quitar la warning, la advertencia de la dependencia
        // eslint-disable-next-line
    },[]); 

     // revisar si proyectos tiene contenido
    if (proyectos.length === 0) return <p>No hay proyectos comienza creando uno</p>;

    

  return (
     <ul className='listado-proyectos'>
           <TransitionGroup>
           {proyectos.map(proyecto => (
                <CSSTransition
                     key={proyecto.id}
                     timeout={200}
                     classNames='proyecto'
                >
                    <Proyecto
                    proyecto={proyecto}
                />
                </CSSTransition>
            ))}
           </TransitionGroup>
     </ul>
  );
}

export default ListadoProyectos;

// {proyectos.map(proyecto => (
//     <Proyecto
//         key={proyecto.id}
//         proyecto={proyecto}
//     />
// ))}
