
import UserSingleTab from '../component/user-single-tab.jsx'
import Image from 'next/image.js'
import imx from '../assets/img.jpg'
import user from '../assets/user.svg'
import love from '../assets/love.svg'
import key from '../assets/key.svg'
import location from '../assets/location.svg'
import logout from '../assets/c-door.svg'
import comment from '../assets/comment.svg'
import order from '../assets/order.svg'
import { useState, useCallback } from 'react'
import Cropper from 'react-easy-crop'
const UserSidebar = () => {
    let [btnValue, setBtnValue] = useState('Account Info')
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)

    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        console.log(croppedArea, croppedAreaPixels)
    }, [])
    function handleBtn(value) {
        setBtnValue(value)
    }
    return (
        <div className='user-sidebar'>
            <div className="user-sidebar__img">
                <Image src={imx} alt='' objectFit='contain' height="170" width='230' />
                <button className='btn btn-outline-success'>Change Profile Img</button>
            </div>
            <div className="user-sider__tabs">
                <UserSingleTab href='/user/info' icon={user} handler={handleBtn} value={btnValue} name={'Account Info'} />
                <UserSingleTab href='/user/address' icon={location} handler={handleBtn} value={btnValue} name='Address' />
                <UserSingleTab href='/user/wishlist' icon={love} handler={handleBtn} value={btnValue} name='Your Wishlists' />
                <UserSingleTab href='/user/review' icon={comment} handler={handleBtn} value={btnValue} name='Reviews' />
                <UserSingleTab href='/user/order' icon={order} handler={handleBtn} value={btnValue} name={'Your Orders'} />
                <UserSingleTab href='/user/changepassword' icon={key} handler={handleBtn} value={btnValue} name={'Change Password'} />
                <UserSingleTab href='/user/logout' icon={logout} handler={handleBtn} value={btnValue} name={'logout'} />


            </div>
        </div>
    )
}

export default UserSidebar;
