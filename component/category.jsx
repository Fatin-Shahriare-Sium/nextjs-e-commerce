import React from 'react'
import CategorySingle from './category.single'

const Category = () => {
    return (
    
        <div className="category-container">
                <CategorySingle name='Smart Phone'/>
                <CategorySingle name='Desktop'/>
                <CategorySingle name='Watch'/>
                <CategorySingle name='Smart Ac'/>
                <CategorySingle name='Motor Bike'/>
                <CategorySingle name='Smart tv & Android Tv'/>
                <CategorySingle name='Laptop'/>
        </div>
    )
}

export default Category
