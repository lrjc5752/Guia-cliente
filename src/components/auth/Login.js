import React, {useState} from 'react';
import {Link} from 'react-router-dom';



const Login = () => {

    // State para iniciar sesio
    const [usuario, guardarUsuario] = useState({
        email:'',
        password:''
    });
    // extraer de usuario
    const {email, password} = usuario;


    const onChange = evento => {
            guardarUsuario({
                ...usuario, [evento.target.name] : evento.target.value
            });
    };
        // cuandoel usuario quiere iniciar sesion
    const onSubmit = evento => {
        evento.preventDefault();
        
        // validar que no haya campos vacios

        // pasarlo al action

    };



  return (
    <div className='form-usuario'>
        <div className='contenedor-form sombra-dark'>
                <h1>Iniciar  Sesion</h1>
                <form
                    onSubmit={onSubmit}
                >
                    <div className='campo-form'>
                        <label htmlFor='email'>Email</label>
                        <input
                          type='email'
                          id='email'
                          name='email'
                          placeholder='Tu Email'
                          value={email}
                          onChange={onChange}
                        
                        />
                    </div>
                    <div className='campo-form'>
                        <label htmlFor='password'>Password</label>
                        <input
                          type='password'
                          id='password'
                          name='password'
                          placeholder='Tu Password'
                          value={password}
                          onChange={onChange}
                        
                        />
                    </div>
                    <div className='campo-form'>
                        <input
                            type='submit'
                            className='btn btn-primario btn-block'
                            value='Iniciar Sesion'
                        />

                    </div>
                </form>
                <Link to ={'/nueva-cuenta'} className='enlace-cuenta'>
                    Obtener Cuenta
                </Link>
        </div>
    </div>
  );
}

export default Login;
