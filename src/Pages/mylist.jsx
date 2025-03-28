import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Navbar from '@/ComponentsSelf/mylistnavbar.jsx'
import { useEffect, useState } from "react"
import Horizontalcard from '@/ComponentsSelf/animecardhorizontal'
import { Link } from "react-router-dom"
import { useWindowScroll } from "@uidotdev/usehooks"

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
        if(!isloading){
            const scrollresult = JSON.parse(sessionStorage.getItem('mylistscroll'))
            if (scrollresult!=null){
                scrollTo({ left: 0, top: scrollresult,  })
            }
        }
    },[isloading])

    function scrollreset(){
        sessionStorage.setItem('mylistscroll',JSON.stringify(0))
    }
    sessionStorage.setItem('mylistscroll',JSON.stringify(window.scrollY))
    useEffect(()=>{
        Setcompleted(new Map(JSON.parse(localStorage.getItem('Completed'))))
        Setplan(new Map(JSON.parse(localStorage.getItem('PlanToWatch'))))
        Setwatching(new Map(JSON.parse(localStorage.getItem('Watching'))))
        Setonhold(new Map(JSON.parse(localStorage.getItem('OnHold'))))
        Setdropped(new Map(JSON.parse(localStorage.getItem('Dropped'))))
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
  
    console.log('completed map', completedmap)
    return (
        <div className="bg-black  h-3000"> 
             <Navbar/>
      
             <Tabs defaultValue="Plan To Watch" value={activetab} onValueChange={handletabchange} className="relative w-full top-20  bg-black">
            <TabsList className='w-full text-xl ml-0 fixed touch-auto pb-0 rounded-none bg-black text-black border-b-1 overflow-auto border-gray-600'>
              <TabsTrigger onClick={scrollreset} className='ml-15 sm:ml-4  text-base data-[state=active]:bg-gray-600  data-[state=active]:rounded-b-none data-[state=active]:text-white text-white active:bg-black ' value="Plan To Watch">Plan To Watch</TabsTrigger>
              <TabsTrigger  onClick={scrollreset} className='text-white    text-base  data-[state=active]:bg-gray-600 data-[state=active]:rounded-b-none data-[state=active]:text-white' value="Completed">Completed</TabsTrigger>
              <TabsTrigger  onClick={scrollreset} className='text-white    text-base data-[state=active]:bg-gray-600  data-[state=active]:rounded-b-none data-[state=active]:text-white' value="Watching">Watching</TabsTrigger>
              <TabsTrigger  onClick={scrollreset} className='text-white    text-base data-[state=active]:bg-gray-600  data-[state=active]:rounded-b-none data-[state=active]:text-white' value="On Hold">On Hold</TabsTrigger>
              <TabsTrigger  onClick={scrollreset} className='text-white    text-base data-[state=active]:bg-gray-600  data-[state=active]:rounded-b-none data-[state=active]:text-white' value="Dropped">Dropped</TabsTrigger>
            </TabsList>
            <TabsContent className='relative top-10 lg:grid lg:grid-cols-2 w-screen lg:grid-rows' value="Plan To Watch">
            {isloading? <p>Loading please wait</p>:
               (Array.from(planmap).map(([key, value]) =>(
                        <Link  to={'/mylist/Plan To Watch/'+value.mal_id}>
                            
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
            </TabsContent>
            <TabsContent className='relative top-10 lg:grid lg:grid-cols-2 w-screen lg:grid-rows' value="Completed">
            {isloading? <p>Loading please wait</p>:
               (Array.from(completedmap).map(([key, value]) =>(
                        <Link  to={'/mylist/Completed/'+value.mal_id}>
                            
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
            </TabsContent>
            <TabsContent className='relative top-10 lg:grid lg:grid-cols-2 w-screen lg:grid-rows' value="Watching">
            {isloading? <p>Loading please wait</p>:
               (Array.from(watchinmap).map(([key, value]) =>(
                        <Link  to={'/mylist/Watching/'+value.mal_id}>
                            
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
            </TabsContent>
            <TabsContent className='relative top-10 lg:grid lg:grid-cols-2 w-screen lg:grid-rows' value="On Hold">
            {isloading? <p>Loading please wait</p>:
               (Array.from(onholdmap).map(([key, value]) =>(
                        <Link  to={'/mylist/On Hold/'+value.mal_id}>
                            
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
            </TabsContent>
            <TabsContent className='relative top-10 lg:grid lg:grid-cols-2 w-screen lg:grid-rows' value="Dropped">
            {isloading? <p>Loading please wait</p>:
               (Array.from(droppedmap).map(([key, value]) =>(
                        <Link  to={'/mylist/Dropped/'+value.mal_id}>
                            
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
            </TabsContent>
           
        </Tabs>
        </div>
    
       
       

    )
}