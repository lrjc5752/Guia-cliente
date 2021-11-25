import React, { useReducer } from 'react';
import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import {
    FORMULARIO_PROYECTO, 
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTO,
    VALIDAR_FORMULARIO,
    PROYECTO_ACTUAL,
    ELIMINAR_PROYECTO
    } from '../../types';// como el archivo se llama  index.js no es necesario colocarlo
//import uuid from  'uuid/dist/v4';
import { v4 as uuidv4 } from 'uuid';




const ProyectoState = props => {

    const proyectos = [
        {id: 1, nombre: 'Tienda Virtual .net'},
        {id: 2, nombre: 'IntraNet .com'},
        {id: 3, nombre: 'Diseño de Sitio Web .www'},
        {id: 4, nombre: 'Diseño de Sofware Web .exe'}
     ];
    

    const initialState = {
         proyectos: [],
        formulario: false,
        errorformulario: false,
        proyecto: null
    };

    // Dispatch para ejecutar la acciones
    const [state, dispatch]  = useReducer(proyectoReducer, initialState);


    // serie de funciones para el CRUD 
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    };

// Obtener los proyectos
    const obtenerProyectos = () => { 
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos // el payload siempre va a ser lo que tome la funcion como parametro
        })
    };

// Agregar nuevo proyecto
    const agregarProyecto = proyecto => {
           // proyecto.id = uuid.v4();
            proyecto.id = uuidv4();
            
            // insertar el proyecto en el state
            dispatch({
                type: AGREGAR_PROYECTO,
                payload: proyecto
            });

    };

// validar el formulario por errores

    const mostrarError = () => {
     
        dispatch({
            type: VALIDAR_FORMULARIO
        });
    }

    //Selecciona el Proyecto donde el usuario dio click
    const proyectoActual = proyectoId => {
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: proyectoId
        })
    };
 
    // elimina un  proyecto
    const eliminarProyecto = proyectoId => {
        dispatch({
            type: ELIMINAR_PROYECTO,
            payload: proyectoId
        })
    }

    return(
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                errorformulario: state.errorformulario,
                proyecto: state.proyecto,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                mostrarError,
                proyectoActual,
                eliminarProyecto 
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
};

export default ProyectoState;