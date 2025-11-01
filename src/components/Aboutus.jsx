import aboutusimg from '../photo/aboutusphoto.jpg'
function Aboutus({section3}){
    return (
        <div>
            <section id="about" className="section">
               <h2>About Us</h2>
               <div className='aboutussec'> 
                        <div className='parag'>Welcome to Inspired By, a platform devoted to guiding individuals toward meaningful careers that reflect their passions, strengths, and true potential We understand that choosing a career can be overwhelming, confusing, or even intimidating. There are countless options, opinions, and pressures, and navigating them without guidance can feel like wandering in the dark. That’s where we come in. At Inspired By, we provide clarity, insight, and actionable strategies to help you find a path that isn’t just a job—but a journey of purpose and fulfillment.

Our platform was created with one simple belief: the best careers are not chosen by chance—they are Inspired By your unique strengths, interests, and aspirations. We combine inspiration with practical guidance, ensuring that you have both the motivation and the tools to make confident career decisions.

Our Mission
Our mission is to empower every individual to explore, discover, and pursue a career that aligns with their true self. We aim to break the barriers of uncertainty, helping you uncover opportunities you may not have considered and equipping you with the knowledge to make informed choices. Whether you are a student exploring your first steps, a recent graduate navigating the professional world, or a working professional considering a career change, Inspired By is your partner in growth and self-discovery.

What We Offer</div>
                        <div>
                            <img src={aboutusimg} alt="aboutus" className="aboutusimg" /> 
                        </div>
               </div>
      
            </section>

        </div>
    )

}
export default Aboutus