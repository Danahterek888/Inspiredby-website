import logo from '../assets/photo/logo2.png'
import lamp from '../assets/photo/lamp1.png'
import {Link} from 'react-router-dom'
function Navbar({nav}){
    return (
    <div >

        <div className='header-section'>
            <div className='background-color nav '>
            <div >
               <Link to='/'><img src={logo} alt="Logo" className="logo padding" /></Link>
               </div>
                 
            
           
            <div  className="font nav nav-links padding">
                  <div>
                    <a href='#about'className='link'>About us</a>
                  </div>
                  <div>
                    <a href='#ser'className='link'>Services</a>
                     </div>
                  <div>
                    <a href='#pod'className='link'>Our Podcast</a>
                  </div>
                  <div>
                    <Link style={{textDecoration: 'none', color:'white'}}  to='/contact'>Contact Us</Link>
                  </div>
                  <div>
                    <a href='#pod'className='link' ><b>AR</b></a>
                  </div>
            </div>
            </div>
             <div className='container'>
                      <div> <img src={lamp} alt="lamp" className='lamp ' /></div>
                      <div className='f800'><h1>
                         Your future isn’t a guess.<br />
                        It’s a strategy<br />
                        Let’s map it out!</h1>
                      </div>
                      <div>
                      <button className='btn-services-button font f800'>View services</button>
                      </div>
                  </div>
            
            
        
        </div>
      
    </div>

)
}
export default Navbar