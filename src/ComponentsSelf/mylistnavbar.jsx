import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import { Link } from "react-router-dom";
function morenavbar(props){

return (
    <nav className="fixed border-0 border-gray-700 z-3 bg-black w-screen overflow-x-hidden pl-1 sm:pl-4 h-20 px-2 pr-4 mb-3 top-0 left-0 flex flex-row items-center justify-between">
        <div className="flex  items-center gap-5">
        <Link to='/'>
            <Button className='bg-black border-gray-700 text-white ' variant="outline" size="icon"><ChevronLeft  /></Button> 
        </Link>
       
        <p className="line-clamp-1 overflow-hidden text-ellipsis text-2xl  text-white font-bold text-center">Mylist</p>
        </div>
        
    </nav>
)

} export default morenavbar