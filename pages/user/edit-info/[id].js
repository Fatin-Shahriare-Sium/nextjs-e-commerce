import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import useUrl from '../../../component/hooks/useUrl'
import { useData } from '../../../store'
const EditInfo = () => {
    let router=useRouter()
    let {auth}=useData()
    let {id}=router.query
    let {url}=useUrl()
    let [userInfo,setUserInfo]=useState('')
    useEffect(()=>{
        fetch(`${url}/user/info/${auth.user._id}`,{
        method:'GET'
    }).then(res=>res.json())
    .then((data)=>{
        console.log(data);
        setUserInfo(data.userInfo)
    })
       
    },[id])
  
    
    return (
        <div className='user-info-edit mt-5'>
            <p>{id}</p>
            <form className='w-50 mx-auto'>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Name</label>
                    <input type="text" value={userInfo.name} class="form-control" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Phone No</label>
                    <input type="text" value={userInfo.contactNumber} class="form-control" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Gender</label>
                    <select className='ms-5'>
                        <option value='male'>Male</option>
                        <option value='female'>Female</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Date of Birth</label>
                    <input type="date" class="form-control" />
                </div>
            </form>
        </div>
    )
}

export default EditInfo;
