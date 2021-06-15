import React from 'react'

const Layout = ({children}) => {
    return (
        <div style={{backgroundColor:'#ffffff',minHeight:'100vh'}} className='layout'>
            {children}
        
        </div>
    )
}

export default Layout;
