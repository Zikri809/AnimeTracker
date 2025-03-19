import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import React from "react"

function cardskeleton () {

    return(
        <Card className='bg-zinc-800 p-1 border-none w-65 h-90 ml-1'>
        <CardContent className='truncate p-1 '>

            <Skeleton className="bg-neutral-900 rounded-md mb-2 w-49 mx-auto h-70"></Skeleton>
            <CardTitle className='mb-2'> <Skeleton></Skeleton></CardTitle>
            <CardDescription className='flex  flex-nowrap truncate flex-row items-center justify-between'>
            <Skeleton className='bg-neutral-900  w-15 h-3'></Skeleton>
            <Skeleton className='bg-neutral-900  w-15 h-3'></Skeleton>
            <Skeleton className='bg-neutral-900  w-15 h-3'></Skeleton>
              </CardDescription>
              
        </CardContent>
    </Card>
    )
} export default cardskeleton