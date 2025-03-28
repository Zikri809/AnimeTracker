import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useEffect, useRef, useState } from "react"
import { Link, useNavigate  } from "react-router-dom"

function navbar(props){
    const searchbar = useRef(null)
    const searchbutton = useRef(null)
    const [refstate, Setrefstate] = useState(true)
    const [searchval, Setsearchval] = useState(' ')
    let navigate = useNavigate()
   
    
    
    return(
        <nav className="sticky z-3 backdrop-blur-sm sm:bg-black border-b-0 border-gray-700 bg-transparent  w-screen pl-4 h-20 px-2 pr-4 mb-3 top-0 left-0 flex flex-row items-center justify-between">
            
            <div>
            <h1 className="bg-linear-to-r text-white scroll-m-20 text-4xl font-extrabold font-poppins tracking-tight lg:text-5xl">AniTracker</h1>
            </div>
            <div className="sm:flex flex-row gap-2 hidden ">
                <div className="flex w-full max-w-sm items-center space-x-2">
                    <Input ref={props.searchbarref} className='border-gray-500' type="email" placeholder="Search " />
                   
                        <Button ref={props.searchbuttonref} type="submit">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </Button>
                    
                 
                   
                </div>
                <Link to='/mylist'>
                <Button className='text-black' variant="outline">Mylist</Button>
                </Link>
               
                
            </div>
            <Link className="sm:hidden" to='/mylist'>
                <Button className='text-white   text-lg bg-transparent border-0' variant="outline">Mylist</Button>
                </Link>
           { /*<Button className='border-none sm:hidden bg-transparent text-white ' variant="outline">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                </Button> */}
        </nav>
    )
} export default navbar