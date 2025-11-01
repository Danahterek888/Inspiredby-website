import video from '../video/podcastvd.mp4'
function Podcast({section}){
    return (
        <div>
            <section id="pod" className="section containers">
               <h2>Podcast</h2>
               <div>
                <video 
                src={video}
                type='video/mp4'
                width='300'
                controls>

                </video>
               </div>
               <p>Inspired By is a dynamic and engaging YouTube channel dedicated to presenting a powerful podcast designed specifically to help students, especially high schoolers, navigate the often overwhelming process of choosing a career path that truly fits who they are. Recognizing that every student is unique, with their own personality traits, interests, and strengths, the Inspired By podcast takes a personalized approach to career exploration and guidance. Rather than offering generic advice, the podcast dives deep into helping students understand themselves better so they can make confident, informed decisions about their futures.

Each episode features fascinating, in-depth conversations with industry experts, professionals, and thought leaders from a wide range of fields—from technology and healthcare to arts and education. These guests share not only the day-to-day realities of their careers but also their personal journeys, the challenges they faced, and valuable insights that can only come from experience. By hearing directly from people who have walked the paths students are considering, listeners gain a clearer, more realistic picture of what different careers entail and what it takes to succeed.

Beyond just career descriptions, Inspired By offers practical advice, tips on developing relevant skills, and strategies for overcoming common fears and doubts that many students face when thinking about their futures. The podcast also emphasizes the importance of aligning career choices with one’s core values and passions, encouraging students to pursue paths that will bring both professional success and personal fulfillment.

The goal of Inspired By is to be a trusted companion and source of inspiration for young people as they embark on this critical phase of their lives. Whether students are feeling uncertain, overwhelmed, or simply curious, the podcast provides a supportive space to explore options, ask questions, and find motivation. Listeners come away feeling empowered to take control of their futures with clarity and confidence, equipped with the knowledge and encouragement they need to pursue careers that are not only successful but deeply meaningful.

Tune in to Inspired By for an inspiring blend of expert advice, real stories, and personalized guidance that helps you discover a career path uniquely suited to your personality and dreams</p>
            </section>

        </div>
    )

}
export default Podcast