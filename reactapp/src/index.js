import React from 'react';
import ReactDOM from 'react-dom/client';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
// import store from './redux/store';
import Login from './components/Login';
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import Signup from './components/Signup';
import store from './redux/store';
import AdminLogin from './components/AdminLogin';




const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  
  <React.StrictMode>
    <Provider store={store}>
    
    
   <App/>
   </Provider>
   
    
   
    
   
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

