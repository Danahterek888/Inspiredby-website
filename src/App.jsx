import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './css/nav.css'
import './css/footer.css'
import Navbar from "./components/Navbar.jsx"
import Podcast from "./components/podcast.jsx"
import Services from "./components/Services.jsx"
import Aboutus from "./components/Aboutus.jsx"
import Footer from "./components/footer.jsx"
function App() {
  return ( 
    <>
       <Navbar />
    <div style={{padding:"5%"}}>
 
    <Podcast/>
    <Services/>
    <Aboutus/>
  
    </div>
    <Footer/>
    </>
  );
}


export default App
