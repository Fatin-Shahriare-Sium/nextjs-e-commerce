import SectionCard from "./section-card"
import Link from 'next/link.js'
const Section = ({ title, product, link }) => {
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
        <div className='section'>
            <div className="section-header">
                <p>{title}</p>
                <Link href={`/search?category=${link}`}>
                    <button className='btn btn-outline-dark'>View All</button>
                </Link>
            </div>
            <div className="section-card__container mt-5">
                {product.length <= 0 ? <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <p style={{ fontSize: '2rem', fontWeight: '700' }}>No products found</p>
                </div> :
                    product[0].price ? product.map((sig, index) => <SectionCard href={`/product/${sig._id}`} key={index} title={sig.title} priceoff={sig.priceOff} price={sig.price} img={sig.img.length>0?sig.img[0].src:0} />) :
                        product.map((sig, index) => <SectionCard href='/brand' title={sig.title} key={index} price='' priceoff='' img={sig.img} />)
                }


            </div>
        </div>
    )
}

export default Section;
