import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import './index.css';
import AppRoutes from './routes';
import {Provider} from 'react-redux';
import store from './components/data/store';
import registerServiceWorker from './registerServiceWorker';

render(
      <Provider store={store}>
        <BrowserRouter> 
            <AppRoutes />
        </BrowserRouter>
       </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
