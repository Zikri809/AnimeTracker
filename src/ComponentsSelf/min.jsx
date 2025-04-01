import React from 'react';
import { useEffect, useState } from "react"
import { Link,useParams } from 'react-router-dom';
const relation = (props) => {
  const [animerelinfo, Setanimerelinfo] = useState([])
  const [isloading, Setloading] = useState(true)
  const id = useParams()
  useEffect(()=>{
  async function fetchapi(){
      try{
          const response = await fetch('https://api.jikan.moe/v4/anime/'+props.id+'/relations')
          const apirelfeedback = await response.json()
          const showrelinfo =  apirelfeedback.data
          console.log(showrelinfo)
          Setanimerelinfo(showrelinfo)
          Setloading(false)
      }
      catch(error){
         fetchapi()
          console.error(error)
      }
  }
  fetchapi() 
  },[])
  

    
  
console.log('animerelinfo ',animerelinfo)
  return (
    <div className='flex bg-black w-screen px-5 py-4 flex-wrap flex-col justify-between '>
     {
      isloading?<p>loading</p>:(animerelinfo!=undefined?animerelinfo.map((object)=>(
        <div>
           <p className=' text-gray-400'>{object.relation}</p>
          { object.relation!='Adaptation' ?
           ( object.entry.map((object)=>{
              return (
              <Link to={id.hasOwnProperty('section')?('/'+id.section+'/'+id.mal_id+'/relation/'+object.mal_id):(id.hasOwnProperty('title')?'/search/'+id.title+'/'+id.mal_id+'/relation/'+object.mal_id:(id.hasOwnProperty('mylist_tab')?'/mylist/'+id.mylist_tab+'/'+id.mal_id+'/relation/'+object.mal_id:'/'+id.mal_id+'/relation/'+object.mal_id))}>
                  <p className='text-blue-500'>{object.name}</p>
              </Link>
            
            )
            
            })): ( object.entry.map((object)=>{
              return <p className='text-white'>{object.name}</p>
            }))
          }
           
        </div>
       
        
      )):<p className='hidden'></p>)
     }
      
    </div>
  );
};

export default relation;