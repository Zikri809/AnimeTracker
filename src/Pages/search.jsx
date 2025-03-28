import Navbar from '@/ComponentsSelf/searchnavbar.jsx'
import { useParams } from 'react-router-dom'
import Horizontalcard from '@/ComponentsSelf/animecardhorizontal'
import { useState, useEffect, useRef } from "react";
import { Link,} from 'react-router-dom';
import { useWindowScroll } from "@uidotdev/usehooks";

export default function searchpage(props){
    const [animearr, setAnimearr] = useState([]);
        const [isLoading, setLoading] = useState(true)
        const [currentpage , setpage ] = useState(1)
        const isupdated = useRef(false)
        const isaddedarr = useRef(false)
        const [hasScrolled, setHasScrolled] = useState(false);
        const [{ x, y }, scrollTo] = useWindowScroll();
        let params = useParams()
        
        useEffect(()=>{
            if(!isLoading){
                const scrollresult = JSON.parse(sessionStorage.getItem('morescroll'))
                if (scrollresult!=null){
                    scrollTo({ left: 0, top: scrollresult,  })
                }
            }
        },[isLoading])

    
        useEffect(()=>{
            function scrollhandler(){   
               //console.log( window.innerHeight + Math.ceil(window.scrollY)>=document.body.offsetHeight - 10 )
               sessionStorage.setItem('morescroll',JSON.stringify(window.scrollY)) 
               if (  window.innerHeight + window.scrollY>=document.body.offsetHeight - 2000 && !isupdated.current){
                        setpage((currentpage)=>currentpage+1)
                        console.log('condition fullfiled',currentpage)
                        isaddedarr.current = false
                        isupdated.current = true
                        setLoading(true)
                        window.removeEventListener('scroll', scrollhandler)
                       
                    }
            }
            window.addEventListener('scroll',scrollhandler,false)
        },[currentpage])
        async function fetchapi(currpage){
            try{
                const storeddata = JSON.parse(sessionStorage.getItem('animedatasearch'))
                if(storeddata!==null){
                    if( !(Math.floor(Date.now()/86400000)-JSON.parse(sessionStorage.getItem('lastupdatetimesearch'))>=1)){
                        console.log('lastupdatedtime',)
                        if(storeddata.length>animearr.length){
                            console.log('using already stored data',storeddata)
                            setpage(Math.ceil(storeddata.length/24)+1)
                            setAnimearr(storeddata)
                            setLoading(false)
                            return
                        }
                    }
                    else{
                        sessionStorage.removeItem("animedatasearch")
                        sessionStorage.removeItem("lastupdatetimesearch")
                    }
                }  
                const response = await fetch('https://api.jikan.moe/v4/anime?letter&limit=24&sfw=true&page='+currpage+'&q='+params.title)
                const apifeedback = await response.json()
                const top24 = apifeedback.data
                console.log('apifeedback',apifeedback)
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
                tempfiltered.forEach(({status,mal_id,images:{webp:{large_image_url}},season, year,episodes,title_english,title,score,scored_by,popularity,genres })=>(
                   deconstructed.add({title_english,status,mal_id,images:{webp:{large_image_url}},season, year,episodes, title,score,scored_by,popularity,genres })
                   )
               )
               if(!isaddedarr.current){
                isaddedarr.current = true
                setAnimearr((animearr)=>[...animearr,...deconstructed])
                const currenttimedays = Math.floor(Date.now()/86400000)
                sessionStorage.setItem('lastupdatetimesearch',JSON.stringify(currenttimedays))
                sessionStorage.setItem('animedatasearch',JSON.stringify([...animearr,...deconstructed]))
                
               
                //console.log('local storage ',JSON.parse(sessionStorage.getItem('animedata')))
                isupdated.current = false
            }
                setLoading(false)
                    
                
            }
            catch(error){
                fetchapi(currentpage)
                console.error(error)
            }
        }
        
        useEffect(()=>{

            fetchapi(currentpage) 
        },[currentpage])
        console.log('fetching ',animearr)
        console.log('current page is ',currentpage)
        console.log('params is ',params)
    return(
       <body   className='relative top-0 left-0 font-poppins overflow-x-hidden m-0   w-screen h-auto  bg-black text-white font-poppins ml-1  antialiased' >
            <Navbar searchtitle={params.title}/>
            <div  className='relative top-18 lg:grid lg:grid-cols-2 w-screen lg:grid-rows '>
            {
               (animearr.map((element) =>(
              
                    <Link to={'/search/'+params.title+'/'+element.mal_id}>
                         <Horizontalcard key={element.mal_id} 
                    image={element.images.webp.large_image_url} 
                    status= {element.status}
                    season={element.season ==null ? ' ':element.season + ' '+ element.year }
                    episodes={element.episodes}
                    title={element.title}
                    title_english={element.title_english}
                    score={element.score}
                    users={element.scored_by}
                    ranking={element.popularity}
                    genre={element.genres}/>
                    </Link>
                   
              
                
               )

                
                    
                ))
            }
            </div>
           
           

       </body>
    )
}