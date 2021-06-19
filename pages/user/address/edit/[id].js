import React from 'react'
import { useRouter } from 'next/router.js'
import AddressForm from '../../../../component/address-form';
const IdofAddress = () => {
    let router = useRouter()
    console.log(router);
    return (
        <div>
            <AddressForm />
        </div>
    )
}

export default IdofAddress;
