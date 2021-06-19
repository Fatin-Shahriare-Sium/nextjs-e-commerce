import React, { useEffect, useState } from 'react'
import useUrl from '../../../component/hooks/useUrl'
import { useData } from '../../../store'
import Link from 'next/link.js'
import Alert from '../../../component/alert'
import AddressSingle from '../../../component/address-single'
const Index = () => {
    let { url } = useUrl()
    let { auth } = useData()
    let [allAddress, setAlladdress] = useState()
    let [error, setError] = useState({ msg: "", color: '' })
    useEffect(() => {

        fetch(`${url}/address/all/${auth.user._id}`, {
            method: 'GET'
        }).then(res => res.json())
            .then((data) => {
                setAlladdress(data.allAddress)

            })
    }, [])

    let handleDeleteSingleAddress = (id) => {

        fetch(`${url}/address/delete/${id}`, {
            method: 'GET'
        }).then(res => res.json())
            .then(data => {

                setError({
                    msg: data.msg,
                    color: data.color
                })
                if (data.color == 'success') {
                    let withoutDeletedAddress = allAddress.filter(sig => sig._id !== id)
                    setAlladdress(withoutDeletedAddress)
                }
            })
    }
    return (
        <div>
            {error.msg && <Alert text={error.msg} color={error.color} />}
            <table class="table table-responsive">

                <thead>
                    <tr>

                        <th>Name</th>
                        <th>Email</th>
                        <th>City</th>
                        <th>Street Address</th>
                        <th style={{ textAlign: 'center' }} >Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allAddress && allAddress.map((sig, index) => <tr key={index}>
                            <td>{sig.name}</td>
                            <td>{sig.email}</td>
                            <td>{sig.city}</td>
                            <td>{sig.streetAddress}</td>
                            <td style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Link href={`/user/address/edit/${sig._id}`}><button style={{ marginRight: '1%' }} className='btn btn-outline-dark'>Edit</button></Link>
                                <button onClick={() => handleDeleteSingleAddress(sig._id)} className='btn btn-outline-danger'>Delete</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
            <Link href='/user/address/create'><button style={{ fontSize: '1.3rem' }} className='btn btn-outline-success mt-3'>Add New Address</button></Link>
        </div >
    )
}

export default Index;
