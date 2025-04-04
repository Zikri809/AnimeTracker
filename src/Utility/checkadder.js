import { Season_context } from "@/App";
import { useContext } from "react";

export default async function  validatingData(){
    const seasoninfo = useContext(Season_context)
    const storageidentifier = ['PlanToWatch','Completed','Watching','OnHold', 'Dropped']
    if(sessionStorage.getItem('addflag')==null){
        storageidentifier.forEach((storagename)=>{
            const plantowatch = JSON.parse( localStorage.getItem(storagename))
             sessionStorage.setItem('needstocheck'+storagename, JSON.stringify([]) )
            plantowatch.forEach(([MalId, object]) => {
             if (object.status == 'Not yet aired' || object.status == 'Currently Airing'){
                let checkarr = JSON.parse( sessionStorage.getItem('needstocheck'+storagename))
                checkarr.push(MalId)
                 sessionStorage.setItem('needstocheck'+storagename, JSON.stringify(checkarr))
             }
            });
        })
        sessionStorage.setItem('addflag','true')
       
    }
  
}