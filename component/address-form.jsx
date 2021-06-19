import { useEffect, useState } from "react"
import { useData } from "../store"
import useUrl from "./hooks/useUrl"
import Alert from './alert.jsx';
import { useRouter } from 'next/router.js'

let AddressForm = () => {
    let { url } = useUrl()
    let router = useRouter()
    let { id } = router.query
    let { auth } = useData()
    let [error, setError] = useState({ msg: '', color: '' })
    let [edit, setEdit] = useState(false)
    useEffect(() => {

        if (router.isReady && router.pathname == '/user/address/edit/[id]') {
            console.log(id);
            fetch(`${url}/address/${id}`, {
                method: 'GET'
            }).then(res => res.json())
                .then(data => {
                    setEdit(true)
                    console.log(data);
                    let name = document.getElementById('name')
                    let email = document.getElementById('email')
                    let number = document.getElementById('number')
                    let country = document.getElementById('country')
                    let city = document.getElementById('city')
                    let street = document.getElementById('street')
                    let postalCode = document.getElementById('postal-code')

                    let address = data.singleAddress

                    name.value = address.name
                    email.value = address.email
                    number.value = address.contactNum
                    country.value = address.country
                    city.value = address.city
                    street.value = address.streetAddress
                    postalCode.value = address.postalCode
                })

        }

    }, [router.isReady])


    let handleAddressCreateForm = (e) => {
        e.preventDefault()
        let name = e.target[0].value
        let email = e.target[1].value
        let contactNum = e.target[2].value
        let country = e.target[3].value
        let city = e.target[4].value
        let streetAddress = e.target[5].value
        let postalCode = e.target[6].value
        if (name == '' || email == '' || contactNum == '' || country == '' || city == '' || streetAddress == '' || postalCode == "") {
            return setError({
                msg: 'Please,fill all gaps',
                color: 'warning'

            })
        }
        fetch(`${url}/address/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId: auth.user._id,
                name,
                email,
                contactNum,
                country,
                city,
                streetAddress,
                postalCode
            })
        }).then(res => res.json())
            .then((data) => {
                setError({
                    msg: data.msg,
                    color: data.color
                })
            })
    }

    let handleEditAddress = (e, idx) => {
        e.preventDefault()
        let name = e.target[0].value
        let email = e.target[1].value
        let contactNum = e.target[2].value
        let country = e.target[3].value
        let city = e.target[4].value
        let streetAddress = e.target[5].value
        let postalCode = e.target[6].value
        if (name == '' || email == '' || contactNum == '' || country == '' || city == '' || streetAddress == '' || postalCode == "") {
            return setError({
                msg: 'Please,fill all gaps',
                color: 'warning'

            })
        }
        fetch(`${url}/address/edit/${idx}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId: auth.user._id,
                name,
                email,
                contactNum,
                country,
                city,
                streetAddress,
                postalCode
            })
        }).then(res => res.json())
            .then((data) => {
                setError({
                    msg: data.msg,
                    color: data.color
                })
            })
    }
    return (
        <div className='address-form'>
            <p style={{ fontSize: "1.7rem", fontWeight: '500', textDecoration: 'underline' }}>New Address</p>
            {error.msg && <Alert text={error.msg} color={error.color} />}
            <form onSubmit={edit ? (event) => handleEditAddress(event, id) : (event) => handleAddressCreateForm(event)} className='mt-5'>
                <div className="form-wrapper">
                    <div class="mb-3">
                        <label class="form-label">Recipient Name</label>
                        <input type="text" id='name' class="form-control" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Recipient Email</label>
                        <input type="text" id='email' class="form-control" />
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Contact Number</label>
                        <input type="text" id='number' class="form-control" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Country</label>
                        <input type="text" id='country' class="form-control" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputtext1" class="form-label">City</label>
                        <input type="text" id='city' class="form-control" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputtext1" class="form-label">Street Address</label>
                        <input type="text" id='street' class="form-control" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputtext1" class="form-label">Postal Code</label>
                        <input type="text" id='postal-code' class="form-control" />
                    </div>
                </div>

                <button type='submit' style={{ fontSize: "1.3rem", fontWeight: '500' }} className='btn btn-outline-success mt-5 ms-3'>Save Address</button>
            </form>
        </div>
    )
}

export default AddressForm;
