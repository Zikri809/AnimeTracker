import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
"use client";
 
import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/magicui/grid-pattern.jsx";
 



export function CarouselDemo() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  )

  const imagearr = ['https://cdn.myanimelist.net/images/anime/1750/145801l.jpg?_gl=1*11kk1f7*_gcl_au*MTM3NDQyODcyNC4xNzQxMTkyNzU4*_ga*MjA0NDg0MTY4Mi4xNzQxMTkyNzU4*_ga_26FEP9527K*MTc0MTE5Mjc1Ni4xLjEuMTc0MTE5MzE1OS4xMi4wLjA.',
    'https://cdn.myanimelist.net/images/anime/1437/115925l.jpg',
    'https://cdn.myanimelist.net/images/anime/1091/145945l.jpg?_gl=1*1t9umzs*_gcl_au*MTM3NDQyODcyNC4xNzQxMTkyNzU4*_ga*MjA0NDg0MTY4Mi4xNzQxMTkyNzU4*_ga_26FEP9527K*MTc0MTE5Mjc1Ni4xLjEuMTc0MTE5MzA3NC4xNC4wLjA.',
    'https://cdn.myanimelist.net/images/anime/1848/147037l.jpg?_gl=1*1degood*_gcl_au*MTM3NDQyODcyNC4xNzQxMTkyNzU4*_ga*MjA0NDg0MTY4Mi4xNzQxMTkyNzU4*_ga_26FEP9527K*MTc0MTE5Mjc1Ni4xLjEuMTc0MTE5MzI5OS40Ni4wLjA.',
    'https://cdn.myanimelist.net/images/anime/1258/147105l.jpg',
  ]
  return (
    <div className="h-140">
       <div className="relative flex h-[550px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-black border-transparent">
       <GridPattern
        squares={[
          [4, 4],
          [5, 1],
          [8, 2],
          [5, 3],
          [5, 5],
          [10, 10],
          [12, 15],
          [15, 10],
          [10, 15],
          [15, 10],
          [10, 15],
          [15, 10],
        ]}
        className={cn(
          "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      />
       </div>
      <Carousel className="aboslute z-1 top-[-530px] border-none bg-transparent mb-3 w-full mx-auto"  plugins={[plugin.current]}>
      <CarouselContent className='border-none' >
        {imagearr.map((image, index) => (
          <CarouselItem key={index} className='border-none'>
            <div className="p-2 border-none">
              <Card className=" bg-transparent border-none p-0 h-120 flex flex-row justify-center rounded-md overflow-clip border-black">
                 <img className='h-118 w-fit rounded-md' src={image}></img>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  
    </div>
   
    
  )
}

