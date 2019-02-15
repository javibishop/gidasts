import React from 'react';
import {Route, Switch} from 'react-router-dom';

import App from './components/global/App';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Page404 from './components/Page404';
import PacientesList from './components/Pacientes/index';
import PacientesView from './components/Pacientes/view';
import PacienteNew from './components/Pacientes/new';

const AppRoutes = () => 
    <App>
        <Switch>
        {/* <Route exact (y saco el switch) path="/about" component= {About} /> */}
            <Route exact path="/about" component= {About} />
            <Route exact path="/contact" component= {Contact} />
            <Route exact path="/paciente/view/:id" component= {PacientesView} /> 
            <Route exact path="/paciente/new" component= {PacienteNew} /> 
            <Route exact path="/pacientes/" component= {PacientesList} />
            <Route exact path="/" component= {Home} />
            <Route component= {Page404} />

        </Switch>
    </App>;


export default AppRoutes;