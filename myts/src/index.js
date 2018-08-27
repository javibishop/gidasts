import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import './index.css';
import AppRoutes from './routes';

import registerServiceWorker from './registerServiceWorker';

render(<BrowserRouter> 
        <AppRoutes />
       </BrowserRouter>,
    document.getElementById('root')
);
registerServiceWorker();
