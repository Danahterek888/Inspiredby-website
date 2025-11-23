import aboutusimg from '../photo/aboutusphoto.jpg'
function Aboutus({section3}){
    return (
        <div>
            <section id="about" className="section">
               <h2 className='font-color font-width'>Who We Are?</h2>
               <div className='aboutussec'> 
                        <div className='parag'>Welcome to Inspired By, a platform devoted to guiding individuals toward meaningful careers that reflect their passions, strengths, and true potential We understand that 

</div>
                        <div>
                            <img src={aboutusimg} alt="aboutus" className="aboutusimg" /> 
                        </div>
               </div>
      
            </section>

        </div>
    )

}
export default Aboutus