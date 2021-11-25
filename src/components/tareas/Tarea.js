import React, {useContext} from 'react';
import tareaContext from '../../context/tareas/tareaContext';
import proyectoContext from '../../context/proyectos/proyectoContext';


const Tarea = ({tarea}) => {


     // Extraer si un proyecto esta activo
     const proyectosContext = useContext(proyectoContext);
     const {proyecto} = proyectosContext;

    // obtener la funcion del context de tarea
    const tareasContext = useContext(tareaContext); // todas los states y funciones disponibles en este Context
    // todo lo relacionado a tareas
    const {cambiarEstadoTarea, eliminarTarea, obtenerTareas, guardarTareaActual} = tareasContext;

    //extraer el proyecto
    const [proyectoActual] = proyecto;

    //console.log(proyectoActual);

  // funcion que se ejecuta cuando el usuario presiona el boton de eliminar tarea
    const tareaEliminar = id => {
      eliminarTarea(id);
     // obtenerTareas(proyecto[0].id);
      obtenerTareas(proyectoActual.id);
    };

//funcion que modifica el estado de las tareas
    const cambiarEstado = tarea => {

      if (tarea.estado) {
        tarea.estado = false;
      } else {
        tarea.estado = true;
      }
      cambiarEstadoTarea(tarea);
     
    };
    
//agrega una tarea actual cuando el usuario desea editarla
    const seleccionarTarea = tarea => {
      guardarTareaActual(tarea);
    
    };




  return (
      <li className='tarea sombra'> 
        <p>{tarea.nombre}</p>
        <div className='estado'>
            {tarea.estado 
            ?
            (
                <button
                  type='button'
                  className='completo'
                  onClick={() => cambiarEstado(tarea)}
                >Completo</button>
            )
            :  
            (
                <button
                  type='button'
                  className='incompleto'
                  onClick={() => cambiarEstado(tarea)}
                >Incompleto</button>
            )  
            }

        </div>
        <div className='acciones'>
                 <button
                  type='button'
                  className='btn btn-primario'
                  onClick={() => seleccionarTarea(tarea)}
                >Editar</button>

                 <button
                  type='button'
                  className='btn btn-secundario'
                  onClick={( () => tareaEliminar(tarea.id))}
                >Eliminar</button>
        </div>
     </li>
  );
}

export default Tarea;