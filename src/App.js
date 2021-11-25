import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Proyectos from './components/proyectos/Proyectos';
import ProyectoState from './context/proyectos/proyectoState';
import TareaState from './context/tareas/tareaState';


function App() {
  return (
    <ProyectoState> 
      <TareaState>
        <Router>
          {/* todo lo que este aqui va a ser visto por cada una de las diferentes paginas */}

          <Switch>
            {/* todo lo que este aqui va a ser cada una de las diferentes paginas */}

              <Route exact path='/' component={Login} />
              <Route exact path='/nueva-cuenta' component={NuevaCuenta} />
              <Route exact path='/proyectos' component={Proyectos} />

          </Switch>

        </Router>
      </TareaState>
    </ProyectoState>
  );
}

export default App;
