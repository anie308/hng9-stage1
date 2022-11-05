import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Contact from './pages/Contact';
import Home from './pages/Home';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
 return(
  <>
  <Router>
    <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/contact' element={<Contact/>}/>
    </Routes>
  </Router>
  <ToastContainer />
  </>
  );
}

export default App;
