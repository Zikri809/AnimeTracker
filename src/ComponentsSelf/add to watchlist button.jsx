import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react';
import { useParams, Link } from 'react-router-dom'
export default function add_to_watchlist_button (){
    const id = useParams()
    const added_checker = () =>{
        const plantowatchmap = new Map(JSON.parse(localStorage.getItem('PlanToWatch')))
        const watchingmap = new Map(JSON.parse(localStorage.getItem('Watching')))
        const  completedmap = new Map(JSON.parse(localStorage.getItem('Completed')))
        const onholdmap = new Map(JSON.parse(localStorage.getItem('OnHold')))
        const droppedmap = new Map(JSON.parse(localStorage.getItem('Dropped')))
        const mal_id = parseInt(id.mal_id)
        console.log('params is ', id)
        console.log('button checker id is ',mal_id)
        console.log(plantowatchmap)
        console.log('TURHT IS ',plantowatchmap.has(mal_id))
        if(plantowatchmap.has(mal_id)){
            const anime = plantowatchmap.get(mal_id)
            console.log('condition first is true')
            return (<>To Watch · Ep {anime.userprogress}/{anime.episodes==null?'?':anime.episodes}</>)
        }
        else if (watchingmap.has(mal_id)){
            const anime = watchingmap.get(mal_id)
            return (<>Watching · Ep {anime.userprogress}/{anime.episodes==null?'?':anime.episodes}</>)
        }
        else if (completedmap.has(mal_id)){
            const anime = completedmap.get(mal_id)
            return (<>Completed · Ep {anime.userprogress}/{anime.episodes==null?'?':anime.episodes}</>)
        }
        else if(onholdmap.has(mal_id)){
            const anime = onholdmap.get(mal_id)
            return (<>On Hold · Ep {anime.userprogress}/{anime.episodes==null?'?':anime.episodes}</>)
        }
        else if(droppedmap.has(mal_id)){
            const anime = droppedmap.get(mal_id)
            return (<>Dropped · Ep {anime.userprogress}/{anime.episodes==null?'?':anime.episodes}</>)
        }
        else{
            return(
            <>
                <Plus size={36} />
                Add to watchlist
            </>
            )
        }
    }

    return(
        <Link viewTransition to={id.hasOwnProperty('section')?('/'+id.section+'/'+id.mal_id+'/tracking'):(id.hasOwnProperty('title')?'/search/'+id.title+'/'+id.mal_id+'/tracking':(id.hasOwnProperty('mylist_tab')?'/mylist/'+id.mylist_tab+'/'+id.mal_id+'/tracking':'/'+id.mal_id+'/tracking'))}>
        <Button type='button' size='xl' className='p-4 sm:p-5 sm:text-lg fixed right-0 bottom-0 mb-5 bg-gray-800 mr-5 hover:bg-gray-300 hover:text-black text-blue-100'>
        {added_checker()}
        </Button>
        </Link>
    )
}