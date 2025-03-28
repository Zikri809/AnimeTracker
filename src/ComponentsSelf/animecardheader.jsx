import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Button } from "@/components/ui/button"
  import React from "react"

function animecardhorizontal(props){
    class object{
        constructor(name){
            this.name=name
        }
    }
        let genrearr = props.genre
        if(genrearr.length>3){
           let exeeeded = genrearr.length-3
           console.log('before slice',genrearr)
           genrearr = genrearr.slice(0,3)
           console.log('after slicing',genrearr)
           const max = new object('+'+exeeeded.toString())
           genrearr.push(max)
           
         
        }
    return (
        <>
        <Card className='rounded-none w-screen border-l-1 hover:bg-zinc-800  text-white border-x-0 border-t-0 p-5  mx-0 border-none bg-black'>
            <CardContent className='flex p-0 flex-row gap-5 items-center'>
                <img className="rounded-sm w-50 sm:w-auto h-70   object-cover" src={props.image}></img>
                <div className="flex flex-col h-70  overflow-hidden justify-between  items-start">
                     {props.status=='Finished Airing'?<Button variant="outline" className='bg-black border-1 font-medium text-sm text-green-500 border-gray-700' >{props.status}</Button>:
                                    (props.status=='Currently Airing'?<Button variant="outline" className='bg-black border-1 font-medium text-sm text-blue-400 border-gray-700' >{props.status}</Button>:
                                        <Button variant="outline" className='bg-black border-1 font-medium text-sm text-red-400 border-gray-700' >{props.status}</Button>
                                    )}
                <div className="flex text-sm flex-wrap   flex-row gap-2">
                    <p className="capitalize">{props.season}</p>
                    <p className="hidden sm:block">{props.episodes==null ? '' : props.episodes+' Episodes'} </p>
                </div>
                <p className=" sm:hidden">{props.episodes==null ? '' : props.episodes+' Episodes'} </p>
                <div className="text-2xl font-bold hidden sm:inline-block line-clamp-1 overflow-hidden text-ellipsis">{props.title}</div>
                <div className="flex flex-row gap-3 sm:gap-10 text-sm flex-wrap w-50 sm:w-full text-gray-400">
                    <div className="flex flex-col ">
                        <div className="flex flex-row gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" /></svg>
                        <p>{props.score==undefined?'No Rating':props.score}</p>
                        </div>
                       <p>{props.users} users</p>
                    </div>
                    <div className="flex flex-col">
                        <p>#{props.ranking}</p>
                        <p>Ranking</p>
                    </div>
                    <div>
                        <p>#{props.favorites}</p>
                        <p>Favourites</p>
                    </div>
                    
                </div>
                <div className="sm:flex h-15 hidden flex-row flex-wrap items-center gap-2 sm:w-full ">
                    {
                        genrearr.map((object) =>(
                            <Button variant="secondary"className=' text-sm text-white bg-slate-800' >{object.name}</Button>
                        ))
                    }
                </div>
                </div>
                
            </CardContent>
        </Card>
        <div className="flex h-15 bg-neutral-900 sm:hidden flex-row flex-wrap items-center  justify-around sm:w-full gap-2">
                    {
                        genrearr.map((object) =>(
                            <Button variant="secondary"className=' text-sm text-white bg-slate-800' >{object.name}</Button>
                        ))
                    }
                </div>
        </>
    )
} export default animecardhorizontal