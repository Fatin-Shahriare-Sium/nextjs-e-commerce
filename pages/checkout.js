import React, { useEffect, useState } from 'react'
import location from '../assets/location.svg'
import payment from '../assets/payment.svg'
import complete from '../assets/tick.svg'
import cartLogo from '../assets/cart-btn.svg'
import AddressSelector from '../component/address-selector'
import useUrl from '../component/hooks/useUrl'
import Link from 'next/link.js'
import { useData } from '../store'
import { useRouter } from 'next/router.js'
// import the stylesheet
import OrderSummery from '../component/order-summery'
import CartedProductShower from '../component/carted-product-shower'
import PaymentController from '../component/payment-controller'

const StepIndex = () => {
    let { url } = useUrl()
    let { auth, productState } = useData()
    let router = useRouter()
    let [allAddress, setAlladdress] = useState()
    let [radio, setRadio] = useState()
    let [step, setStep] = useState(0)
    let [paymentMethod, setpaymentMethod] = useState()
    let [addressId, setAddressId] = useState()
    let [tnxId, setTnxId] = useState()
    let [modal, setModal] = useState(false)
    useEffect(() => {
        fetch(`${url}/address/all/${auth.user._id}`, {
            method: 'GET'
        }).then(res => res.json())
            .then((data) => {
                setAlladdress(data.allAddress)
                setRadio(new Array(data.allAddress.length).fill(false))

            })
    }, [])


    useEffect(() => {

        if (JSON.parse(localStorage.getItem('userx')) == "") {

            router.push('/login')
        }
    }, [typeof window !== 'undefined' && localStorage.getItem('tokenx')])






    let handleRadio = (index, id) => {

        let radioState = new Array(allAddress.length).fill(false)
        radioState[index] = !radioState[index]
        setRadio([...radioState])
        setAddressId(id)
        console.log(radioState);
    }

    function stepIncreaser() {
        if (step == 1) {
            return { width: '33%' }
        } else if (step == 2) {
            return { width: '66%' }
        } else if (step == 3) {
            return { width: '99%' }
        } else if (step == 4) {
            return { width: '100%' }
        } else {
            return { width: '0%' }
        }
    }

    function AddressComponent() {
        return <>
            <p style={{ fontSize: '2rem', fontWeight: '700', textDecoration: 'underline' }}>Select your shipping address</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', alignItems: 'center' }}>
                {allAddress.map((sig, index) => <AddressSelector handle={handleRadio} id={sig._id} key={index} index={index} radio={radio} name={sig.name} email={sig.email} country={sig.country} city={sig.city} streetAddress={sig.streetAddress} code={sig.postalCode} />)}
                <Link href='user/address/create'>
                    <button className='btn btn-outline-success'>Add Shipping Address</button>
                </Link>
            </div>
        </>
    }

    function handlePaymentMethod(type) {
        setpaymentMethod(type)
    }

    function renderContent() {
        if (step == 0) {
            return <CartedProductShower />
        } else if (step == 1) {
            return radio && AddressComponent()

        } else if (step == 2) {
            return <PaymentController success={showSuccessComponenet} handlePaymentMethod={handlePaymentMethod} addressId={addressId} />
        } else if (step == 3) {
            return <div style={{ minHeight: '33vh', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <p className='success-text'>Thanks for placing order.We are verifing your payment status.Then,we will process your order,inshallah</p>
            </div>
        }
    }

    function cardPayment() {
        let payBtn = document.getElementById('pay-btn')
        payBtn.click()



    }

    function toggleModal() {
        setModal(pre => !pre)
    }

    function handleNext() {
        if (step == 0) {
            setStep(pre => pre + 1)
        } else if (step == 1 && addressId) {
            setStep(pre => pre + 1)
        } else if (paymentMethod == 'card') {
            cardPayment()
        } else if (paymentMethod == 'bkash') {
            setModal(true)
        } else if (paymentMethod == 'nagad') {
            setModal(true)
        }


    }

    function handleBack() {
        if (step == 0) {
            return
        } else {
            return setStep(pre => pre - 1)
        }
    }

    // handleBkashPayment
    function handleBkashPayment() {

        if (tnxId) {

            fetch(`${url}/order/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    type: 'bkash',
                    product: productState.carted,
                    totalAmount: localStorage.getItem('totalAmount'),
                    addressId: addressId,
                    user: auth.user,
                    bkashTnxId: tnxId,
                    nagadTnxId: ''
                })
            }).then(res => res.json())
                .then(data => {
                    if (data.msg == 'success') {
                        setTnxId('')
                        toggleModal()
                        return setStep(3)
                    }
                })

        } else {

        }
    }

    // end handleBkashPayment


    //handleNagadPayment


    function handleNagadPayment() {

        if (tnxId) {
            fetch(`${url}/order/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    type: 'nagad',
                    product: productState.carted,
                    totalAmount: localStorage.getItem('totalAmount'),
                    addressId: addressId,
                    user: auth.user,
                    bkashTnxId: '',
                    nagadTnxId: tnxId
                })
            }).then(res => res.json())
                .then(data => {
                    if (data.msg == 'success') {
                        setTnxId('')
                        toggleModal()
                        return setStep(3)
                    }
                })
        } else {

        }


    }

    //end handleNagadPayment

    //show-success component

    function showSuccessComponenet() {
        setStep(3)
    }
    return (

        <div className='step-progressbar'>
            <div className="step-progressbar__container">
                <div style={stepIncreaser()} className="progressbar" id='progress'></div>
                <div style={step >= 0 ? { border: '5px solid #018FF4' } : {}} className="progress-logo">
                    <img src={cartLogo} alt="" />
                </div>
                <div style={step >= 1 ? { border: '5px solid #018FF4' } : {}} className="progress-logo">
                    <img src={location} alt="" />
                </div>
                <div style={step >= 2 ? { border: '5px solid #018FF4' } : {}} className="progress-logo">
                    <img src={payment} alt="" />
                </div>
                <div style={step >= 3 ? { border: '5px solid #018FF4' } : {}} className="progress-logo">
                    <img src={complete} alt="" />
                </div>
                <div className="fake-progressbar" id='progress'></div>
            </div>
            <div className="step-progressbar__content container-fluid">
                {/* Modal start */}


                <div class={modal ? 'modal fade show' : 'modal fade'} style={modal ? { display: 'block' } : { display: 'none' }}>
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">{paymentMethod == 'bkash' ? 'Bkash' : 'Nagad'}</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" onClick={toggleModal} aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <p style={{ fontSize: '1.7rem', fontWeight: '500' }}>Please,send money to 018723e92832 this number.Then,put your tnxId here.we will check it soon</p>
                                <input style={{ width: '90%', margin: '0px auto' }} onChange={paymentMethod == 'bkash' ? (event) => setTnxId(event.target.value) : (event) => setTnxId(event.target.value)} placeholder='tnxId' />
                            </div>
                            <div class="modal-footer">
                                <button type="button" onClick={paymentMethod == 'bkash' ? handleBkashPayment : handleNagadPayment} class="btn btn-primary">Done</button>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Modal end */}
                <div className="row">
                    <div className="col-md-7">
                        <div>
                            {renderContent()}
                        </div>
                        <div style={step == 3 ? { display: 'none' } : { display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '93%', margin: '1% auto' }}>
                            <button style={{ fontSize: '1.3rem' }} onClick={handleBack} className='btn btn-outline-dark'>Back</button>
                            <button style={{ fontSize: '1.3rem' }} onClick={handleNext} className='btn btn-outline-success' >{step == 2 ? 'Pay' : 'Next'}</button>
                        </div>
                        <div style={step == 3 ? { display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '93%', margin: '1% auto' } : { display: 'none' }}>
                            <Link href='/'>
                                <button style={{ fontSize: '1.3rem' }} className='btn btn-outline-primary'>Shop More</button>
                            </Link>
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
