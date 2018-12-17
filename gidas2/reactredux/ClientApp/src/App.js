import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import ConsejeriasList from './components/ConsejeriasList';
import ConsejeriaEdit from './components/ConsejeriaEdit';
import PacientesList from './components/PacientesList';

export default () => (
  <Layout>
    <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/consejerias' component={ConsejeriasList} />
        <Route path='/pacientes' component={PacientesList} />
        <Route path='/fetchdata/:startDateIndex?' component={FetchData} />
        <Route path='/consejeria/:id?' component={ConsejeriaEdit} />
  </Layout>
);
