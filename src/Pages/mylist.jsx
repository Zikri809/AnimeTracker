import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Navbar from '@/ComponentsSelf/mylistnavbar.jsx'
import { useEffect, useState } from "react"
import Horizontalcard from '@/ComponentsSelf/animecardhorizontal'
import { Link } from "react-router-dom"
import { useWindowScroll } from "@uidotdev/usehooks"
import validator from '@/Utility/validation.js'

export default function mylist(){
    const [planmap , Setplan] = useState()
    const [completedmap, Setcompleted] = useState()
    const [watchinmap, Setwatching] = useState()
    const [onholdmap, Setonhold] = useState()
    const [droppedmap, Setdropped] = useState()
    const [isloading, Setloading] = useState(true)
    const [{ x, y }, scrollTo] = useWindowScroll();
    const [activetab, Setactivetab] = useState('Plan To Watch')

     
    useEffect(()=>{
               setTimeout(validator, 2000)
               },[]) 
    useEffect(()=>{
        if(!isloading){
            const scrollresult = JSON.parse(sessionStorage.getItem('mylistscroll'))
            console.log('retrieve scroll position')
                if (scrollresult!=null){
                    console.log('scroll result ',scrollresult)
                    scrollTo({ left: 0, top: scrollresult,  })
                }
          
          
        }
    },[isloading])

    function scrollreset(e){
       console.log('reset triggered')
        sessionStorage.setItem('mylistscroll',JSON.stringify(0))
        const scrollresult = JSON.parse(sessionStorage.getItem('mylistscroll'))
        console.log('retrieve scroll position')
            if (scrollresult!=null){
                console.log('scroll result ',scrollresult)
                scrollTo({ left: 0, top: scrollresult,  })
            }
        e.target.scrollIntoView({behavior: "smooth",inline: "center"})
        console.log(e.target)
    }
    function scrollupdater(){
        console.log('scroll y' , window.scrollY)
        sessionStorage.setItem('mylistscroll',JSON.stringify(window.scrollY))
    }
   

     
    
    useEffect(()=>{
        Setcompleted(JSON.parse(localStorage.getItem('Completed')).reverse())
        Setplan(JSON.parse(localStorage.getItem('PlanToWatch')).reverse())
        Setwatching(JSON.parse(localStorage.getItem('Watching')).reverse())
        Setonhold(JSON.parse(localStorage.getItem('OnHold')).reverse())
        Setdropped(JSON.parse(localStorage.getItem('Dropped')).reverse())
        console.log('completed map', completedmap)
        if(sessionStorage.getItem('activetab')==undefined || sessionStorage.getItem('activetab')==null){
            Setactivetab('Plan To Watch')
        }
        if(sessionStorage.getItem('activetab')!=undefined || sessionStorage.getItem('activetab')!=null){
            Setactivetab(sessionStorage.getItem('activetab'))
       }
        Setloading(false)
        
    },[])
    function handletabchange(value){
        Setactivetab(value)
       
    }
  
    //console.log('completed map', completedmap)
    return (
        <div className="bg-black  min-h-[100vh]"> 
             <Navbar/>
      
             <Tabs defaultValue="Plan To Watch" value={activetab} onValueChange={handletabchange} className="relative w-full top-12 border-0 border-blue-500 bg-black">
            <TabsList style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}} className='no-scrollbar::-webkit-scrollbar w-full text-xl  z-2 fixed touch-auto  pb-0 rounded-none bg-black text-black border-b-1 overflow-auto border-gray-600'>
              <TabsTrigger  onClick={scrollreset} className='ml-16 sm:ml-4 w-300  text-base data-[state=active]:border-b-1 data-[state=active]:border-b-white data-[state=active]:rounded-b-none data-[state=active]:bg-inherit    data-[state=active]:text-white text-white  ' value="Plan To Watch">Plan To Watch</TabsTrigger>
              <TabsTrigger  onClick={scrollreset} className='text-white    text-base      data-[state=active]:bg-inherit  data-[state=active]:text-white  data-[state=active]:border-b-1 data-[state=active]:border-b-white data-[state=active]:rounded-b-none' value="Completed">Completed</TabsTrigger>
              <TabsTrigger  onClick={scrollreset} className='text-white    text-base      data-[state=active]:bg-inherit  data-[state=active]:text-white  data-[state=active]:border-b-1 data-[state=active]:border-b-white data-[state=active]:rounded-b-none' value="Watching">Watching</TabsTrigger>
              <TabsTrigger  onClick={scrollreset} className='text-white    text-base      data-[state=active]:bg-inherit  data-[state=active]:text-white  data-[state=active]:border-b-1 data-[state=active]:border-b-white data-[state=active]:rounded-b-none' value="On Hold">On Hold</TabsTrigger>
              <TabsTrigger  onClick={scrollreset} className=' text-white    text-base     data-[state=active]:bg-inherit  data-[state=active]:text-white  data-[state=active]:border-b-1 data-[state=active]:border-b-white data-[state=active]:rounded-b-none' value="Dropped">Dropped</TabsTrigger>
            </TabsList>
            <TabsContent className='relative top-10 ' value="Plan To Watch">
            {isloading? <p>Loading please wait</p>:
            (planmap.length!=0?<div className="lg:grid  lg:grid-cols-2 w-screen lg:grid-rows">
                {
                     (planmap.map(([key, value]) =>(
                        <Link viewTransition onClick={scrollupdater}   to={'/mylist/Plan To Watch/'+value.mal_id}>
                            
                            <Horizontalcard className='' key={value.mal_id} 
                            image={value.images.webp.large_image_url} 
                            status= {value.status}
                            season={value.season ==null ? ' ':value.season + ' '+ value.year }
                            episodes={value.episodes}
                            title={value.title}
                            score={value.score}
                            users={value.scored_by}
                            ranking={value.popularity}
                            genre={value.genres}/>
                        </Link>
               )))
                }
            </div>:<p className="text-white w-full h-full text-center py-60 ">No shows in record yet</p>)
              
            }
            </TabsContent>
            <TabsContent className='relative top-10 ' value="Completed">
            {isloading? <p>Loading please wait</p>:
           (completedmap.length!=0? <div className="lg:grid lg:grid-cols-2 w-screen lg:grid-rows">
                {
                     (completedmap.map(([key, value]) =>(
                        <Link viewTransition onClick={scrollupdater} to={'/mylist/Completed/'+value.mal_id}>
                            
                            <Horizontalcard   key={value.mal_id} 
                            image={value.images.webp.large_image_url} 
                            status= {value.status}
                            season={value.season ==null ? ' ':value.season + ' '+ value.year }
                            episodes={value.episodes}
                            title={value.title}
                            score={value.score}
                            users={value.scored_by}
                            ranking={value.popularity}
                            genre={value.genres}/>
                        </Link>
               )))
                }
            </div>:<p className="text-white w-full h-full text-center py-60 ">No shows in record yet</p>)
              
            }
            </TabsContent>
            <TabsContent className='relative top-10 bg-black  ' value="Watching">
            {isloading? <p>Loading please wait</p>:
            ( watchinmap.length!=0?<div className="lg:grid lg:grid-cols-2 w-screen lg:grid-rows">
                {
                    (watchinmap.map(([key, value]) =>(
                        <Link viewTransition onClick={scrollupdater} to={'/mylist/Watching/'+value.mal_id}>
                            
                            <Horizontalcard   key={value.mal_id} 
                            image={value.images.webp.large_image_url} 
                            status= {value.status}
                            season={value.season ==null ? ' ':value.season + ' '+ value.year }
                            episodes={value.episodes}
                            title={value.title}
                            score={value.score}
                            users={value.scored_by}
                            ranking={value.popularity}
                            genre={value.genres}/>
                        </Link>
               )))
                }
            </div>:<p className="text-white w-full h-full text-center py-60 ">No shows in record yet</p>)
               
            }
            </TabsContent>
            <TabsContent className='relative top-10 ' value="On Hold">
            {isloading? <p>Loading please wait</p>:
            (onholdmap.length!=0?<div className="lg:grid lg:grid-cols-2 w-screen lg:grid-rows">
                {
                     (onholdmap.map(([key, value]) =>(
                        <Link viewTransition onClick={scrollupdater} to={'/mylist/On Hold/'+value.mal_id}>
                            
                            <Horizontalcard   key={value.mal_id} 
                            image={value.images.webp.large_image_url} 
                            status= {value.status}
                            season={value.season ==null ? ' ':value.season + ' '+ value.year }
                            episodes={value.episodes}
                            title={value.title}
                            score={value.score}
                            users={value.scored_by}
                            ranking={value.popularity}
                            genre={value.genres}/>
                        </Link>
               )))
                }
            </div>:<p className="text-white w-full h-full text-center py-60 ">No shows in record yet</p>)
              
            }
            </TabsContent>
            <TabsContent className='relative top-10 ' value="Dropped">
            {isloading? <p>Loading please wait</p>:
            (droppedmap.length!=0?
            <div className="lg:grid lg:grid-cols-2 w-screen lg:grid-rows">
                {
                     (droppedmap.map(([key, value]) =>(
                        <Link viewTransition onClick={scrollupdater} to={'/mylist/Dropped/'+value.mal_id}>
                            
                            <Horizontalcard   key={value.mal_id} 
                            image={value.images.webp.large_image_url} 
                            status= {value.status}
                            season={value.season ==null ? ' ':value.season + ' '+ value.year }
                            episodes={value.episodes}
                            title={value.title}
                            score={value.score}
                            users={value.scored_by}
                            ranking={value.popularity}
                            genre={value.genres}/>
                        </Link>
                         )))
                }
            </div>:<p className="text-white w-full h-full text-center py-60 ">No shows in record yet</p>)
              
              
            }
            </TabsContent>
           
        </Tabs>
        </div>
    
       
       

    )
}