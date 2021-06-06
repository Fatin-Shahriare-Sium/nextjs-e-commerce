import React from 'react'
import Link from 'next/link.js'
import { signIn, signOut, useSession } from 'next-auth/client'
import useLogin from './hooks/useLogin'
import Alert from './alert'
const Login = ({handle}) => {
    let {handleLogin,error}=useLogin()

    return (
        <div className='login'>
            <p style={{fontSize:'2.5rem',fontWeight:'700',color:'var(--text-color)',marginLeft:'3%'}}>Login</p>
            <div className="login-form">
                {error.msg && <Alert text={error.msg} color={error.color}/>}
            <form onSubmit={(event)=>handleLogin(event)}>
                    <div class="mb-3">
                        <label class="form-label">Email address</label>
                        <input type="email" class="form-control" aria-describedby="emailHelp"/>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1"/>
                    </div>
                    <button type="submit" class="btn btn-outline-success">Login</button>
            </form>
            <div className="login-info">
                <p onClick={handle}>Don't have an account? <Link href='/signup'>Sign up</Link></p>
                <p onClick={handle}><Link href='/forget'>Forget Password?</Link></p>
            </div>
            </div>
        </div>
    )
}

export default Login;
