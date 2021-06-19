import React, { useEffect } from 'react'
import useUrl from '../../../component/hooks/useUrl'
import { useData } from '../../../store'

const Index = () => {
    let {url}=useUrl()
    let {auth}=useData()
    useEffect(()=>{

        fetch(`${url}/address/all/${auth.user._id}`,{
            method:'GET'
        }).then(res=>res.json())
        .then((data)=>{
            console.log(data)
        })
    },[])
    return (
        <div>
            
        </div>
    )
}

export default Index
