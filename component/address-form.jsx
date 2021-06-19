import { useState } from "react"
import { useData } from "../store"
import useUrl from "./hooks/useUrl"
import Alert from './alert.jsx';
let AddressForm = () => {
    let {url}=useUrl()
    let {auth}=useData()
    let[error,setError]=useState({msg:'',color:''})
    let handleAddressCreateForm=(e)=>{
        e.preventDefault()
        let name=e.target[0].value
        let email=e.target[1].value 
        let contactNum=e.target[2].value
        let country=e.target[3].value
        let city=e.target[4].value
        let streetAddress=e.target[5].value
        let postalCode=e.target[6].value
        if(name=='' || email=='' || contactNum=='' || country=='' || city=='' || streetAddress=='' || postalCode==""){
            return setError({
                msg:'Please,fill all gaps',
                color:'warning'

            })
        }
        fetch(`${url}/address/create`,{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                userId:auth.user._id,
                name,
                email,
                contactNum,
                country,
                city,
                streetAddress,
                postalCode
            })
        }).then(res=>res.json())
        .then((data)=>{
           setError({
               msg:data.msg,
               color:data.color
           })
        })
    }
    return (
        <div className='address-form'>
            <p style={{fontSize:"1.7rem",fontWeight:'500',textDecoration:'underline'}}>New Address</p>
            {error.msg && <Alert text={error.msg} color={error.color}/>}
            <form onSubmit={(event)=>handleAddressCreateForm(event)} className='mt-5'>
                <div className="form-wrapper">
                    <div class="mb-3">
                        <label  class="form-label">Recipient Name</label>
                        <input type="text" class="form-control" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Recipient Email</label>
                        <input type="text" class="form-control" />
                    </div>
                    <div class="mb-3">
                        <label  class="form-label">Contact Number</label>
                        <input type="text" class="form-control" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Country</label>
                        <input type="text" class="form-control" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputtext1" class="form-label">City</label>
                        <input type="text" class="form-control" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputtext1" class="form-label">Street Address</label>
                        <input type="text" class="form-control" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputtext1" class="form-label">Postal Code</label>
                        <input type="text" class="form-control" />
                    </div>
                </div>

                 <button type='submit' style={{fontSize:"1.3rem",fontWeight:'500'}} className='btn btn-outline-success mt-5 ms-3'>Save Address</button>
            </form>
        </div>
    )
}

export default AddressForm;
