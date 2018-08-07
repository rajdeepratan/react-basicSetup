import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import registerServiceWorker from './registerServiceWorker';
import { browserHistory } from 'react-router';
import { AppContainer } from 'react-hot-loader';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootSaga from './sagas';
import reducer from './ducks';
import thunk from 'redux-thunk';
import { syncHistoryWithStore } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(sagaMiddleware, thunk)
));

const routerHistory = syncHistoryWithStore(browserHistory, store, {selectLocationState: state => state.get('router')});


sagaMiddleware.run(rootSaga);

const rootEl = document.getElementById('root');

const render = Component =>
  ReactDOM.render(
    <AppContainer errorReporter={Error}>
      <Provider store={store}>
        <Component routerHistory={routerHistory} />
      </Provider>
    </AppContainer>,
    rootEl
  );

render(Routes);

registerServiceWorker();
