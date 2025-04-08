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
  import { Skeleton } from "@/components/ui/skeleton"
function animecardhorizontal(props){
  
    return (
        <>
        <Card className='rounded-none w-screen border-l-1 hover:bg-zinc-800  text-white border-x-0 border-t-0 p-5  mx-0 border-none bg-black'>
            <CardContent className='flex p-0 flex-row gap-5 items-center'>
                <Skeleton className='bg-zinc-700 rounded-sm w-50 sm:w-60 h-70 '></Skeleton>
                <div className="flex flex-col h-70  overflow-hidden justify-between  items-start">
                    <Skeleton className='h-10 w-30 bg-zinc-700  rounded-md'></Skeleton>
                  
                <div className=" flex text-sm flex-wrap   flex-row gap-2">
                    <Skeleton className='bg-zinc-700 h-10 w-20'></Skeleton>
                    <Skeleton className="bg-zinc-700 hidden sm:block w-20 h-10"></Skeleton>

                </div>
                <Skeleton className="bg-zinc-700 sm:hidden h-10 w-20"></Skeleton>
                <Skeleton className="bg-zinc-700 hidden sm:inline-block h-10 w-90"></Skeleton>
                <Skeleton className="bg-zinc-700  hidden sm:inline-block  h-10 w-90"></Skeleton>
                
                <div className="flex flex-row gap-3 sm:gap-10 text-sm flex-wrap w-50 sm:w-full text-gray-400">
                    <div className="flex flex-col ">
                        <div className="flex flex-row gap-2">
                        <Skeleton className="bg-zinc-700 sm:hidden h-10 w-20"></Skeleton>
                        <Skeleton className="bg-zinc-700 sm:hidden h-10 w-20"></Skeleton>
                        </div>
                       
                    </div>
                    <div className="flex flex-col">
                    <Skeleton className="bg-zinc-700 sm:hidden h-10 w-20"></Skeleton>
                        
                    </div>
                    <div>
                    <Skeleton className="bg-zinc-700 sm:hidden h-10 w-20"></Skeleton>
                        
                    </div>
                    
                </div>
                <div className="sm:flex h-15 hidden flex-row flex-wrap items-center gap-2 sm:w-full ">
                    {
                       <Skeleton className="bg-zinc-700  h-10 w-20"></Skeleton>
                          
                        
                    }
                </div>
                </div>
                
            </CardContent>
        </Card>
        <div className="flex h-15 bg-neutral-900 sm:hidden flex-row flex-wrap items-center  justify-around sm:w-full gap-2">
                    
        <Skeleton className="bg-zinc-700  h-10 w-20"></Skeleton>
        <Skeleton className="bg-zinc-700  h-10 w-20"></Skeleton>
                      
                    
                </div>
        </>
    )
} export default animecardhorizontal