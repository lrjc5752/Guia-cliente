import React, { useReducer } from 'react';
import tareaContext from './tareaContext';
import tareaReducer from './tareaReducer';
import {
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA,
    LIMPIAR_TAREA
    } from '../../types';// como el archivo se llama  index.js no es necesario colocarlo
    import { v4 as uuidv4 } from 'uuid';

const TareaState = props => {


    const initialState = { // siempre el initialState va a ser un objeto, tambien es el state principal
        tareas: [
            {id:1, nombre:'Elegir Plataforma', estado: true, proyectoId: 1},
            {id:2,nombre:'Elegir Colores', estado: false, proyectoId: 2},
            {id:3,nombre:'Elegir Plataformas de pago', estado: false, proyectoId: 3},
            {id:4,nombre:'Elegir Hosting', estado: true, proyectoId: 4},
            {id:5,nombre:'Elegir Plataforma', estado: true, proyectoId: 1},
            {id:6,nombre:'Elegir Colores', estado: false, proyectoId: 2},
            {id:7,nombre:'Elegir Plataformas de pago', estado: false, proyectoId: 3},
            {id:8,nombre:'Elegir Plataforma', estado: true, proyectoId: 4},
            {id:9,nombre:'Elegir Colores', estado: false, proyectoId: 1},
            {id:10,nombre:'Elegir Plataformas de pago', estado: false, proyectoId: 2},
            {id:11,nombre:'Elegir Plataforma', estado: true, proyectoId: 3},
            {id:12,nombre:'Elegir Colores', estado: false, proyectoId: 4},
            {id:13,nombre:'Elegir Plataformas de pago', estado: false, proyectoId: 3},
        ],
        tareasproyecto: null,
        errortarea: false,
        tareaseleccionada:null
   };

   // Crear Dispatch y el state para ejecutar la acciones
   // destructuring de useReducer
   const [state, dispatch]  = useReducer(tareaReducer, initialState);
   
// CREAR  LAS funciones para el CRUD 


// Obtener las tareas de un proyecto
   const obtenerTareas = proyectoId => {
      // console.log(proyectoId)
       dispatch({
         type:TAREAS_PROYECTO,
         payload: proyectoId
       });
   };

// Agregar una tarea al proyecto seleccionado
    const agregarTarea = tarea => {
        //tarea.id = uuid.v4();
        tarea.id = uuidv4();
        dispatch({
        type:AGREGAR_TAREA,
        payload: tarea
        });
    };

//valida y muestra un error en caso de que sea necesario
    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA
            });
    };
//console.log(state.tareas)

// eliminar tarea por su id
    const eliminarTarea = id => {
        dispatch({
            type: ELIMINAR_TAREA,
            payload: id
            });
    };

// cambia el estado de cada tarea
const cambiarEstadoTarea = tarea => {
    dispatch({
        type: ESTADO_TAREA,
        payload: tarea
        });
};
// extrae una tarea para edicion
const guardarTareaActual = tarea => {
    dispatch({
        type: TAREA_ACTUAL,
        payload: tarea
        });
};

// edita o modifica una tarea
const actualizarTarea = tarea => {
    dispatch({
        type: ACTUALIZAR_TAREA,
        payload: tarea
        });
    };

// elimina la tarea seleccionada, limpia
const limpiarTarea = () => {
    dispatch({
        type: LIMPIAR_TAREA
        });
    };


console.log(state.errortarea)

   return(
    <tareaContext.Provider
        value={{        //  pasando hacia el context (tareaContext), para tener todo eso disponible
            tareas: state.tareas,
            tareasproyecto:  state.tareasproyecto,
            errortarea: state.errortarea,
            tareaseleccionada:state.tareaseleccionada,
            obtenerTareas,
            agregarTarea,
            validarTarea,
            eliminarTarea,
            cambiarEstadoTarea,
            guardarTareaActual,
            actualizarTarea,
            limpiarTarea
        }}
    >
        {props.children}
    </tareaContext.Provider>
    )
};

export default TareaState;