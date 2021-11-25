import React, {useContext, useState, useEffect} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';



const FormTarea = () => {


     // Extraer si un proyecto esta activo
     const proyectosContext = useContext(proyectoContext);
     const {proyecto} = proyectosContext;

     // obtener la funcion del context de tarea
    const tareasContext = useContext(tareaContext); // todas los states y funciones disponibles en este Context
                                                    // todo lo relacionado a tareas
    const {tareaseleccionada, errortarea,obtenerTareas, agregarTarea, validarTarea, 
        actualizarTarea,limpiarTarea} = tareasContext;   

// Effect que detecta si hay un tarea seleccionada
    useEffect (() => {
        if (tareaseleccionada !== null) {  // si hay una tarea seleccionada
            guardarTarea(tareaseleccionada);
        } else {
            guardarTarea({
                nombre:''
            });

        };
    },[tareaseleccionada]); // sus dependencias como un arreglo

 console.log(errortarea)


    // state del formulario
    const [tarea, guardarTarea] = useState({
        nombre: ''
    });
   // console.log(tarea)
// extraer el nombre del proyecto
    const {nombre} = tarea;
 
// Si no hay proyecto seleccionado
    if (!proyecto)  return null;

// Array destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto;

    // leer  los valores del formulario
        const handleChange = evento => {
            guardarTarea({ ...tarea, [evento.target.name] : evento.target.value })
        };


    const onSubmit = evento => {
       evento.preventDefault();

        // validar
        if (nombre.trim() === '') {
            console.log(errortarea)
            validarTarea();
            return;
        };
      ///////// probando el codigo//////  
        // console.log(proyecto)
        // console.log(proyecto[0])
        //console.log(proyectoActual.id)
        //console.log(proyectoActual.nombre)
///////////////////////////////////////////

// revisar si es edicion o si es una nueva tarea
        if (tareaseleccionada === null) {   // tarea nueva
            //agregar la nueva tarea al state de tareas
            tarea.proyectoId = proyectoActual.id;
            tarea.estado = false;
            agregarTarea(tarea);
        } else {
            // actualizar tarea existente
            actualizarTarea(tarea);

            // elimina tarea seleccionada del state
            limpiarTarea();
        };

        // Obtener y filtrar las tareas del proyecto actual
        obtenerTareas(proyectoActual.id);

        // reiniciar el form
            guardarTarea({
                nombre:''
            });

    };

//console.log(tarea)
  return (
     <div className='formulario'>
         <form
            onSubmit= {onSubmit}
         >
             <div className='contenedor-input'>
                 <input
                    type='text'
                    className='input-text'
                    placeholder='Nombre Tarea...'
                    name='nombre'
                    value={nombre}
                    onChange= {handleChange}
                 />
             </div>

             <div className='contenedor-input'>
             <input
                    type='submit'
                     className='btn btn-primario btn-submit btn-block'
                     value= {tareaseleccionada ? 'Editar Tarea' : 'Agregar Tarea'}
                 />
             </div>
         </form>
         {errortarea ? <p className= 'mensaje error'>El nombre de la tarea es obligatorio</p>: null }
     </div>
  );
}

export default FormTarea;