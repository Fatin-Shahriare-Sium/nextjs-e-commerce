import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import useUrl from '../../../component/hooks/useUrl'
import { useData } from '../../../store'
import Alert from '../../../component/alert';
const EditInfo = () => {
    let router=useRouter()
    let {auth}=useData()
    let {id}=router.query
    let {url}=useUrl()
    let[error,setError]=useState({msg:'',color:''})
    useEffect(()=>{
        fetch(`${url}/user/info/${auth.user._id}`,{
        method:'GET'
    }).then(res=>res.json())
    .then((data)=>{
        let name=document.getElementById('name')
        let phoneNum=document.getElementById('phone')
        let gender=document.getElementById('gender')
        let brithDate=document.getElementById('date')
       
        let user=data.userInfo
    
        name.value=user.name
        phoneNum.value=user.contactNumber
        gender.value=user.gender
        brithDate.value=user.brithDate
    })
       
    },[id])


    let handleEditAccountInfo=(e)=>{
        e.preventDefault()
        let name=e.target[0].value
        let phoneNum=e.target[1].value
        let gender=e.target[2].value
        let brithDate=e.target[3].value
    

        fetch(`${url}/user/info/edit/${id}`,{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                name,
                phoneNum,
                gender,
                brithDate
            })
        }).then(res=>res.json())
        .then((data)=>{
            console.log(data)
            setError({
                msg:data.msg,
                color:data.color
            })
        })
    }
  
    
    return (
        <div className='user-info-edit mt-5'>
           

            <p style={{fontSize:'2.3rem',textDecoration:'underline'}}>Update Your Account</p>
            {error.msg && <Alert text={error.msg} color={error.color}/>}
            <form onSubmit={(event)=>handleEditAccountInfo(event)} className='w-50 mx-auto'>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Name</label>
                    <input type="text" id='name' class="form-control" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Phone No</label>
                    <input type="text" id='phone'  class="form-control" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Gender</label>
                    <select id='gender' className='ms-5'>
                        <option value='Male'>Male</option>
                        <option value='Female'>Female</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Date of Birth</label>
                    <input type="date" id='date' class="form-control" />
                </div>
                <button type='submit' style={{width:'70px'}} className='btn btn-outline-dark mt-3'>Save</button>
            </form>
        </div>
    )
}

export default EditInfo;
