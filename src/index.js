import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './app/store';
import { fetchData } from './features/fetchData/fetchData'

store.dispatch(fetchData());
const render = () => {
  console.log('state changed')
  ReactDOM.render(
    <App
      state={store.getState()}
      dispatch={store.dispatch}
      store={store}
    />,
    document.getElementById('root')
  );
}
store.subscribe(render);
render();
