import React from 'react'
import rarrow from '../assets/r-arrow.svg'
import Link from 'next/link.js'
const CategorySingle = ({ name, href }) => {
    return (
        <Link href={href}>
            <div className='single-category'>
                <div className='single-category__name'>
                    <p style={{ margin: '0px' }}>{name}</p>
                </div>
                <div className="single-category__arrow">
                    <img src={rarrow} alt="" />
                </div>
            </div>
        </Link>
    )
}

export default CategorySingle;
