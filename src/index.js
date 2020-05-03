import React from 'react';
import ReactDOM from 'react-dom';
// import { Switch, Route } from 'react-router-dom';
import { Route, Link, BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import RentForm from './pages/RentForm/RentForm';
import RentDashboard from './pages/RentDashboard/RentDashboard';
import RentDetails from './pages/RentDetails/RentDetails';
import "bootstrap/dist/css/bootstrap.min.css";

// ReactDOM.render(
//   <React.StrictMode>
//     {/* <App /> */}
//     <RentDashboard/>
//     {/* <RentDashboard /> */}
//     {/* <RentDetails/> */}
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const routs = (
   < BrowserRouter >
         <Route exact path="/" component={RentDashboard} />
         <Route path="/dashboard" component={RentDashboard} />
         <Route path="/details" component={RentDetails} />
         <Route path="/form" component={RentForm} />
   </ BrowserRouter >
);
ReactDOM.render(routs, document.getElementById('root'))
//
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
