import React, { useEffect, useState } from 'react'
import location from '../assets/location.svg'
import payment from '../assets/payment.svg'
import complete from '../assets/tick.svg'

import AddressSelector from '../component/address-selector'
import useUrl from '../component/hooks/useUrl'
import Link from 'next/link.js'
import { useData } from '../store'
// import the stylesheet
import 'react-step-progress/dist/index.css';
import OrderSummery from '../component/order-summery'
import PaymentController from '../component/payment-controller'

const StepIndex = () => {
    let { url } = useUrl()
    let { auth } = useData()
    let [allAddress, setAlladdress] = useState()
    let [radio, setRadio] = useState()
    let [step, setStep] = useState(0)
    let [addressId, setAddressId] = useState()
    useEffect(() => {
        fetch(`${url}/address/all/${auth.user._id}`, {
            method: 'GET'
        }).then(res => res.json())
            .then((data) => {
                setAlladdress(data.allAddress)
                setRadio(new Array(data.allAddress.length).fill(false))

            })
    }, [])

    let handleRadio = (index, id) => {

        let radioState = new Array(allAddress.length).fill(false)
        radioState[index] = !radioState[index]
        setRadio([...radioState])
        setAddressId(id)
        console.log(radioState);
    }

    function stepIncreaser() {
        if (step == 1) {
            return { width: '50%' }
        } else if (step == 2) {
            return { width: '100%' }
        } else {
            return { width: '0%' }
        }
    }
    function AddressComponent() {
        return <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', alignItems: 'center' }}>
            {allAddress.map((sig, index) => <AddressSelector handle={handleRadio} id={sig._id} key={index} index={index} radio={radio} name={sig.name} email={sig.email} country={sig.country} city={sig.city} streetAddress={sig.streetAddress} code={sig.postalCode} />)}
            <Link href='user/address/create'>
                <button className='btn btn-outline-success'>Add Shipping Address</button>
            </Link>
        </div>
    }

    function renderContent() {
        if (step == 0) {
            return radio && AddressComponent()

        } else if (step == 1) {
            return <PaymentController />
        }
    }
    function cardPayment() {
        let payBtn = document.getElementById('pay-btn')
        payBtn.click()



    }
    function handleNext() {
        if (step == 0) {
            setStep(pre => pre + 1)
        } else {
            cardPayment()
        }


    }
    return (

        <div className='step-progressbar'>
            <div className="step-progressbar__container">
                <div style={stepIncreaser()} className="progressbar" id='progress'></div>
                <div style={step >= 0 ? { border: '5px solid #018FF4' } : {}} className="progress-logo">
                    <img src={location} alt="" />
                </div>
                <div style={step >= 1 ? { border: '5px solid #018FF4' } : {}} className="progress-logo">
                    <img src={payment} alt="" />
                </div>
                <div style={step >= 2 ? { border: '5px solid #018FF4' } : {}} className="progress-logo">
                    <img src={complete} alt="" />
                </div>
                <div className="fake-progressbar" id='progress'></div>
            </div>
            <div className="step-progressbar__content container-fluid">
                <div className="row">
                    <div className="col-md-7">
                        <div>
                            {renderContent()}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '93%', margin: '1% auto' }}>
                            <button style={{ fontSize: '1.3rem' }} className='btn btn-outline-dark'>Back</button>
                            <button style={{ fontSize: '1.3rem' }} onClick={handleNext} className='btn btn-outline-success' >{step == 1 ? 'Pay' : 'Next'}</button>
                        </div>
                    </div>
                    <div style={{ order: '1' }} className='col-md-4'>
                        <OrderSummery />
                    </div>
                </div>
            </div>

        </div >
    )
}

export default StepIndex
