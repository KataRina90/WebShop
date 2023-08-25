import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import React from 'react';
import Home from './Components/Home';
import About from './Components/About'
import Men from './Components/Men'
import Women from './Components/Women'
import Kids from './Components/Kids'
import {Route, Routes} from "react-router-dom"

function App() {
/*   let Component
  switch (window.location.pathname) {
    case "/":{
      Component=Home;
      break;
    }

    case "/about":{
      Component=About;
    break;}

    case "/men": {
      Component=Men;
    break;}
   
    case "/women": {
      Component=Women;
    break;}
  
    case "/kids": {
      Component=Kids;
      break;
  }
  default:
    Component = () => <div>404 Not Found</div>;} */
  return (<>  
 <Navbar/>
 <Routes> 
  <Route path='/' element={<Home/>}/>
  <Route path='/women' element={<Women/>}/>
  <Route path='/men' element={<Men/>}/>
  <Route path='/kids' element={<Kids/>}/>
  <Route path='/about' element={<About/>}/>
  </Routes>
  </>)
}
export default App
