import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import Cart from './pages/Cart.jsx';
import LoginSignup from './pages/LoginSignup.jsx';
import Home from './pages/Home.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "cart",
    element: <Cart/>,
  },
  {
    path: "login",
    element: <LoginSignup/>
  }
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)


