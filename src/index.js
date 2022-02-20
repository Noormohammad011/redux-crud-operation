import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import store from './store'
import App from './App'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)




// step 1--> connstant making-->OKY
// step 2--> import reducer -->OKY
// step 3--> stored reducer in store--> Oky
// step 4--> actions