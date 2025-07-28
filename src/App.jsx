
import './App.css'
import LineChart from './Components/LineChart'
import Phones from './Components/Phones'

import PricesOprion from './Components/PricesOprion'
import Home from './Pages.jsx/Home'
import Contact from './Pages.jsx/Contact'
import Blog from './Pages.jsx/Blog'
import Login from './Pages.jsx/Login'
import NavBar from './Uilit/NavBar'
import Page404 from './Pages.jsx/page404'
import Layout from './Uilit/Layout';
import { createBrowserRouter, RouterProvider } from 'react-router'
import Details from './Pages.jsx/Details'


const router=createBrowserRouter([
      {
        path:'/',
        element:<Layout />,
        errorElement:<Page404 />,
        children:[
          {
            path:'/',
            element:<Home />
          },
          {
            path:'/blog',
            loader:()=> fetch('https://jsonplaceholder.typicode.com/posts'),
            element:<Blog />
          },
          {
            path:'/blog/:id',
            loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`),
            element:<Details />
          },
          {
            path:'/contact',
            element:<Contact />

          },
          {
            path:'login',
            element:<Login />
          },
        ]
      }
])

function App() {

  return <RouterProvider router={router} />
 
  
}

export default App
