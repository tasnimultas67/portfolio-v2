import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Pages/Home/Home.jsx';
import Contact from './Components/Pages/ContactMe/Contact.jsx';
import Portfolio from './Components/Pages/Portfolio/Portfolio.jsx';
import AboutMe from './Components/Pages/AboutMe/AboutMe.jsx';
import NotFound from './Components/NotFound/NotFound.jsx';
import AddPortfolio from './Components/Pages/AddPortfolio/AddPortfolio.jsx';
import ManagePortfolio from './Components/Pages/ManagePortfolio/ManagePortfolio.jsx';
import UpdatePortfolio from './Components/Pages/UpdatePortfolio/UpdatePortfolio.jsx';
import Login from './Components/Pages/Login/Login.jsx';
import AuthProviders from './Components/Providers/AuthProviders.jsx';
import PrivateRoutes from './Components/Routes/PrivateRoutes.jsx';
import SinglePortfolio from './Components/Pages/SinglePortfolio/SinglePortfolio.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound/>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/about",
        element: <AboutMe />
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
        loader: () => fetch('https://portfoliobackendserver-tasnimul.up.railway.app/portfolio')
      },
      {
        path: "/portfolio/:id",
        element: <SinglePortfolio />,
        loader: ({ params }) => fetch(`https://portfoliobackendserver-tasnimul.up.railway.app/portfolio/${params.id}`)
      },
      {
        path: "/contact",
        element: <Contact />
      },
      
      {
        path: "/admin_login",
        element: <Login />
      },
      {
        path: "/addportfolio",
        element: <PrivateRoutes><AddPortfolio/></PrivateRoutes>
      },
      {
        path: "/manageportfolio",
        element: <PrivateRoutes><ManagePortfolio /></PrivateRoutes>,
        loader: () => fetch('https://portfoliobackendserver-tasnimul.up.railway.app/portfolio')
      },
      {
        path: "/portfolio/update/:id",
        element: <PrivateRoutes><UpdatePortfolio /></PrivateRoutes>,
        loader: ({params}) => fetch(`https://portfoliobackendserver-tasnimul.up.railway.app/portfolio/${params.id}`)
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router}>
      </RouterProvider>
    </AuthProviders>
  </React.StrictMode>,
)
