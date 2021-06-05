import React from 'react'
import Link from 'next/link.js'
import { signIn, signOut, useSession } from 'next-auth/client'
const Login = () => {
    return (
        <div className='login'>
            <p style={{fontSize:'2.5rem',fontWeight:'700',color:'var(--text-color)',marginLeft:'3%'}}>Login</p>
            <div className="login-form">
            <form>
                    <div class="mb-3">
                        <label class="form-label">Email address</label>
                        <input type="email" class="form-control" aria-describedby="emailHelp"/>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1"/>
                    </div>
                    <button type="submit" class="btn btn-outline-success">Submit</button>
            </form>
            <div className="login-info">
                <p>Don't have an account? <Link href='/signup'>Sign up</Link></p>
                <p><Link href='/forget'>Forget Password?</Link></p>
            </div>
            </div>
          <p onClick={()=>signIn()}>Github</p>
        </div>
    )
}

export default Login;
