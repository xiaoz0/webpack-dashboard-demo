import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router } from 'react-router';
import CreateRouters from './views/router';

const MOUNT_NODE = document.getElementById('root'); // 获取应用启动节点
const routes = CreateRouters();
ReactDOM.render(
    <div style={{ height: '100%' }}>
      <Router history={browserHistory} routes={routes} />
    </div>, 
    MOUNT_NODE
);
