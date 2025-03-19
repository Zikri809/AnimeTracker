import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"

function navbar(){
    const searchbar = useRef(null)
    const searchbutton = useRef(null)
    const [refstate, Setrefstate] = useState(true)
    const [searchval, Setsearchval] = useState(' ')
   
    useEffect(()=>{
        function clickhandler(){
            console.log('Button Clicked')
            console.log(inputsearch.value)
            button.removeEventListener('click', clickhandler);
            Setsearchval(inputsearch.value)

           

        }
        const button = searchbutton.current
        const inputsearch = searchbar.current
        button.addEventListener('click',clickhandler)
    },[searchval])
    return(
        <nav className="sticky z-3 border-b-1 border-gray-700 bg-black w-screen pl-4 h-20 px-2 pr-4 mb-3 top-0 left-0 flex flex-row items-center justify-between">
            
            <div>
            <h1 className="bg-linear-to-r from-gray-300 via-gray-500 to-gray-700 text-transparent bg-clip-text scroll-m-20 text-4xl font-extrabold font-poppins tracking-tight lg:text-5xl">AniTracker</h1>
            </div>
            <div className="sm:flex flex-row gap-2 hidden ">
                <div className="flex w-full max-w-sm items-center space-x-2">
                    <Input ref={searchbar} className='border-gray-500' type="email" placeholder="Search " />
                    <Link to={searchval.length==0?'/':'/search/'+searchval}>
                        <Button ref={searchbutton} type="submit">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </Button>
                    
                    </Link>
                   
                </div>
                <Button className='text-black' variant="outline">Mylist</Button>
                
            </div>
            <Button className='text-black sm:hidden ' variant="outline">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                </Button>
        </nav>
    )
} export default navbar