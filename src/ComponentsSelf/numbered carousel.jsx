import {
    Carousel,
    CarouselContent,
    CarouselItem,
   
  } from "@/components/ui/carousel"
  import { Card } from "@/components/ui/card"
  import { useEffect } from 'react'


export default function numberedcarousel(props){
  
    return(
        <Carousel setApi={props.apiref} opts={{
          skipSnaps: true,
        }} id={props.componenetid} className="embla w-full border-blue-600 border-0 h-20 py-4">
        <div className='border-2 pointer-events-none z-2 border-blue-600 w-15 h-10 absolute rounded-sm ml-[44%]'></div>
            <CarouselContent className='embla__container border-0 rounded-md border-red-500 w-15 ml-[44%] ' >
              {Array.from({ length: props.length }).map((_, index) => index==props.length-1?(
                <CarouselItem className='embla__slide p-0 border-0 mr-0' key={index}>
                 
                    <Card className='w-15 flex flex-row justify-around items-center  text-xl p-0 h-10 rounded-sm bg-black text-white border-0 border-gray-500'>

                      <span>{index}</span>
          
                    </Card>
          
                </CarouselItem>
              ):(
                <CarouselItem className='embla__slide p-0 border-0 mr-4' key={index}>
                 
                <Card className='w-15 flex flex-row justify-around items-center  text-xl p-0 h-10 rounded-sm bg-black text-white border-0 border-gray-500'>

                  <span>{index}</span>
      
                </Card>
      
            </CarouselItem>
              )
            
            )}
            </CarouselContent>
        </Carousel>
    )
}