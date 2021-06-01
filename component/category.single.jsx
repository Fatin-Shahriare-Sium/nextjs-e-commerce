import React from 'react'
import rarrow from '../assets/r-arrow.svg'
const CategorySingle = ({name}) => {
    return (
        <div className='single-category'>
            <div className='single-category__name'>
                <p style={{margin:'0px'}}>{name}</p>
            </div>
            <div className="single-category__arrow">
                <img src={rarrow} alt="" />
            </div>
        </div>
    )
}

export default CategorySingle;
