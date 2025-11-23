import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Routes,Route} from 'react-router-dom'
import './fonts/LeagueSpartan-Regular.ttf';
import './index.css'
import './App.css'
import './css/nav.css'
import './css/footer.css'
import './css/Aboutus.css'
import './css/Services.css'
import './css/Podcast.css'
import './css/container.css'
import './css/font.css'
import Navbar from "./components/Navbar.jsx"
import Podcast from "./components/podcast.jsx"
import Services from "./components/Services.jsx"
import Aboutus from "./components/Aboutus.jsx"
import Footer from "./components/footer.jsx"
import Contactus from "./components/Contactus.jsx"
function App() {
  return ( 
    
    <><div>
      <div><Navbar/></div>
      <div className='container'>
       <Routes>
        <Route path='/' element={
        <div  >
            <div>
              <Aboutus/>
            </div>

            <div>
              <Services/>
            </div>
   
            <div>
              <Podcast/>
            </div>
        </div>}/>

        <Route path="/Contact" element="{<Contactus/>" />
        </Routes>
        
        </div>
        <div><Footer/></div>
      </div>
      
        
    </>
  );
}


export default App
