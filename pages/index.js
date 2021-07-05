import { useEffect } from "react";
import useUrl from "../component/hooks/useUrl";
import Navbar3 from "../component/navbar3";
import Offcanvas from "../component/offcanvas";
import Section from "../component/scetion";
import { useData } from "../store";
import Product_Action from "../store/action/productAction";

export async function getServerSideProps() {
    let { url } = useUrl()
    let res = await fetch(`${url}/product/all`)
    let data = await res.json()
    return {
        props: {
            products: data.allProduct
        }
    }
}
const Home = ({ products }) => {
    let { dispatch, productState } = useData()

    useEffect(() => {
        dispatch({ type: Product_Action.SAVE_PRODUCT, payload: { allProducts: products } })
        localStorage.setItem('__allProduct', JSON.stringify(products))
        console.log(productState);
    }, [])
    let brandDetails = [
        {
            img: 'https://res.cloudinary.com/shimul/image/upload/v1614761599/logo-footer-main-1-1_l8ypig.png',
            title: 'Easy Fashion'
        },
        {
            img: 'https://res.cloudinary.com/shimul/image/upload/v1617824749/2xB1zxf81-download.jpg',
            title: 'Xiaomi'
        },
        {
            img: 'https://res.cloudinary.com/shimul/image/upload/v1620947763/b8gisgu1o-download.jpg',
            title: 'Samsung'
        },
        {
            img: 'https://res.cloudinary.com/sium/image/upload/v1622573290/hero_dd9pzd.png',
            title: 'Hero'
        },
        {
            img: 'https://res.cloudinary.com/sium/image/upload/v1622573467/realme_hatsni.jpg',
            title: 'Realme'
        },
        {
            img: 'https://res.cloudinary.com/sium/image/upload/v1622575673/applexdex_armmqw.png',
            title: 'Apple'
        },
        {
            img: 'https://res.cloudinary.com/sium/image/upload/v1622575512/waltonx_bnsrkg.png',
            title: 'Walton'
        }
    ]
    return (
        <>
            <Navbar3 />
            <Section product={brandDetails.slice(0, 5)} title='Shop by brands' />
            <Section product={products} link='all' title='Latest Products' />
            <Section product={products.filter(sig => sig.category == 'desktop')} link='desktop' title='Desktop' />
            <Section product={products.filter(sig => sig.category == 'ac')} link='ac' title='Smart Ac' />
            <Section product={products.filter(sig => sig.category == 'smart phone')} link='smart phone' title='Smart Phone' />
            <Section product={products.filter(sig => sig.category == 'watch')} link='watch' title='Watch' />
            <Section product={products.filter(sig => sig.category == 'motor bike')} link='motor bike' title='Motor Bike' />
            <Section product={products.filter(sig => sig.category == 'tv')} link='tv' title='Smart Tv' />
            <p style={{ fontSize: '4rem', fontWeight: '700' }}>Allah is Almighty</p>
        </>
    )
}


export default Home;
