import SectionCard from "./section-card"

const Section = () => {
    let brandDetails=[
        {
            img:'https://res.cloudinary.com/shimul/image/upload/v1614761599/logo-footer-main-1-1_l8ypig.png',
            title:'Easy Fashion'
        },
        {
            img:'https://res.cloudinary.com/shimul/image/upload/v1617824749/2xB1zxf81-download.jpg',
            title:'Xiaomi'
        },
        {
            img:'https://res.cloudinary.com/shimul/image/upload/v1620947763/b8gisgu1o-download.jpg',
            title:'Samsung'
        },
        {
            img:'https://res.cloudinary.com/sium/image/upload/v1622573290/hero_dd9pzd.png',
            title:'Hero'
        },
        {
            img:'https://res.cloudinary.com/sium/image/upload/v1622573467/realme_hatsni.jpg',
            title:'Realme'
        },
        {
            img:'https://res.cloudinary.com/sium/image/upload/v1622575673/applexdex_armmqw.png',
            title:'Apple'
        },
        {
            img:'https://res.cloudinary.com/sium/image/upload/v1622575512/waltonx_bnsrkg.png',
            title:'Walton'
        }
    ]
    return (
        <div className='section'>
            <div className="section-header">
                <p>Shop By brands</p>
                <button className='btn btn-outline-dark'>View All</button>
            </div>
            <div className="section-card__container mt-5">

                {brandDetails.map((sig,index)=><SectionCard title={sig.title} img={sig.img}/>)}
            
            </div>
        </div>
    )
}

export default Section;
