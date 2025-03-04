import React from 'react'
// import { Link } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
// import { BrowserRouter, Routes, Route} from "react-router-dom"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './Components/Navbar'
import "bootstrap/dist/css/bootstrap.min.css";

const route = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar/>
        <Home/>
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Navbar/>
        <About/>
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <Navbar/>
        <Contact/>
      </>
    ),
  },
])


function App() {
  return (
    <>
      {/* <BrowserRouter>
      <Link/>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
      </BrowserRouter> */}
      <RouterProvider router={route}/>
    </>
  );
}

export default App