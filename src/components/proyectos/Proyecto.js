import React, {useContext} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';


const Proyecto = ({proyecto}) => {

 // Obtener el state de proyectos
 const proyectosContext = useContext(proyectoContext); // todo lo relacionado a proyectos disponibles en este Context
 const {proyectoActual} = proyectosContext;


 // obtener la funcion del context de tarea
 const tareasContext = useContext(tareaContext); // todas los states y funciones disponibles en este Context
                                                   // todo lo relacionado a tareas
                                                   
//console.log(tareasContext)
   const {obtenerTareas} = tareasContext;   


// funcion para agregar el proyecto actual
const seleccionarProyecto = id => {
   proyectoActual(id); // fijar un proyecto actual
   obtenerTareas(id); // filtrar las tareas cuando  se de click


};


  return (
     <li>
         <button
            type='button'
            className='btn btn-black'
            onClick= {() => seleccionarProyecto(proyecto.id)}
          >  
          {proyecto.nombre}
         </button>
     </li>
  );
}

export default Proyecto;
