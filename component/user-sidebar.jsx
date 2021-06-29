
import UserSingleTab from '../component/user-single-tab.jsx'
import user from '../assets/user.svg'
import love from '../assets/love.svg'
import key from '../assets/key.svg'
import location from '../assets/location.svg'
import logout from '../assets/c-door.svg'
import comment from '../assets/comment.svg'
import order from '../assets/order.svg'
import { useState, useCallback } from 'react'
import useUrl from './hooks/useUrl.jsx'
import { useData } from '../store/index.js'
import Alert from './alert.jsx'
const UserSidebar = () => {
    let [btnValue, setBtnValue] = useState('Account Info')
    let { url } = useUrl()
    let { auth } = useData()
    let [preImg, setpreImg] = useState()
    let [error, setError] = useState()
    function handleFileInput(e) {
        let img = e.target.files[0]

        let preUrl = URL.createObjectURL(img)
        let profilePic = document.getElementById('profile-img')
        profilePic.src = preUrl
        setpreImg(img)
    }

    function handleBtn(value) {
        setBtnValue(value)
    }
    let handleImgUploader = async (picx) => {
        console.log(picx);
        const data = new FormData();
        data.append('file', picx)
        data.append('upload_preset', 'taskman');
        let res = await fetch(`https://api.Cloudinary.com/v1_1/sium/image/upload`, {
            method: 'POST',
            body: data
        })

        let Imgdata = await res.json()
        console.log(Imgdata);
        fetch(`${url}/user/uploadProfilePic`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId: auth.user._id,
                imgUrl: Imgdata.url
            })
        }).then(res => res.json())
            .then(data => {
                let updatedUser = { ...data.userx, profilePic: Imgdata.url }
                localStorage.setItem('userx', JSON.stringify(updatedUser))
                setError({
                    msg: data.msg,
                    color: data.color
                })
                setpreImg('')
            })


        //send url to user database
        //
    }
    //
    return (
        <div className='user-sidebar'>
            <div className="user-sidebar__img">
                {error && <Alert text={error.msg} color={error.color} />}
                {auth.user.profilePic && <img className='profile-img' id='profile-img' src={auth.user.profilePic} />}

                <div className='user-sidebar__btn'>

                    <button className='btn btn-outline-success'>
                        Change Img
                        <input className='user-sidebar__input' onChange={(event) => handleFileInput(event)} type="file" />
                    </button>
                    {preImg && <button onClick={() => handleImgUploader(preImg)} className='btn btn-outline-success'>Save</button>}
                </div>

            </div>
            <div className="user-sider__tabs">
                <UserSingleTab href='/user/info' icon={user} handler={handleBtn} value={btnValue} name={'Account Info'} />
                <UserSingleTab href='/user/address' icon={location} handler={handleBtn} value={btnValue} name='Address' />
                <UserSingleTab href='/user/wishlist' icon={love} handler={handleBtn} value={btnValue} name='Your Wishlists' />
                <UserSingleTab href='/user/reviews' icon={comment} handler={handleBtn} value={btnValue} name='Reviews' />
                <UserSingleTab href='/user/order' icon={order} handler={handleBtn} value={btnValue} name={'Your Orders'} />
                <UserSingleTab href='/user/changepassword' icon={key} handler={handleBtn} value={btnValue} name={'Change Password'} />
                <UserSingleTab href='/user/logout' icon={logout} handler={handleBtn} value={btnValue} name={'logout'} />


            </div>
        </div>
    )
}

export default UserSidebar;
