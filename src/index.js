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
import { initData } from './services';

const initialState = [
  { id: "543553", title: 'To do', tasks: [] },
  { id: "543554", title: 'In progress', tasks: [] },
  { id: "543555", title: 'Complete', tasks: [] }
]

initData('trello', initialState)

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
