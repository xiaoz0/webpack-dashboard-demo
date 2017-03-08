import Layout from 'component/layout';
// 路由
import TestRouter from './test';
import ButtonRouter from './button';

const routers = (store) => ({
  childRoutes: [
    {
      path: '/',
      component: Layout,
      childRoutes: [
        TestRouter(store),
        ButtonRouter(store),
      ]
    },
  ],
});

export default routers