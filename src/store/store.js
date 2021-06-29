import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
  zipCode: '',
  data: {},
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'userLocation':
      return {
        zipCode: action.zipCode,
      };
    case 'yelpSearch':
      return {
        data: action.payload,
      };
    case 'restartApp':
      return initialState;
    default:
      return state;
  }
};

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

export const store = createStore(appReducer, composedEnhancer);
