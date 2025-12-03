import { useRef } from 'react';


export const useScroll = () => {   
const scrollRef= useRef(null);
const scrollLeftArrow=()=>{
scrollRef.current.scrollBy({
    left:-300,
    behavior:'smooth'
})    }

 const scrollRightArrow = () =>{
    scrollRef.current.scrollBy({
        left:500,
        behavior:'smooth'
    })
}
return { scrollRef, scrollLeftArrow, scrollRightArrow };}