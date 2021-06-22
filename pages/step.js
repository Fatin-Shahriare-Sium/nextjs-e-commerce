import React, { useEffect, useState } from 'react'
import Step from '../component/step'
import AddressSelector from '../component/address-selector'
import useUrl from '../component/hooks/useUrl'
import { useData } from '../store'
const StepIndex = () => {
    let { url } = useUrl()
    let { auth } = useData()
    let [allAddress, setAlladdress] = useState()
    let [radio, setRadio] = useState()
    useEffect(() => {
        fetch(`${url}/address/all/${auth.user._id}`, {
            method: 'GET'
        }).then(res => res.json())
            .then((data) => {
                console.log(data);
                setAlladdress(data.allAddress)
                setRadio(new Array(data.allAddress.length).fill(false))

            })
    }, [])

    let handleRadio = (index) => {
        let radioState = radio
        radioState[index] = !radio[index]
        setRadio([...radioState])
        console.log(radio[index]);
    }
    return (
        <div>
            {radio && allAddress.map((sig, index) => <AddressSelector handle={handleRadio} key={index} index={index} radio={radio} name={sig.name} email={sig.email} country={sig.country} city={sig.city} streetAddress={sig.streetAddress} code={sig.postalCode} />)}
        </div>
    )
}

export default StepIndex
