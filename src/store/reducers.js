import { combineReducers } from 'redux';
import testReducer from '../actions/test_action';
// 先加一个参数，方便以后代码分割
export const makeRootReducer = asyncReducers => 
  combineReducers({
    test: testReducer,
  })
