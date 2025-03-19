import { useState } from 'react'
import Nav from '@/ComponentsSelf/navbar.jsx'
import Trending from '@/ComponentsSelf/trending.jsx'
import { CarouselDemo } from '@/ComponentsSelf/carousel.jsx'
import  ThisSeasonSec from '@/ComponentsSelf/ThisSeasonSec.jsx'
import UpcomingSec from '@/ComponentsSelf/Upcoming.jsx'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"

function home() {
  const searchbar = useRef(null)
    const searchbutton = useRef(null)
    const [refstate, Setrefstate] = useState(true)
    const [searchval, Setsearchval] = useState(' ')
    localStorage.setItem('morescroll',JSON.stringify(0))
    localStorage.removeItem("animedatasearch")
    localStorage.removeItem("lastupdatetimesearch")
   
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

  return (
   <body className='relative top-0 left-0  overflow-x-clip m-0   w-[100%] h-[1500px]  bg-black text-white font-poppins my-1 antialiased' >
        <Nav/>
        <div className='w-screen bg-black px-4'>
        <div className="flex  max-w-sm justify-around  items-center sm:hidden space-x-2">
          <Input ref={searchbar} className='border-gray-500' type="email" placeholder="Search " />
          <Link to={searchval.length==0?'/':'/search/'+searchval}>
              <Button ref={searchbutton} type="submit">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
              </Button>
          </Link>         
        </div>
        </div>
        
        <CarouselDemo/>
        <Trending className=''/>
        <ThisSeasonSec/>
        <UpcomingSec/>
   </body>
  )
} export default home