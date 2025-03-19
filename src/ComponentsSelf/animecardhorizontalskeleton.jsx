import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Skeleton } from "@/components/ui/skeleton"
  import { Button } from "@/components/ui/button"
  import React from "react"


function horizontalcardskeleton(){
    return (
         <>
                <Card className='rounded-none w-full border-l-1 hover:bg-zinc-800  text-white border-x-0 border-t-0 p-5  mx-0 border-gray-700 bg-black'>
                    <CardContent className='flex p-0 flex-row gap-5 items-center'>
                        <Skeleton className='rounded-sm h-50'></Skeleton>
                        <div className="flex flex-col items-start gap-2">
                            <Skeleton className='w-20 h-10'/>
                
                            <div className="flex text-sm flex-row gap-2">
                                <Skeleton className='w-20 h-10'/>
                                <Skeleton className='w-20 h-10'/>

                            </div>
                            <Skeleton className='w-40 h-20'/>
                            <div className="flex flex-row gap-10 text-sm text-gray-400">
                                <div className="flex flex-col">
                                    <Skeleton className='w-20 h-10'/>
                                    <Skeleton className='w-20 h-10'/>
                                </div>
                                <div className="flex flex-col">
                                    <Skeleton className='w-20 h-10'/>
                                    <Skeleton className='w-20 h-10'/>
                                </div>
                                <div className="flex flex-row gap-2">
                                 <Skeleton className='w-20 h-10'/>
                                 <Skeleton className='w-20 h-10'/>
                                </div>

                            </div>
                        </div>
                       
                        
                    </CardContent>
                </Card>
                </>
    )
} export default horizontalcardskeleton