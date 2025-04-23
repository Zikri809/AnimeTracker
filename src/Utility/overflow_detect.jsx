export default function overflow_detect (elementref){
    const scrollHeight = elementref.current.scrollHeight
    const offsetHeight = elementref.current.offsetHeight

    //detect overflow
    if(scrollHeight > offsetHeight){
        return true
    }
    else 
        return false
}