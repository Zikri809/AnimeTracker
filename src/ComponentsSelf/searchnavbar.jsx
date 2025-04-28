import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { Link,  useNavigate } from "react-router-dom"
import { Input } from "@/components/ui/input"
export default function searchnavbar( {set_state, searchtitle}){
    const searchbar = useRef(null)
    const searchbutton = useRef(null)
    const search_resultref = useRef(null)
    const div_ref = useRef(null)
    const [searchval, Setsearchval] = useState(' ')
    var search_bar_visibility = false
    let navigate = useNavigate()

   useEffect(()=>{
      
     window.addEventListener('keydown',enterhandler)

    function enterhandler(e){
     if(e.key =="Enter"){
       clickhandler()
   
      
      console.log('click handler finish')
      //window.removeEventListener('keydown',enterhandler)
     }
     
    }
      function clickhandler(){
          if(search_bar_visibility){
            console.log('Button Clicked')
            console.log('input val ',inputsearch.value)
            button.removeEventListener('click', clickhandler);
            Setsearchval(inputsearch.value)
            console.log(inputsearch.value!='')
            sessionStorage.setItem('animedatasearch',null)
            set_state(inputsearch.value)
            inputsearch.classList.add('hidden')
            div_ref.current.classList.add('w-fit')
            div_ref.current.classList.remove('w-[90%]', 'sm:w-[30%]')
            search_resultref.current.classList.remove('hidden')
            search_bar_visibility = false
            if(inputsearch.value!=''){
              navigate('/search/'+inputsearch.value)
            }
           else {
              navigate('/')
            }
            //inputsearch.value=''
          }
          else{
           console.log('input search target ',inputsearch)
           inputsearch.classList.remove('hidden')
           div_ref.current.classList.remove('w-fit')
           div_ref.current.classList.add('w-[90%]', 'sm:w-[30%]')
           search_resultref.current.classList.add('hidden')
          
           inputsearch.focus()
           search_bar_visibility = true
          }
      }
      const button = searchbutton.current
      const inputsearch = searchbar.current
      button.addEventListener('click',clickhandler)
    },[searchval])
  
    return(
        <nav className="fixed border-b-1 border-gray-700 z-3 bg-black w-screen pl-4 h-20 px-2 pr-4 mb-3 top-0 left-0 flex flex-row items-center justify-between">
        <div className="flex justify-center  flex-row items-center gap-2 sm:gap-2">
            <Link to='/'>
             <Button className='bg-zinc-800 text-white hover:text-black hover:bg-zinc-400' variant="secondary" size="icon"><ChevronLeft  /></Button> 
            </Link>
           
        <p ref={search_resultref} className="line-clamp-1 overflow-hidden text-ellipsis text-2xl ml-2 text-white font-bold text-left">{searchtitle}</p>
       
        </div>
        <div ref={div_ref} className="flex ml-2 w-fit justify-around  items-center  space-x-2">
          <Input ref={searchbar} className='border-gray-500 hidden' type="search" placeholder="Search"  />
          
              <Button ref={searchbutton} type="button">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
              </Button>
          
        </div>
    </nav>
    )
}