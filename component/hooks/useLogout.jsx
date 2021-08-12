import React from 'react'
import { useRouter } from 'next/router.js'
const UseLogout = () => {
    let router = useRouter()
    function handleLogout() {
        localStorage.removeItem('userx')
        localStorage.removeItem('tokenx')
        router.push('/login')
    }
    return { handleLogout }
}

export default UseLogout;
