//to test this functionlity please copy the below false txt file and paste it into the localstorage plan to watch section
//if the file is same as the correct version then yes

export default async function  validatingData(seasoninfo){

    console.log('check adder is runn')
    const storageidentifier = ['PlanToWatch','Completed','Watching','OnHold', 'Dropped']
    if(sessionStorage.getItem('addflag')==null){
        storageidentifier.forEach((storagename)=>{
            const plantowatch = JSON.parse( localStorage.getItem(storagename))
             sessionStorage.setItem('needstocheck'+storagename, JSON.stringify([]) )
            plantowatch.forEach(([MalId, object]) => {
                //console.log('season inof is ',seasoninfo)
             if (((object.status == 'Not yet aired' && object.from==null?true:(object.year==seasoninfo.current_year?(object.aired.prop.from.month <= seasoninfo.current_month ):(object.year < seasoninfo.current_year))) || object.status == 'Currently Airing') && object.status !== 'Finished Airing'){
                let checkarr = JSON.parse( sessionStorage.getItem('needstocheck'+storagename))
                checkarr.push(MalId)
                console.log('added to check',object.title)
                 sessionStorage.setItem('needstocheck'+storagename, JSON.stringify(checkarr))
             }
            });
        })
        sessionStorage.setItem('addflag','true')
       
    }
  
}