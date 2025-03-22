import Home from './Pages/home.jsx'
import More from './Pages/more.jsx'
import Detailanime from './Pages/detailanime.jsx'
import Searchpage from './Pages/search.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

function App() {
const queryclient = new QueryClient()
 const router = createBrowserRouter([{
  path: '/',
  element: <Home/>,

 },
 {
  path:'/morelastseason',
 element: <More storageidentifier='lastseason' storagetimeidentifier='lastseasontime' section='Last Season' sectionurl='lastseason' apilink='https://api.jikan.moe/v4/seasons/2024/fall?'/>
},
{
  path: '/morethiseseason',
  element: <More storageidentifier='morethisseason' storagetimeidentifier='morethisseasontime' section='This Season' sectionurl='morethiseseason' apilink='https://api.jikan.moe/v4/seasons/now?continuing=true'/>
},
{
  path:'/moreupcoming',
  element: <More storageidentifier='moreupcoming' storagetimeidentifier='moreupcomingtime' section='Upcoming Shows' sectionurl='moreupcoming' apilink='https://api.jikan.moe/v4/seasons/upcoming?'/>
},
{
  path: '/:section/:mal_id',
  element: <Detailanime/>
},
{
  path: '/:mal_id',
  element: <Detailanime/>
},
{
  path:'/search/:title',
  element: <Searchpage/>
},
{
  path:'/search/:title/:mal_id',
  element: <Detailanime/>
}

])

  return (
  <>
  <QueryClientProvider client={queryclient}>
    
    <RouterProvider router={router}/>
    <ReactQueryDevtools initialIsOpen={true} />
  </QueryClientProvider>
    
  </>
  )
}

export default App
