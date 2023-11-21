import React from 'react';
import ReactDOM from 'react-dom/client'; 
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Cart from './pages/Cart.jsx';
import LoginSignup from './pages/LoginSignup.jsx';
import Home from './pages/Home.jsx';
import { Provider } from 'react-redux';
import { store } from './components/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Provider store={store}>

    <Router>
      <Routes>
        <Route
          path="/"
          element={ <Home /> } />
        <Route path="cart" element={<Cart />} />
        <Route path="login" element={<LoginSignup />} />
      </Routes>
    </Router>
          </Provider>
  </React.StrictMode>,
);



