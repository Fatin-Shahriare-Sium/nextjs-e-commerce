import { useState } from "react";
import useUrl from "./useUrl";

let useLogin=()=>{
    let {url}=useUrl()
    let[error,setError]=useState({})
    let handleLogin=(e)=>{
        e.preventDefault()
        console.log(e);
        let email=e.target[0].value
        let pass=e.target[1].value
        
       if(email && pass){
        fetch(`${url}/auth/login`,{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                email,
                password:pass
            })
        }).then(res=>res.json())
        .then((data)=>{
            localStorage.setItem('tokenx',data.token)
                localStorage.setItem('userx',JSON.stringify(data.user))
                setError({
                    msg:data.msg,
                    color:data.color
                })
        })
       }
    }
    
    return {handleLogin,error}
}

export default useLogin;