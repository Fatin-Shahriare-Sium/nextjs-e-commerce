import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useSignUp from "../../component/hooks/useSignup";
import Small from "../../component/small";
import eye from '../../assets/eye.svg'
import eyeX from '../../assets/eye-slash.svg'
import Offcanvas from "../../component/offcanvas";
import CartedOffcanvas from "../../component/carted-offcanvas";
const Index = () => {
    let { eye1, eye2, handleEye, handleSignUp, error } = useSignUp()
    let [loading, setLoading] = useState(false)

    function handleLoadingShower(e) {

        setLoading(pre => !pre)
    }

    function createToast() {
        error.color == 'success' ? toast.success(error.msg, {
            className: 'custom-toast'
        }) : toast.warning(error.msg, {
            className: 'custom-toast'
        })
    }
    useEffect(() => {
        if (error.msg) {
            createToast()
        }
    }, [error.msg])
    // 
    if (process.browser) {
        window.onbeforeunload = () => {
            // your callback

        }
    }
    //
    return (
        <div className='signup'>
            <p style={{ fontSize: '2rem', fontWeight: '700', textDecoration: 'underline' }}>Sign Up</p>
            <form onSubmit={(event) => { handleSignUp(event, handleLoadingShower) }}>
                <div class="mb-3">
                    <label class="form-label">Your Name</label>
                    <input type="text" class="form-control" />
                    {error.name && <Small text={error.name} />}
                </div>
                <div class="mb-3">
                    <label class="form-label">Email address</label>
                    <input type="email" class="form-control" />
                    {error.email && <Small text={error.email} />}
                </div>
                <div class="mb-3">
                    <label class="form-label">Password</label>
                    <div className="input-box">
                        <input id='password' type="password" class="form-control" />

                        <img className='input-box__eye' src={eye1 ? eyeX : eye} onClick={() => handleEye(document.getElementById('password'), 1)} />

                    </div>
                    {error.password && <Small text={error.password} />}
                </div>
                <div class="mb-3">
                    <label class="form-label">Confrim Password</label>
                    <div className="input-box">
                        <input id='con-password' type="password" class="form-control" />
                        <img className='input-box__eye' src={eye2 ? eyeX : eye} onClick={() => handleEye(document.getElementById('con-password'), 2)} />

                    </div>
                    {error.conPass && <Small text={error.conPass} />}
                </div>
                {loading ? <button class="btn btn-outline-success" type="button" disabled>
                    <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                    Loading...
                </button> : <button type="submit" class="btn btn-outline-success">Create Account</button>}
            </form>
            <ToastContainer position="top-center"
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable={false}
                autoClose={2000}
                pauseOnHover />


        </div>
    )
}
export default Index;
