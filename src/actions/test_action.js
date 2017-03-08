// TODO 变量可以统一管理
const SUCCESS = 'SUCCESS';
const ERROR = 'ERROR';
const WARNING = 'WARNING';

const success = () => {
  return {
    type: SUCCESS,
    payload: {
       status: 'success',
    },
  }
}

const error = () => {
  return {
    type: ERROR,
    payload: {
      status: 'error',
    },
  }
}

const warning = () => {
  return {
    type: WARNING,
    payload: {
      status: 'warning',
    },
  }
}

export const dispatchSuccess = () => {
  return dispatch => dispatch(success());
}

export const dispatchError = () => {
  return dispatch => dispatch(error());
}

export const dispatchWaring = () => {
  return dispatch => dispatch(warning());
}


export default function testReducers(state = {}, action) {
  switch (action.type) {
    case SUCCESS:
    case ERROR:
    case WARNING:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}
