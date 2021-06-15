import Link from 'next/link';
import React from 'react'

const UserSingleTab = ({href,name,icon,handler,value}) => {
    return (
        <Link href={href}>
            <div onClick={()=>handler(name)} className={value==name?'tab clicked':'tab'}>
                <div className="tab-img">
                    <img style={{height:"23px",width:'23px',objectFit:"contain"}} src={icon} alt=""  />
                </div>
                
                <div style={{marginLeft:'3%'}} className="tab-name">

                    <p style={{margin:'0px',textAlign:'center'}}>{name}</p>

                </div>
               
            </div>
        </Link>
    )
}

export default UserSingleTab;
