import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css'
import './styles/grid.css'
import './styles/typography.css'
import App from './components/App';
import { createStore } from 'redux';
import rootReducer from './redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(
  rootReducer,
  composeWithDevTools()
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
