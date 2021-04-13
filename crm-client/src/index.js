import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import store from '../src/ducks/store';
// import * as actions from '../src/ducks/actionTypes';
//import { contactsReceived, contactByIdReceived, contactAdded,contactDeleted } from '../src/ducks/actions';


// const unsubscribe = store.subscribe(()=> {
//   console.log("sore changed - ", store.getState());
// });

// store.dispatch (contactsReceived());

// store.dispatch(contactByIdReceived(496403));
// store.dispatch(contactAdded());
// unsubscribe();

// store.dispatch(contactDeleted(1001));



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
