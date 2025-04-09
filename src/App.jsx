import Home from './Pages/home.jsx'
import More from './Pages/more.jsx'
import Detailanime from './Pages/detailanime.jsx'
import Searchpage from './Pages/search.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { createContext } from 'react'
import { Analytics } from "@vercel/analytics/react"
import Trackigpage from './Pages/trackingform'
import Mylist from './Pages/mylist.jsx'
import Detailanimerelation from './Pages/detailanimerelation.jsx'



export const Season_context = createContext()
function App() {
const queryclient = new QueryClient()


const dateobject = new Date()
let current_month = dateobject.getMonth()+1
let current_year = dateobject.getFullYear()
let past_year = 0
let upcoming_year =0
const seasons = ['winter','spring', 'summer', 'fall']
let current_season
if(current_month>=1 && current_month<=3){
   current_season = seasons[0]
}
else if(current_month>=4 && current_month<=6){
   current_season= seasons[1]
}
else if(current_month>=7 && current_month<=9){
   current_season = seasons[2]
}
else{
   current_season = seasons[3]
}
const past_season_funct = (seasons, current_season,current_year) =>{
  if(seasons.indexOf(current_season)==0){
    past_year = current_year-1
    return seasons[seasons.length-1]
  }
  else{
    past_year = current_year
    return seasons[seasons.indexOf(current_season)-1]
  }
}

const upcoming_season_funct = (seasons, current_season,current_year) =>{
  if(seasons.indexOf(current_season) == seasons.length-1){
    upcoming_year = current_year+1
    return seasons[0]
  }
  else{
    upcoming_year = current_year
    return seasons[seasons.indexOf(current_season)+1]
  }
}

const past_year_funct = (seasons, current_season,current_year) =>{
  if(seasons.indexOf(current_season)==0){
    return past_year = current_year-1
  
  }
  else{
    return past_year = current_year
   
  }
}

const upcoming_year_funct = (seasons, current_season,current_year) =>{
  if(seasons.indexOf(current_season) == seasons.length-1){
    return upcoming_year = current_year+1

  }
  else{
    return upcoming_year = current_year
   
  }
}


const past_season = past_season_funct(seasons, current_season)
const upcoming_season = upcoming_season_funct(seasons,current_season)
past_year = past_year_funct(seasons,current_season,current_year)
upcoming_year = upcoming_year_funct(seasons,current_season,current_year)



//console.log('current season is ',current_season)
//console.log('current year ',current_year)
//console.log('past season ',past_season)
//console.log('past year ',past_year)
//console.log('upcoming season ',upcoming_season)
//console.log('upcoming year ',upcoming_year)


 const router = createBrowserRouter([{
  path: '/',
  element: <Home/>,

 },
 {
  path:'/morelastseason',
 element: <More storageidentifier='lastseason' storagetimeidentifier='lastseasontime' section='Last Season' sectionurl='morelastseason' apilink={'https://api.jikan.moe/v4/seasons/'+past_year+'/'+past_season+'?'}/>
},
{
  path: '/morethiseseason',
  element: <More storageidentifier='morethisseason' storagetimeidentifier='morethisseasontime' section='This Season' sectionurl='morethiseseason' apilink={'https://api.jikan.moe/v4/seasons/'+current_year+'/'+current_season+'?'}/>
},
{
  path:'/moreupcoming',
  element: <More storageidentifier='moreupcoming' storagetimeidentifier='moreupcomingtime' section='Upcoming Shows' sectionurl='moreupcoming' apilink={'https://api.jikan.moe/v4/seasons/'+upcoming_year+'/'+upcoming_season+'?'}/>
},
{
  path: '/:section/:mal_id',
  element: <Detailanime/>
},
{
  path: '/:section/:mal_id/relation/:relation_id',
  element: <Detailanimerelation/>
},
{
  path: '/:section/:mal_id/relation/:relation_id/tracking',
  element: <Trackigpage/>
},
{
  path: '/:mal_id',
  element: <Detailanime/>
},
{
  path: '/:mal_id/relation/:relation_id',
  element: <Detailanimerelation/>
},
{
  path: '/:mal_id/relation/:relation_id/tracking',
  element: <Trackigpage/>
},
{
  path:'/search/:title',
  element: <Searchpage/>
},
{
  path:'/search/:title/:mal_id',
  element: <Detailanime/>
},
{
  path:'/search/:title/:mal_id/relation/:relation_id',
  element: <Detailanimerelation/>
},
{
  path:'/search/:title/:mal_id/relation/:relation_id/tracking',
  element: <Trackigpage/>
},
{
  path:'/:mal_id/tracking',
  element: <Trackigpage/>
},
{
  path:'/:section/:mal_id/tracking',
  element: <Trackigpage/>
},
{
  path:'/search/:title/:mal_id/tracking',
  element: <Trackigpage/>
},
{
  path:'/mylist',
  element:<Mylist/>
},
{
  path:'/mylist/:mylist_tab/:mal_id',
  element:<Detailanime/>
},
{
  path:'/mylist/:mylist_tab/:mal_id/relation/:relation_id',
  element:<Detailanimerelation/>
},
{
  path:'/mylist/:mylist_tab/:mal_id/relation/:relation_id/tracking',
  element:<Trackigpage/>
},
{
  path:'/mylist/:mylist_tab/:mal_id/tracking',
  element:<Trackigpage/>
}

])

  return (
  <>
  
  <Season_context.Provider value={{current_year,current_season,past_season,past_year,upcoming_season,upcoming_year}}>
  <QueryClientProvider client={queryclient}>
    
      <RouterProvider router={router}/>
     
      <Analytics />
      <ReactQueryDevtools initialIsOpen={true} />
    
  </QueryClientProvider>
  </Season_context.Provider>

  
 
  </>
  )
}

export default App
