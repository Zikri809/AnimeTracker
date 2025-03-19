import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import { Link } from "react-router-dom"
export default function searchnavbar(props){
    return(
        <nav className="fixed border-b-1 border-gray-700 z-3 bg-black w-screen pl-4 h-20 px-2 pr-4 mb-3 top-0 left-0 flex flex-row items-center justify-between">
        <div className="flex  flex-row items-center gap-2 sm:gap-2">
            <Link to='/'>
             <Button className='bg-black border-gray-700 ' variant="outline" size="icon"><ChevronLeft  /></Button> 
            </Link>
           
        <p  className="line-clamp-1 overflow-hidden text-ellipsis text-2xl  text-white font-bold text-center">Search for: {props.searchtitle}</p>
       
        </div>
    </nav>
    )
}