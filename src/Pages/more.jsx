import Morenavabr from '@/ComponentsSelf/morenavbar'
import Horizontalcard from '@/ComponentsSelf/animecardhorizontal'
import { useState, useEffect, useRef } from "react";
import { Link, useParams } from 'react-router-dom';
import { useWindowScroll } from "@uidotdev/usehooks";
import validator from '@/Utility/validation.js'


function more(props){
        const [animearr, setAnimearr] = useState([]);
        const [isLoading, setLoading] = useState(true)
        const [currentpage , setpage ] = useState(1)
        const cardref = useRef(null)
        const [{ x, y }, scrollTo] = useWindowScroll();
        const isupdated = useRef(false)
        const isaddedarr = useRef(false)
        let params = useParams()
        
        useEffect(()=>{

              setTimeout(validator, 2000)
            
          },[])
      
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
               //about line below, how it work? dont't know suddenly decided to works along with teh useEffect above
               //  future me dont fix if it ain't broken
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
                const storeddata = JSON.parse(sessionStorage.getItem('animedata'+props.storageidentifier))
                if(storeddata!==null){
                    if( !(Math.floor(Date.now()/86400000)-JSON.parse(sessionStorage.getItem('lastupdatetime'+props.storagetimeidentifier))>=1)){
                        console.log('lastupdatedtime',)
                        if(storeddata.length>animearr.length){
                            console.log('using already stored data',storeddata)
                            console.log('storedata length ', storeddata.length)
                            //console.log('store data page ',storeddata.length/25)
                            setpage(Math.ceil(storeddata.length/24)+1)
                            setAnimearr(storeddata)
                            setLoading(false)
                            return
                        }
                    }
                    else{
                        sessionStorage.removeItem("animedata"+props.storageidentifier)
                        sessionStorage.removeItem("lastupdatetime"+props.storagetimeidentifier)
                    }
                   
                }
             
                const response = await fetch(props.apilink+'&sfw=true&limit=24&page='+currpage)
                const apifeedback = await response.json()
                const top24 = apifeedback.data
                //console.log('apifeedback',apifeedback)
                let tempfilteredSetid =  new Set()
                let tempfiltered = new Set()
                 top24.filter((element)=>{
                   if(!tempfilteredSetid.has(element.mal_id)){
                    tempfiltered.add(element)
                    tempfilteredSetid.add(element.mal_id)
                    return true
                   }
                   return false
                })
                let deconstructed=new Set()
                 tempfiltered.forEach(({status,mal_id,images:{webp:{large_image_url}},season, year,episodes, title,score,scored_by,popularity,genres })=>(
                    deconstructed.add({status,mal_id,images:{webp:{large_image_url}},season, year,episodes, title,score,scored_by,popularity,genres })
                    )
                )
                //console.log('deconstructed arr is ',deconstructed)
                if(!isaddedarr.current){
                    isaddedarr.current = true
                    setAnimearr((animearr)=>[...animearr,...deconstructed])
                    const currenttimedays = Math.floor(Date.now()/86400000)
                    sessionStorage.setItem('lastupdatetime'+props.storagetimeidentifier,JSON.stringify(currenttimedays))
                    sessionStorage.setItem('animedata'+props.storageidentifier,JSON.stringify([...animearr,...deconstructed]))
                    
                   
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
         
            <Morenavabr sectionTitle={props.section}/>
             { isLoading?<div className=" w-screen h-screen flex flex-row justify-center items-center "> <div class="loader"></div></div>:
             
             (animearr.map((element) =>(
                <Link  to={'/'+props.sectionurl+'/'+element.mal_id}>
                    
                    <Horizontalcard  ref={cardref} key={element.mal_id} 
                    mal_id={element.mal_id}
                    image={element.images.webp.large_image_url} 
                    status= {element.status}
                    season={element.season ==null ? ' ':element.season + ' '+ element.year }
                    episodes={element.episodes}
                    title={element.title}
                    score={element.score}
                    users={element.scored_by}
                    ranking={element.popularity}
                    genre={element.genres}/>
                </Link>
                
               )

                
                    
                ))
             }
            <div  className='relative top-18 lg:grid lg:grid-cols-2 w-screen lg:grid-rows '>
           
            
              
            
            </div>
           
           

       </body>
    )
} export default more