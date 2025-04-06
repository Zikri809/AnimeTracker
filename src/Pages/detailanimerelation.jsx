import Horizontalcard from '@/ComponentsSelf/animecardheader'
import Navbar from '@/ComponentsSelf/detailedrelationnavbar'
import { useEffect, useState } from "react"
import { useParams, Link } from 'react-router-dom'
import Relation from '@/ComponentsSelf/min'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react';
import validator from '@/Utility/validation.js'
export default function detailanime(props){
    const [animeinfo, Setanimeinfo] = useState([])
    const [isloading, Setloading] = useState(true)
    const id = useParams()
    if(id.hasOwnProperty('mylist_tab')==true){
        sessionStorage.setItem('activetab',id.mylist_tab)
   }
   useEffect(()=>{
    setTimeout(validator, 2000)
    },[])
    useEffect(()=>{
        async function fetchapi(){
            try{
                const response = await fetch('https://api.jikan.moe/v4/anime/'+id.relation_id+'/full')
                const apifeedback = await response.json()
                const showinfo = apifeedback.data
                console.log(showinfo)
                Setanimeinfo(showinfo)
                Setloading(false)
                window.scrollTo(0,0)
            }
            catch(error){
               fetchapi()
             
                console.error(error)
            }
        }
        fetchapi() 
    },[])
    console.log('id',id)
    return (
        <body className='relative overflow-x-hidden top-0 left-0   m-0   w-screen h-auto  bg-black text-white font-poppins my-1 antialiased' >
            {isloading? <p>Loading</p>: <Navbar className='' sectionTitle={animeinfo.title}/>}
            <div className='relative top-20 flex  flex-col '>
                {
                    isloading? <p>loading....</p>:
                    <Horizontalcard  
                    key={animeinfo.mal_id} 
                    image={animeinfo.images.webp.large_image_url} 
                    status= {animeinfo.status}
                    season={animeinfo.season ==null ? ' ':animeinfo.season + ' '+ animeinfo.year }
                    episodes={animeinfo.episodes}
                    title={animeinfo.title}
                    score={animeinfo.score}
                    users={animeinfo.scored_by}
                    ranking={animeinfo.popularity}
                    genre={animeinfo.genres}
                    favorites={animeinfo.favorites}
                    />
                }
                 {animeinfo.status=='Currently Airing'||animeinfo.status=='Finished Airing'?<div className='px-6 py-4 border-none justify-around mb-4 text-white items-center bg-neutral-900 flex flex-row border-gray-600  '>
                    {
                        isloading?<p>loading...</p>:
                        <>
                            <span>{animeinfo.duration}</span>
                            {
                                (
                                    <div className='flex flex-row gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z" />
                                </svg>
                                <span>{animeinfo.broadcast.day}</span>
                                <span>{animeinfo.broadcast.time}</span>
                                <span>{animeinfo.broadcast.timezone}</span>
                            </div>
                                )
                            }
                            
                             
                        </>
                       
                    }
                  
                </div>:<p className='hidden'></p>}
                <div className='px-6 border-b-1 border-gray-600 pb-5 '>
                    <h4 className='text-start font-bold text-2xl mb-5 font-poppins inline-block border-b-1 pb-1 border-white'>Synopsis</h4>
                <p className='text-justify'>{animeinfo.synopsis}</p>
                </div>
              
               {
                isloading ? <p>Loading....</p>:(
                    <>
                        <iframe align='center' className='border-1 border-gray-700 my-4 mx-6 sm:mx-auto sm:w-200 aspect-video' src={animeinfo.trailer.embed_url}></iframe>
                    </>
                )
               }
               <div className='bg-neutral-900 px-5 py-4 flex flex-col gap-10 '>
                    <div className=' flex flex-col '>
                        <p className='text-gray-400'>English</p>
                        <p className='text-left'>{animeinfo.title_english}</p>
                    </div>
                    <div className='flex flex-row gap-10 '>
                        <div className='flex flex-col gap-4'>
                            <div>
                                <p className='text-gray-400'>Source</p>
                                <p>{animeinfo.source}</p>
                            </div>
                            <div>
                            <p className='text-gray-400'>Studio</p>
                            {isloading? <p>loading...</p>:
                            (
                                animeinfo.studios.map((object)=>{
                                    return <p>{object.name}</p>
                                }
                                )
                            )
                            }
                            </div>
                            <div>
                                <p className='text-gray-400'>Rating</p>
                                <p>{animeinfo.rating}</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <div>
                                <p className='text-gray-400'>Season</p>
                                <p>{animeinfo.source}</p>
                            </div>
                            <div>
                            <p className='text-gray-400'>Aired</p>
                            {isloading? <p>loading...</p>:
                            (
                                animeinfo.aired.string
                            )
                            }
                            </div>
                            <div>
                                <p className='text-gray-400'>Licensor</p>
                                {
                                    isloading?<p>Loading....</p>:
                                    (animeinfo.liscensor == undefined ? <p>Unkown</p> :
                                       (
                                       animeinfo.liscensor.map((object)=>{
                                        return <p>{object.name}</p>
                                       })
                                      )
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
                    {isloading?<p>loading</p>: <Relation id={animeinfo.mal_id}/>}
                    <Link to={id.hasOwnProperty('section')?('/'+id.section+'/'+id.mal_id+'/relation/'+id.relation_id+'/tracking'):
                        (id.hasOwnProperty('title')?'/search/'+id.title+'/'+id.mal_id+'/relation/'+id.relation_id+'/tracking':
                        (id.hasOwnProperty('mylist_tab')?'/mylist/'+id.mylist_tab+'/'+id.mal_id+'/relation/'+id.relation_id+'/tracking':
                        '/'+id.mal_id+'/relation/'+id.relation_id+'/tracking'))}>
                    <Button type='button' size='xl' className='p-4 sm:p-5 sm:text-lg fixed right-0 bottom-0 mb-5 bg-gray-800 mr-5 hover:bg-gray-300 hover:text-black text-blue-100'>
                    <Plus size={36} />Add to watchlist
                    </Button>
                    </Link>
            </div>
           
        </body>
          
        
    )
}