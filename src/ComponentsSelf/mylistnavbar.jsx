import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import { Link } from "react-router-dom";
function morenavbar(props){

return (
    <nav className="fixed  z-3 bg-black w-screen pl-4 h-15 px-2 pr-4 mb-3 top-0 left-0 flex flex-row items-center justify-between">
        <div className="flex  items-center gap-5">
        <Link to='/'>
            <Button className='bg-zinc-800 text-white hover:text-black hover:bg-zinc-400' variant="secondary" size="icon"><ChevronLeft  /></Button> 
        </Link>
       
        <p className="line-clamp-1 overflow-hidden text-ellipsis text-2xl  text-white font-bold text-center">Mylist</p>
        </div>
        
    </nav>
)

} export default morenavbar