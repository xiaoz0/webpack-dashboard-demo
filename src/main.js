import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router } from 'react-router';
import { Provider } from 'react-redux';
import CreateRouters from './views/router';
import CreateStore from './store/CreateStore';

// dom 
const MOUNT_NODE = document.getElementById('root'); 

// store 
const initialState = window.__INITIAL_STATE__;
const store = CreateStore(initialState);

const routes = CreateRouters();
ReactDOM.render(
    <Provider store={ store }>
      <div style={{ height: '100%' }}>
        <Router history={browserHistory} routes={routes} />
      </div>
    </Provider>, 
    MOUNT_NODE
);
