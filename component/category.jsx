import React from 'react'
import CategorySingle from './category.single'

const Category = () => {
    return (

        <div className="category-container">
            <CategorySingle href='/search?category=smart phone' name='Smart Phone' />
            <CategorySingle href='/search?category=desktop' name='Desktop' />
            <CategorySingle href='/search?category=watch' name='Watch' />
            <CategorySingle href='/search?category=ac' name='Smart Ac' />
            <CategorySingle href='/search?category=motor bike' name='Motor Bike' />
            <CategorySingle href='/search?category=tv' name='Smart tv & Android Tv' />
            <CategorySingle href='/search?category=laptop' name='Laptop' />
        </div>
    )
}

export default Category
