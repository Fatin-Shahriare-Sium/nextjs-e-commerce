import React, { useState } from 'react'
import useUrl from '../../component/hooks/useUrl';
import { useData } from '../../store';
import Small from '../../component/small.jsx'
import Alert from '../../component/alert';

const ChangePassword = () => {
    let {auth}=useData()
    let [error,setError]=useState({msg:'',color:''})
    let {url}=useUrl()
    let handlechangePassword=(e)=>{
        e.preventDefault()
        let oldPass=e.target[0].value
        let newPass=e.target[1].value
        let conPass=e.target[2].value

        if(newPass=='' || conPass==''){
      
          return  setError({
                msg:'Password is not matching',
                color:'danger'
            })
       
        }

        if(newPass==conPass){

            fetch(`${url}/auth/changepass/${auth.tokenx}`,{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    oldPass,
                    newPass
                })
            }).then(res=>res.json())
            .then(data=>{
                setError({
                    msg:data.msg,
                    color:data.color
                })
            })

        }else{
            setError({
                msg:'Password is not matching',
                color:'danger'
            })
        }
    }
    return (
        <div className='change-password'>
            {error.msg && <Alert text={error.msg} color={error.color}/>}
            <form className='w-50 mt-5 ms-5' onSubmit={(event)=>handlechangePassword(event)}>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Old Password</label>
                        <input type="password" class="form-control" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">New Password</label>
                        <input type="password" class="form-control"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                        <input type="password" class="form-control"/>
                    </div>
                    <button type="submit" class="btn btn-outline-primary mt-3">Change Password</button>
        </form>
        </div>
    )
}

export default ChangePassword;
