

import { Outlet, ScrollRestoration, useLocation} from 'react-router-dom'
import './App.css'
import Header from './Components/Common/Header/Header'
import Footer from './Components/Common/Footer/Footer'
import { useState } from 'react';
import { useEffect } from 'react';

const titleMap = [
    {path: '/', title:'Tasnimul Haque'},
    {path: '/about', title:'About - Tasnimul Haque'},
    {path: '/portfolio', title:'Portfolio - Tasnimul Haque'},
    {path: '/contact', title:'Contact - Tasnimul Haque'},
    {path: '/admin_login', title:'Login - Tasnimul Haque'},
    {path: '/addportfolio', title:'Add Portfolio - Tasnimul Haque'},
    {path: '/manageportfolio', title:'Manage Portfolio - Tasnimul Haque'},
    {path: '/*', title:'404 - Tasnimul Haque'},
]

function App() {

const [pageTitle, setPageTitle] = useState('Tasnimul Haque');
  let pageLoc = useLocation();
  useEffect(() => {
    const pageTitle = titleMap.find(item => item.path === pageLoc.pathname)
    if(pageTitle && pageTitle.title){
      setPageTitle(pageTitle.title)
      document.title = pageTitle.title
    }
  }, [pageLoc.pathname])

  return (
    <>
      <ScrollRestoration
        getKey={(location, matches) => {
        return location.pathname;
      }}/>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
