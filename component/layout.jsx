import React from 'react'
import BottomNav from './bottom-nav';
const Layout = ({ children }) => {
    return (
        <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }} className='layout'>

            {children}
            <BottomNav />
        </div>
    )
}

export default Layout;
