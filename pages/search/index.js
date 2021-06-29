import React, { useEffect, useState } from 'react'
import SectionCard from '../../component/section-card'
import { useData } from '../../store'
import Product_Action from '../../store/action/productAction'
let categoriesName = [
    { name: 'Smart Phone', value: 'smart phone' },
    { name: 'Desktop', value: 'desktop' },
    { name: "Watch", value: 'watch' },
    { name: 'Smart Ac', value: 'ac' },
    { name: 'Motor Bike', value: 'motor bike' },
    { name: 'Smart TV & Andriod TV', value: 'tv' },
    { name: 'Laptop', value: 'laptop' }

]
let brandsName = [
    { name: 'Easy Fashion', value: 'easy' },
    { name: 'Walton', value: 'walton' },
    { name: 'Samsang', value: 'samsung' },
    { name: 'Hero', value: 'hero' },
    { name: 'Xiaomi', value: 'xiaomi' },
    { name: 'Apple', value: 'apple' },
    { name: 'Realme', value: 'realme' }
]

const SearchIndex = () => {
    let { productState, dispatch } = useData()
    let [cateArray, setCateArray] = useState(new Array(categoriesName.length).fill(false))
    let [brandArray, setBrandArray] = useState(new Array(brandsName.length).fill(false))
    let [cateValue, setcateValue] = useState([])
    let [brandValue, setbrandValue] = useState([])
    let [searchedProducts, setSearchedProducts] = useState([])
    let [value, setValue] = useState({ low: '', high: '' })


    useEffect(() => {

        if (productState.products.length <= 0) {
            let products = localStorage.getItem('__allProduct')
            dispatch({ type: Product_Action.SAVE_PRODUCT, payload: { allProducts: JSON.parse(products) } })
        }
        setSearchedProducts(JSON.parse(localStorage.getItem('__allProduct')))
    }, [])



    let handleCheckBoxCategory = (position) => {
        let precateArray = cateArray
        precateArray[position] = precateArray[position] ? false : true
        setCateArray([...precateArray])

        let checkCateValue = cateValue.filter((sig, index) => sig == categoriesName[position].value)

        if (checkCateValue.length > 0) {
            let filteredCateValue = cateValue.filter((sig, index) => sig !== categoriesName[position].value)
            setcateValue(filteredCateValue)
            findSearchedProducts(filteredCateValue, brandValue, value.low, value.high)

        } else {
            let sendCateValue = [...cateValue, categoriesName[position].value]
            setcateValue(sendCateValue)
            findSearchedProducts(sendCateValue, brandValue, value.low, value.high)
        }


    }

    function findSearchedProducts(categoryArray, brandArrayx, low, high) {
        let main_ProductArray = productState.products
        let x = []
        if (categoryArray.length <= 0 && brandArrayx.length <= 0) {
            if (low && high) {
                let productThroughValue = main_ProductArray.filter(sig => low <= sig.price && high >= sig.price)
                return setSearchedProducts(productThroughValue)
            } else {
                return setSearchedProducts(main_ProductArray)
            }
        }
        for (let i = 0; i < categoryArray.length; i++) {
            let result = main_ProductArray.filter(sig => sig.category.includes(categoryArray[i]))
            if (low && high) {
                let resultUsingValue = result.filter(sig => low <= sig.price && high >= sig.price)
                x.push(...resultUsingValue)
            } else {
                x.push(...result)
            }
        }

        if (x.length <= 0 && brandArrayx.length > 0) {
            let preresultUseingBrandValueArray = []
            for (let b = 0; b < brandArrayx.length; b++) {

                let resultUseingBrandValue = main_ProductArray.filter(sig => sig.brand.includes(brandArrayx[b]))

                preresultUseingBrandValueArray.push(...resultUseingBrandValue)
            }
            if (low && high) {
                x = preresultUseingBrandValueArray.filter(sig => low <= sig.price && high >= sig.price)
            } else {
                x = preresultUseingBrandValueArray
            }
        } else if (x.length > 0 && brandArrayx.length > 0) {
            let preresultUseingBrandValueArray = []
            for (let b = 0; b < brandArrayx.length; b++) {

                let resultUseingBrandValue = x.filter(sig => sig.brand.includes(brandArrayx[b]))

                preresultUseingBrandValueArray.push(...resultUseingBrandValue)
            }
            if (low && high) {
                x = preresultUseingBrandValueArray.filter(sig => low <= sig.price && high >= sig.price)
            } else {
                x = preresultUseingBrandValueArray
            }
        }

        setSearchedProducts(x)
    }




    let handleCheckBoxBrand = (position) => {
        let prebrandArray = brandArray
        prebrandArray[position] = prebrandArray[position] == true ? false : true
        setBrandArray([...prebrandArray])

        let checkBrandValue = brandValue.filter(sig => sig == brandsName[position].value)
        if (checkBrandValue.length > 0) {
            let filteredBrandValue = brandValue.filter(sig => sig !== brandsName[position].value)
            findSearchedProducts(cateValue, filteredBrandValue, value.low, value.high)
            setbrandValue(filteredBrandValue)
        } else {
            let sendBrandValue = [...brandValue, brandsName[position].value]
            findSearchedProducts(cateValue, sendBrandValue, value.low, value.high)
            setbrandValue(sendBrandValue)
        }
    }

    //low to high
    let handleAscendingOrder = () => {
        let searchedProductsArray = searchedProducts

        searchedProductsArray.sort((a, b) => { return a.price - b.price })

        setSearchedProducts([...searchedProductsArray])


    }

    //high to low
    function handleDescendingOrder() {
        let searchedProductsArray = searchedProducts
        searchedProductsArray.sort((a, b) => { return b.price - a.price })

        setSearchedProducts([...searchedProductsArray])
    }
    //handleSelectTag
    let handleSelectTag = (e) => {

        if (e.target.value == 'asc') {
            handleAscendingOrder()
        } else if (e.target.value == 'dec') {
            handleDescendingOrder()
        } else {
            setSearchedProducts(productState.products)
        }
    }

    //handlePriceInputBox

    let handlePriceInputBox = (e) => {
        e.preventDefault()
        let low = e.target[0].value
        let high = e.target[1].value
        setValue({ low: low, high: high })
        findSearchedProducts(cateValue, brandValue, low, high)
    }




    return (
        <div className='search-panel'>
            <div className="search-panel__sidebar">
                <div className="search-panel__sidebar--rangebox mt-3">
                    <form onSubmit={(event) => handlePriceInputBox(event)}>
                        <p style={{ fontSize: '1.5rem', fontWeight: '700' }}>Price</p>
                        <div className="randebox-input ">
                            <input type="number" />
                            <p style={{ margin: '0px', fontSize: '1.3rem' }}>to</p>
                            <input type="number" />
                        </div>
                        <button type='submit' style={{ width: '23%', fontSize: '1.3rem' }} className='btn btn-outline-success mt-3'>Go</button>
                    </form>
                </div>
                <div className="search-panel__sidebar--category-box">
                    <p style={{ fontSize: '1.5rem', fontWeight: '700' }}>Categories</p>
                    {categoriesName.map((sig, index) => <div class="form-check">
                        <input key={index} class="form-check-input" onChange={() => handleCheckBoxCategory(index)} checked={cateArray[index]} type="checkbox" value={sig.value} id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">{sig.name}</label>
                    </div>)}
                </div>
                <div className="search-panel__sidebar--brand">
                    <p style={{ fontSize: '1.5rem', fontWeight: '700' }}>Brands</p>
                    {brandsName.map((sig, index) => <div class="form-check">
                        <input key={index} class="form-check-input" onChange={() => handleCheckBoxBrand(index)} checked={brandArray[index]} type="checkbox" value={sig.value} id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">{sig.name}</label>
                    </div>)}
                </div>
            </div>
            <div className="search-panel__main">
                <div className="search-panel__navbar">
                    <div style={{ marginLeft: '3%' }}>
                        <p style={{ fontSize: '1.5rem', fontWeight: '500' }} >{searchedProducts.length} products found</p>
                    </div>
                    <div style={{ fontSize: '1.5rem', fontWeight: '500' }} className='search-panel__navbar--sort' >
                        <p style={{ margin: '0px' }}>Sort By</p>
                        <select onChange={(event) => handleSelectTag(event)}>
                            <option value="n">Relevance</option>
                            <option value="asc">Price:low to high</option>
                            <option value="dec">Price:high to low</option>
                        </select>
                    </div>
                </div>
                <div className="search-panel__results">
                    {searchedProducts && searchedProducts.map((sig, index) => <SectionCard href={`/product/${sig._id}`} title={sig.title} img={sig.img[0].src} price={sig.price} priceoff={sig.priceOff} />)}
                </div>
            </div>
        </div>
    )
}

export default SearchIndex;
