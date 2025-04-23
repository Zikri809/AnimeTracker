import { Button } from "@/components/ui/button"
import { ChevronLeft,Copy } from "lucide-react"
import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import copy from "copy-to-clipboard";
function morenavbar(props){
    const buttonref = useRef(null)
    const iconchange = useRef(null)
    const [refstate, Setrefstate] = useState(false)
    const id = useParams()
    useEffect(()=>{
        const handleClick = () => {
            copy(props.sectionTitle)
            button.removeEventListener('click', handleClick);
            //console.log(buttonref)
            buttonref.current.innerHTML ='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-check"><path d="M18 6 7 17l-5-5"/><path d="m22 10-7.5 7.5L13 16"/></svg>' 
            setTimeout(()=>{
                buttonref.current.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>'
            },1000)
            Setrefstate(!refstate)
          };
          const button = buttonref.current
          button.addEventListener('click', handleClick);
          
    },[refstate])
   
//console.log('id is',id)
return (
    <nav className="fixed border-b-1 border-gray-700 z-3 bg-black w-screen pl-4 h-20 px-2 pr-4 mb-3 top-0 left-0 flex flex-row items-center justify-between">
        <div className="flex  flex-row items-center gap-2 sm:gap-1">
            <Link to={id.hasOwnProperty('section')?('/'+id.section+'/'+id.mal_id):(id.hasOwnProperty('title')?'/search/'+id.title+'/'+id.mal_id:(id.hasOwnProperty('mylist_tab')?'/mylist/'+id.mylist_tab+'/'+id.mal_id:'/'+id.mal_id))}>
            <Button className='bg-zinc-800 text-white hover:text-black hover:bg-zinc-400' variant="secondary" size="icon"><ChevronLeft  /></Button> 
            </Link>
            
   
       
        <p  className="line-clamp-1 text-left overflow-hidden text-ellipsis text-2xl ml-2 text-white font-bold ">{props.sectionTitle}</p>
       
        </div>
        
        <Button ref={buttonref} variant="outline" className='ml-2 border-none hover:bg-gray-300' ><Copy ref={iconchange} className="text-black"/></Button>
       
       
    </nav>
)

} export default morenavbar