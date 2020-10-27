import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import rootReducer from '@/redux/reducers';

export const history = createBrowserHistory();

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [];

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger();
  middlewares.push(logger);
}

const enhancers = composeEnhancers(
  applyMiddleware(...middlewares, thunk),
);

const store = createStore(rootReducer, enhancers);

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('@/redux/reducers', () => {
    // eslint-disable-next-line global-require
    const nextReducer = require('@/redux/reducers').default;

    store.replaceReducer(nextReducer);
  });
}

export default store;
