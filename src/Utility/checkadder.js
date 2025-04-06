

export default async function  validatingData(seasoninfo){

    console.log('check adder is runn')
    const storageidentifier = ['PlanToWatch','Completed','Watching','OnHold', 'Dropped']
    if(sessionStorage.getItem('addflag')==null){
        storageidentifier.forEach((storagename)=>{
            const plantowatch = JSON.parse( localStorage.getItem(storagename))
             sessionStorage.setItem('needstocheck'+storagename, JSON.stringify([]) )
            plantowatch.forEach(([MalId, object]) => {
                console.log('season inof is ',seasoninfo)
             if ((object.status == 'Not yet aired' && object.season == seasoninfo.current_season && object.year == seasoninfo.current_year) || object.status == 'Currently Airing'){
                let checkarr = JSON.parse( sessionStorage.getItem('needstocheck'+storagename))
                checkarr.push(MalId)
                 sessionStorage.setItem('needstocheck'+storagename, JSON.stringify(checkarr))
             }
            });
        })
        sessionStorage.setItem('addflag','true')
       
    }
  
}