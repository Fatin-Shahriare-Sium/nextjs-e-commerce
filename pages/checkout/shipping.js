
import { useEffect, useState } from 'react'

import AddressSelector from '../../component/address-selector'
import useUrl from '../../component/hooks/useUrl'
import Link from 'next/link.js'
import { useData } from '../../store'

const Shipping = () => {
    let { url } = useUrl()
    let { auth } = useData()
    let [allAddress, setAlladdress] = useState()
    let [radio, setRadio] = useState()
    useEffect(() => {
        fetch(`${url}/address/all/${auth.user._id}`, {
            method: 'GET'
        }).then(res => res.json())
            .then((data) => {
                setAlladdress(data.allAddress)
                setRadio(new Array(data.allAddress.length).fill(false))

            })
    }, [])

    let handleRadio = (index) => {

        let radioState = new Array(allAddress.length).fill(false)
        radioState[index] = !radioState[index]
        setRadio([...radioState])
        console.log(radioState);
    }
    function AddressComponent() {
        return <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', alignItems: 'center' }}>
            {allAddress.map((sig, index) => <AddressSelector handle={handleRadio} key={index} index={index} radio={radio} name={sig.name} email={sig.email} country={sig.country} city={sig.city} streetAddress={sig.streetAddress} code={sig.postalCode} />)}
            <Link href='user/address/create'>
                <button className='btn btn-outline-success'>Add Shipping Address</button>
            </Link>
        </div>
    }
    return (
        <>
            <p style={{ fontSize: '2rem', marginTop: "1%", fontWeight: "500" }}>Select Shipping Address</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', alignItems: 'center' }}>

                {radio && allAddress.map((sig, index) => <AddressSelector handle={handleRadio} key={index} index={index} radio={radio} name={sig.name} email={sig.email} country={sig.country} city={sig.city} streetAddress={sig.streetAddress} code={sig.postalCode} />)}
                <Link href='/user/address/create'>
                    <button className='btn btn-outline-success'>Add Shipping Address</button>
                </Link>
            </div>
        </>
    )
}

export default Shipping
