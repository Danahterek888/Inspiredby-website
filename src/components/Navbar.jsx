import logo from '../photo/insplogo.png'
import {Link} from 'react-router-dom'
function Navbar({nav}){
    return (
    <div className='background-color nav '>
        <Link to='/'><img src={logo} alt="Logo" className="logo padding" /></Link>
        <div  className="font nav-links padding">
              <div><a href='#about'className='link'>About us</a></div>
              <div><a href='#ser'className='link'>Services</a></div>
              <div><a href='#pod'className='link'>Our Podcast</a></div>
              <div><Link to='/contact'>Contact Us</Link>
              <div><a href='#pod'className='link' ><b>AR</b></a></div>
        </div>
    </div>
    </div>
)
}
export default Navbar