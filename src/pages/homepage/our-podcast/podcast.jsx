import video from '../../../assets/video/podcastvd.mp4'
function Podcast({section}){
    return (
        <div>
            <section id="pod" className="section containers">
               <h2 className='font-color font-width'>Podcast</h2>
               <div className='video-container'>
                <video className='video'
                src={video}
                type='video/mp4'
                data-testid="podcast-video" // <-- add this
                
                >

                </video>
               </div>
               <p className='video-subtitle'>Inspired By is a dynamic and engaging YouTube channel dedicated to presenting a powerfullllllllllllll.</p>
            </section>

        </div>
    )

}
export default Podcast