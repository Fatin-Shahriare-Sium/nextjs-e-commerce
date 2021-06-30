import React, { useEffect, useState } from 'react'
import useUrl from '../../component/hooks/useUrl';
import { useData } from '../../store';
import Link from 'next/link.js'

const Info = () => {
    let { auth } = useData()
    let { url } = useUrl()
    let [userInfo, setUserInfo] = useState('')

    useEffect(() => {
        fetch(`${url}/user/info/${auth.user._id}`, {
            method: 'GET'
        }).then(res => res.json())
            .then((data) => {
                console.log(data);
                setUserInfo(data.userInfo)
            })
    }, [])
    return (
        <div className='user-info ms-5 mt-5'>
            <p style={{ fontSize: '2.3rem', textDecoration: 'underline' }}>Account Information</p>
            <div class="mb-3">
                <label class="form-label">Name</label>
                <p>{userInfo.name}</p>
            </div>

            <div class="mb-3">
                <label class="form-label">Phone No</label>
                <p>{userInfo.contactNumber}</p>
            </div>

            <div class="mb-3">
                <label class="form-label">Gender</label>
                <p>{userInfo.gender}</p>
            </div>

            <div class="mb-3">
                <label class="form-label">Date of Birth</label>
                <p>{userInfo.brithDate}</p>
            </div>
            <Link href={`/user/edit-info/${userInfo._id}`}>
                <button style={{ fontSize: "1.7rem" }} className='btn btn-outline-dark mt-5'>Edit Information</button>
            </Link>

        </div>
    )
}

export default Info;
