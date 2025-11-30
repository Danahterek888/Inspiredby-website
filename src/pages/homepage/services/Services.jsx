      import { useRef,useState} from "react"
function Services({section2}){
 const scrollRef= useRef(null);
const ScrollLeftArrow = () => {   
    
scrollRef.current.scrollBy({
    left:-300,
    behavior:'smooth'
})    }
const ScrollRightArrow = () =>{
    scrollRef.current.scrollBy({
        left:500,
        behavior:'smooth'
    })
} 

     
    return (
        <div>
            <section id="ser" className="section">
               <h2 className="font-color font-width">Services</h2>
               <div className="display">
               <div className="arrowpadding arrowpaddingright">
                <button className="arrow " onClick={ScrollLeftArrow}>
                 ←
               </button>
               </div>
               <div  ref={scrollRef} className="scrollable">
                  <div className="Item">Item1</div>
                  <div className="Item">Item2</div>
                  <div className="Item">Item3</div>
                  <div className="Item">Item4</div>
                  <div className="Item">Item5</div>
                  <div className="Item">Item6</div>
                  <div className="Item">Item4</div>
                  <div className="Item">Item5</div>
                  <div className="Item">Item6</div>
                 
               </div>
               <div className="arrowpadding arrowpaddingleft">
               <button className="arrow " onClick={ScrollRightArrow}>
                 →
                </button>
                </div>
           </div>
            </section>

        </div>
    )
}
export default Services