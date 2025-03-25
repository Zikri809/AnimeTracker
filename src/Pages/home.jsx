import { useState } from 'react'
import Nav from '@/ComponentsSelf/navbar.jsx'
import LastSeason from '@/ComponentsSelf/LastSeason.jsx'
import { CarouselDemo } from '@/ComponentsSelf/carousel.jsx'
import  ThisSeasonSec from '@/ComponentsSelf/ThisSeasonSec.jsx'
import UpcomingSec from '@/ComponentsSelf/Upcoming.jsx'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useEffect, useRef } from "react"
import { Link, useNavigate } from "react-router-dom"

function home() {
  const searchbar = useRef([])
    const searchbutton = useRef([])
    const navsearchref = useRef(null)
    const navbuttonref = useRef(null)
    const [refstate, Setrefstate] = useState(true)
    const linkref =  useRef(null) 
    const [searchval, Setsearchval] = useState(' ')
    const [text, Settext] = useState('')
    let navigate = useNavigate()
    sessionStorage.setItem('morescroll',JSON.stringify(0))
    sessionStorage.removeItem("animedatasearch")
    sessionStorage.removeItem("lastupdatetimesearch")
   
 
    useEffect(()=>{
      
     window.addEventListener('keydown',enterhandler)

    function enterhandler(e){
     if(e.key =="Enter"){
      const querylength = clickhandler()
   
      
      console.log('click handler finish')
      window.removeEventListener('keydown',enterhandler)
     }
     
    }
      function clickhandler(){
          console.log('Button Clicked')
          console.log('input val ',inputsearch.value)
          button.removeEventListener('click', clickhandler);
          Setsearchval(inputsearch.value)
          console.log(inputsearch.value!='')
          if(inputsearch.value!=''){
            navigate('/search/'+inputsearch.value)
          }
        else if (navsearch.value!=''){
          navigate(navsearch.value.length==0?'/':'/search/'+navsearch.value)
        }else {
          navigate('/')
        }
      

         

      }
      const button = searchbutton.current
      const navbutton = navbuttonref.current
      const navsearch = navsearchref.current
      const inputsearch = searchbar.current
      navbutton.addEventListener('click',clickhandler)
      button.addEventListener('click',clickhandler)
  },[searchval])

  return (
   <body className='relative top-0 left-0  overflow-x-clip m-0   w-[100%] h-[1500px]  bg-black text-white font-poppins my-1 antialiased' >
        <Nav searchbarref={navsearchref}  searchbuttonref={navbuttonref}/>
        <div className='w-screen bg-black px-4'>
        <div className="flex  max-w-sm justify-around  items-center sm:hidden space-x-2">
          <Input ref={searchbar} className='border-gray-500' type="search" placeholder="Search"  />
          
              <Button ref={searchbutton} type="button">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
              </Button>
          
        </div>
        </div>
        
        <CarouselDemo/>
        <ThisSeasonSec/>
        <LastSeason className=''/>
        <UpcomingSec/>
   </body>
  )
} export default home