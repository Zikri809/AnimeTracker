export default  function validator(){
    const storageidentifier = ['PlanToWatch','Completed','Watching','OnHold', 'Dropped']
    //console.log('validator is working')
    storageidentifier.forEach((storagename)=>{
        const idtobevalidated = JSON.parse(sessionStorage.getItem('needstocheck'+storagename))
        const watchlistcategory = new Map(JSON.parse(localStorage.getItem(storagename)))
        idtobevalidated.forEach((mal_id,index)=>{
            apifetch(mal_id)
             
            console.log('The storage name is ',storagename, ' slicedarr is ', idtobevalidated.slice(0,idtobevalidated.length-index-1))
           sessionStorage.setItem('needstocheck'+storagename, JSON.stringify(idtobevalidated.slice(0,idtobevalidated.length-index-1) ))
            //console.log('finished calling apifetch function')
        })
        async function apifetch(mal_id){
            try 
            {  
                const userwatch = {userstatus:watchlistcategory.get(mal_id).userstatus, userprogress: watchlistcategory.get(mal_id).userprogress,userscore:  watchlistcategory.get(mal_id).userscore}
                const apifetch = await fetch('https://api.jikan.moe/v4/anime/'+mal_id)
                if (!apifetch.ok) throw new Error(`HTTP ${apifetch.status}`)
                console.log('validation calls')
                const apidata = await apifetch.json()
                watchlistcategory.set(mal_id,Object.assign(await apidata.data,userwatch))
                localStorage.setItem(storagename,JSON.stringify([...watchlistcategory]))
                
            }
            catch(error){
                //console.log('error encoutered ')
                //console.error('Validation error ',error)
                setTimeout(apifetch(mal_id), 3000);
               
            }
        }
    })
   
}