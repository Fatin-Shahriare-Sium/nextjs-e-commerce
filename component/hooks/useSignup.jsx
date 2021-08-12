import { useState } from "react"
import useUrl from "./useUrl"

let useSignUp = () => {
    let { url } = useUrl()
    let [eye1, setEye1] = useState(false)
    let [eye2, setEye2] = useState(false)
    let [error, setError] = useState({})
    let handleEye = (e, eye) => {

        if (e.type == 'text') {
            e.type = 'password'
        } else {
            e.type = 'text'
        }
        if (eye == 1) {
            setEye1(pre => !pre)
        } else {
            setEye2(pre => !pre)

        }
        setError({})
    }

    let handleSignUp = (e) => {
        e.preventDefault()
        let name = e.target[0].value
        let email = e.target[1].value
        let pass = e.target[2].value
        let conPass = e.target[3].value
        setError({
            name: !name ? 'Please,give your name' : '',
            email: !email ? 'Please,give your email' : '',
            password: !pass ? 'Please,give your password' : '',
            conPass: pass !== conPass ? 'Password is not matching' : '',
            color: ''
        })
        if (pass == conPass && email && name && pass) {
            console.log('pass==conPass && email && name');
            fetch(`${url}/auth/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    email,
                    password: pass
                })
            }).then(res => res.json())
                .then((data) => {
                    console.log(data);
                    localStorage.setItem('tokenx', data.token)
                    localStorage.setItem('userx', JSON.stringify(data.user))
                    setError({
                        msg: data.msg,
                        color: data.color
                    })
                })
        }
    }
    return { eye1, eye2, handleEye, handleSignUp, error }
}

export default useSignUp;