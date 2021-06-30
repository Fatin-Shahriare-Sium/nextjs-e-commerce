import { useState } from "react";
import useUrl from "./useUrl";
import { useRouter } from 'next/router'

let useLogin = () => {
    let { url } = useUrl()
    let [error, setError] = useState({})
    let router = useRouter()
    let handleLogin = (e) => {
        e.preventDefault()
        console.log(e);
        let email = e.target[0].value
        let pass = e.target[1].value

        if (email && pass) {
            fetch(`${url}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password: pass
                })
            }).then(res => res.json())
                .then((data) => {

                    localStorage.setItem('tokenx', data.token)
                    localStorage.setItem('userx', JSON.stringify(data.user))
                    setError({
                        msg: data.msg,
                        color: data.color
                    })
                    if (data.color == 'success') {
                        console.log('success');
                        setTimeout(() => {
                            router.push('/')
                        }, 300)
                    }
                })
        }
    }

    return { handleLogin, error }
}

export default useLogin;