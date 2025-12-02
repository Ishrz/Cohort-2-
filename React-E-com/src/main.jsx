import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider }  from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Products from './components/Products.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import SingleProduct from './components/SingleProduct.jsx'
let router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'products',
        element:<Products/>
      },
      {
        path:'products/:id',
        element:<SingleProduct/>
      },
      {
        path:'about',
        element:<About/>
      }

    ]
  }

])


createRoot(document.getElementById('root')).render(
   <RouterProvider router={router}/>
)
