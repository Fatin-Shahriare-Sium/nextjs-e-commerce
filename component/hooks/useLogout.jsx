import React from 'react'
import { useRouter } from 'next/router.js'
const UseLogout = () => {
    let router = useRouter()
    function handleLogout() {
        localStorage.setItem('userx', JSON.stringify(''))
        localStorage.setItem('tokenx', JSON.stringify(''))
        router.push('/login')
    }
    return { handleLogout }
}

export default UseLogout;
