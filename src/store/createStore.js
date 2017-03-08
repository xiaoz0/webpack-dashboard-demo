import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import { makeRootReducer } from './reducers';

export default (initialState = {}) => {
  // 中间件列表
  const middleware = [thunk];
  // store 插件 
  const enhancers = [];
  enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

  // 创建 store
  const store = createStore(
    makeRootReducer(),
    initialState,
    compose(
      applyMiddleware(...middleware),
      ...enhancers
    )
  );

  // 目前场景还不需要
  // TODO 需要动态部署 
  return store;
};
