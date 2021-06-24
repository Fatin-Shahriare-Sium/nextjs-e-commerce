import React, { useEffect, useState } from 'react'
import Step from '../component/step-bar'
import AddressSelector from '../component/address-selector'
import useUrl from '../component/hooks/useUrl'
import Link from 'next/link.js'
import { useData } from '../store'
// import the stylesheet
import 'react-step-progress/dist/index.css';
import OrderSummery from '../component/order-summery'
import StepBar from '../component/step-bar'
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
    const step1Content = <h1>{radio && allAddress.map((sig, index) => <AddressSelector handle={handleRadio} key={index} index={index} radio={radio} name={sig.name} email={sig.email} country={sig.country} city={sig.city} streetAddress={sig.streetAddress} code={sig.postalCode} />)}</h1>;
    const step2Content = <h1>Step 2 Content</h1>;
    const step3Content = <h1>Step 3 Content</h1>;

    function AddressComponent() {
        return <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', alignItems: 'center' }}>
            {allAddress.map((sig, index) => <AddressSelector handle={handleRadio} key={index} index={index} radio={radio} name={sig.name} email={sig.email} country={sig.country} city={sig.city} streetAddress={sig.streetAddress} code={sig.postalCode} />)}
            <Link href='user/address/create'>
                <button className='btn btn-outline-success'>Add Shipping Address</button>
            </Link>
        </div>
    }
    return (
        <div>
            <StepBar />
            <OrderSummery />
            {
                radio && AddressComponent()
            }


        </div>
    )
}

export default StepIndex

{/* <StepProgressBar
startingStep={0}
contentClass='step-container'
steps={[
    {
        label: 'Step 1',
        subtitle: '10%',
        name: 'step 1',
        content: AddressComponent()
    },
    {
        label: 'Step 2',
        subtitle: '50%',
        name: 'step 2',
        content: step2Content,

    },
    {
        label: 'Step 3',
        subtitle: '100%',
        name: 'step 3',
        content: step3Content,

    }
]}
/> */}