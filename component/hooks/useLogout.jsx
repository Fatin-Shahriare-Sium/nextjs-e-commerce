import React from 'react'
import { useRouter } from 'next/router.js'
const UseLogout = () => {
    let router = useRouter()
    function handleLogout() {
        localStorage.setItem('userx', '')
        localStorage.getItem('tokenx', '')
        router.push('/')
    }
    return { handleLogout }
}

export default UseLogout;
