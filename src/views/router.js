import Layout from 'component/layout';
// 路由
import TestRouter from './test';

const routers = (store) => ({
  childRoutes: [
    {
      path: '/',
      component: Layout,
      childRoutes: [
        TestRouter(store),
      ]
    },
  ],
});

export default routers