import { useEffect } from "react";
import { connect, connectAdvanced, useDispatch, useSelector } from "react-redux";
import Section from "../component/scetion";
import Product_Action from "../redux/action/productAction";
import { loadProducts } from "../redux/reducer/productReducer";
export async function getServerSideProps(){
    let res=await fetch('http://localhost:5000/product/all')
    let data=await res.json()
    return{
        props:{
            products:data.allProduct
        }
    }
}
const Home = ({products}) => {
    let dispatch=useDispatch()
    useEffect(()=>{
        dispatch(loadProducts())
    },[])
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
    <>
     <Section product={brandDetails.slice(0,5)} title='Shop by brands'/>
     <Section product={products} title='Latest Products'/>
     <Section product={products.filter(sig=>sig.category=='desktop')} title='Desktop'/>
     <Section product={products.filter(sig=>sig.category=='ac')} title='Smart Ac'/>
     <Section product={products.filter(sig=>sig.category=='smart phone')}  title='Smart Phone'/>
    <p style={{fontSize:'4rem',fontWeight:'700'}}>Allah is Almighty</p>
    </>
  )
}


export default Home;

// let mapStateToProps=(state)=>{
//     return{
//         count:state.count
//     }
// }

// export default connect(mapStateToProps,'')(Home)