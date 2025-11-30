import { useState } from 'react'


import {Routes,Route} from 'react-router-dom'
import './assets/fonts/LeagueSpartan-Regular.ttf';
import './index.css'
import './App.css'
import './styles/nav.css'
import './styles/footer.css'
import './pages/homepage/aboutus/Aboutus.css'
import './pages/homepage/services/Services.css'
import './pages/homepage/our-podcast/Podcast.css'
import './styles/container.css'
import './styles/font.css'
import Navbar from "./components/Navbar.jsx"
import Podcast from "./pages/homepage/our-podcast/podcast.jsx"
import Services from "./pages/homepage/services/Services.jsx"
import Aboutus from "./pages/homepage/aboutus/Aboutus.jsx"
import Footer from "./components/footer.jsx"
import Contactus from "./pages/contactus/Contactus.jsx"
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
        
        <Route path="/Contact"  element={<Contactus/>}/>
        
        </Routes>
        
        </div>
        <div><Footer/></div>
      </div>
      
        
    </>
  );
}


export default App
