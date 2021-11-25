import React, {Fragment, useContext, useState} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {

    // Obtener el state del formulario
    const proyectosContext = useContext(proyectoContext);
    const {formulario, errorformulario, mostrarFormulario, agregarProyecto, mostrarError} = proyectosContext;

    // state para proyecto
    const [proyecto,guardarProyecto] = useState({
        nombre:''
    });
    // extraer nombre de proyecto
    const {nombre} = proyecto;

// lee los contenidos del input
    const onChangeProyecto = evento => {
        guardarProyecto({
            ...proyecto, [evento.target.name] : evento.target.value
        });
    };
//cuando elusuario envia un proyecto
    const onSubmitProyecto = evento => {
            evento.preventDefault();

            // validar el  proyecto
        if (nombre === '') {
            mostrarError();
            return;
        }
            //agregar al state
            agregarProyecto(proyecto);


            //reiniciar el form 
            guardarProyecto({
                nombre: ''
            });
    };

    // Mostrar el formulario
    const onClickFormulario = () => {
        mostrarFormulario();
    };

  return (
      <Fragment> 
            <button
                type='button'
                className='btn  btn-block btn-primario'
                //  onClick={()=> mostrarFormulario()} 
                 onClick = {onClickFormulario}
            >
                Nuevo Proyecto
           </button>
            { formulario ?
            (
                <form
                    className='formulario-nuevo-proyecto'
                    onSubmit={onSubmitProyecto}
                    >
                    <input
                        type ='text'
                        className='input-text'
                        placeholder='Nombre Proyecto'
                        name='nombre'
                        value={nombre}
                        onChange= {onChangeProyecto}
                    />
                    <input
                        type='submit'
                        className='btn btn-primario btn-block'
                        value='Agregar Proyecto'
                    />
                    </form>
            )
            : null
            }
           { errorformulario ? <p className='mensaje error'>El nombre del Proyecto es obligatorio</p> : null }
     </Fragment>
  );
}

export default NuevoProyecto;

