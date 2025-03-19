
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import React from "react"
function animecard(props){

    return (
    <Card className='bg-zinc-800 p-1 border-none rounded-sm w-55 hover:bg-zinc-700 h-90'>
        <CardContent className='truncate p-1 '>

            
            <img className="rounded-md mb-2 mx-auto h-70" src={props.link}></img>
            <CardTitle className='text-white text-center truncate mb-2'> {props.title}</CardTitle>
            <CardDescription className='flex flex-nowrap truncate flex-row items-center justify-between'>
            <span>{props.rating!=null ? ('⭐'+props.rating):('NA')}</span>
            <span>{props.year}</span>
            <span>{props.status}</span>
              </CardDescription>
              
        </CardContent>
    </Card>
    )
    
   
} 
animecard.defaultProps = {
  year : 'NA'
}
export default animecard
