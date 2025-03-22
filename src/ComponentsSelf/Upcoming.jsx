import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Animecard from './animecard'
import { useState, useEffect, useContext } from "react";
import Cardskeleton from "./animecardskelaton"; 
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Link } from "react-router-dom";
import { QueryClient, useQuery } from "@tanstack/react-query";
import { Season_context } from '@/App';


function UpcomingSec(){
    const [animearr, setAnimearr] = useState([]);
    const seasoninfo = useContext(Season_context)
    
    
        
        async function fetchapi(){
            try{
                const response = await fetch('https://api.jikan.moe/v4/seasons/'+seasoninfo.upcoming_year+'/'+seasoninfo.upcoming_season+'?')
                const apifeedback = await response.json()
                const top24 = apifeedback.data.slice(0,24)
                let tempfilteredSetid =  new Set()
                let tempfiltered = new Set()
                let filteredSet = top24.filter((element)=>{
                   if(!tempfilteredSetid.has(element.mal_id)){
                    tempfiltered.add(element)
                    tempfilteredSetid.add(element.mal_id)
                    return true
                   }
                   return false
                })
                let deconstructed=new Set()
                tempfiltered.forEach(({status,mal_id,images:{webp:{large_image_url}},season, year, title,score,scored_by,popularity,genres })=>(
                   deconstructed.add({status,mal_id,images:{webp:{large_image_url}}, year,title,score})
                   )
               )
               return [...deconstructed]
                
            }
            catch(error){
                fetchapi()
                console.error(error)
            }
        }
        const {data: querydata, isLoading} = useQuery({
            queryKey: ['upcomingquery'],
            queryFn: ()=>fetchapi(),
            staleTime: 1000 * 60 * 20,
            cacheTime:  1000 * 60 * 30, 
        })
    console.log('season context ',seasoninfo)
    return(
       <div className="my-5">
            <div className="flex flex-row  pl-4  pr-4 mb-2 justify-between items-center">
                <div className="border-b-2  pb-2"><h4 className=" scroll-m-20 text-xl font-semibold tracking-tight">Upcoming Season</h4> </div>
                <Link to='/moreupcoming'>
                    <Button className='bg-black border-gray-500' variant="outline" size="icon"><ChevronRight  /></Button>      
                </Link>
              
            </div>
            <Carousel className='ml-1 mb-5'
                opts={{
                    skipSnaps: true,
                  }}
            >
                <CarouselContent className="ml-1 md:ml-1 w-56">
                    {isLoading ?  (
                        <>
                            <Cardskeleton/>
                            <Cardskeleton/>
                            <Cardskeleton/>
                            <Cardskeleton/>
                            <Cardskeleton/>
                            <Cardskeleton/>
                            <Cardskeleton/>
                            <Cardskeleton/>
                            <Cardskeleton/>
                            <Cardskeleton/>
                            <Cardskeleton/>
                            <Cardskeleton/>
                        </>
                        
                    
                )
                         :(querydata?.map((element)=>(
                            <Link to={'/'+element.mal_id}>
                                <CarouselItem key={element.id} className="pl-2 md:pl-4"> <Animecard title={element.title} link={element.images.webp.large_image_url} year={element.year} rating={element.score} status = {element.status}/></CarouselItem>
                            </Link> 
                         )))
                    }
                  
                </CarouselContent>
            </Carousel>
      
       </div>
    )
} export default UpcomingSec