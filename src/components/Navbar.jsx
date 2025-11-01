import logo from '../photo/insplogo.png'
function Navbar({nav}){
    return (
    <div >
        <img src={logo} alt="Logo" className="logo" />
        <div  className="font nav ">
            {/* <div href="#home">Home page</div> */}
              <div><a href='#about'className='link'>About us</a></div>
               <div><a href='#ser'className='link'>Services</a></div>
            <div><a href='#pod'className='link'>Podcast</a></div>
           
          
        </div>
    </div>
)
}
export default Navbar