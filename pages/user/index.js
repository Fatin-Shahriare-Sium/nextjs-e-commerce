import React, { useEffect } from 'react'
import UserSidebar from '../../component/user-sidebar.jsx'
import { useData } from '../../store/index.js'
import { useRouter } from 'next/router.js'
import Loginx from '../login.js'
const User = () => {
    let { auth } = useData()
    let router = useRouter()
    useEffect(() => {
        if (!auth.user) {
            router.push('/login')
        }
    }, [router.isReady])

    return (
        <div>

        </div>
    )
}

export default User;
