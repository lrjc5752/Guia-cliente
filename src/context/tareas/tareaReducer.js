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




export default (state, action) => {
    switch (action.type) {
         
            case TAREAS_PROYECTO:
             //console.log(action.payload)
             //console.log(state.tareas)
            //console.log(action.type)
            return {
                ...state, 
                tareasproyecto: state.tareas.filter(tarea => tarea.proyectoId === action.payload)
            }
            case AGREGAR_TAREA:
            return {
                ...state, 
                tareas: [action.payload, ...state.tareas ],
                errortarea:false
            }
            case VALIDAR_TAREA:
                console.log(state.errortarea)
                return {
                    ...state, 
                    errortarea: true
                }
            case ELIMINAR_TAREA:
                //console.log(action.payload)
                return {
                    ...state, 
                    tareas: state.tareas.filter(tarea => tarea.id !== action.payload)
                }
            case ACTUALIZAR_TAREA:
            case ESTADO_TAREA:
               // console.log(action.payload)
                return {
                    ...state, 
                    //tareas: state.tareas.map(tarea => tarea.id === action.payload.id ? action.payload : tarea)
                    tareas: state.tareas.map(tarea => tarea.id === action.payload.id ? action.payload : tarea),
                    // tareaseleccionada: null // una forma de limpiar la tarea del state LIMPIAR_TAREA
                }
            case TAREA_ACTUAL:
                return {
                    ...state, 
                    tareaseleccionada: action.payload
                }
                // case ACTUALIZAR_TAREA: // como son iguales podemos unirlo con ESTADO_TAREA
                 // return {
                //     ...state, 
                //     tareas: state.tareas.map(tarea => tarea.id === action.payload.id ? action.payload : tarea)
                // }
            case LIMPIAR_TAREA:
                return {
                        ...state, 
                       tareaseleccionada: null,
                       errortarea:false
                    }
       default:
           return state;
   }
}