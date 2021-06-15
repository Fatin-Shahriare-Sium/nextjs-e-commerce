import '../styles/globals.css'
import '../styles/navbar.css'
import '../styles/section.css'
import '../styles/offcanvas.css'
import '../styles/login.css'
import '../styles/cart.css'
import '../styles/signup.css'
import '../styles/single-product.css'
import '../styles/dollar.css'
import '../styles/search-panel.css'
import '../styles/user-sidebar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../component/navbar'
import Layout from '../component/layout'
import DataProvider from '../store'
import {useRouter} from 'next/router'
 


function  MyApp({ Component, pageProps }) {
    let router=useRouter()
    function render_App(){
        console.log(router);
        if(router.asPath=='/user'){
            
            console.log('in user related route');
            return <>
                <Navbar/>
                <Component {...pageProps} />
            </>

        }else{
            return <>
                 <Layout>
                    <Navbar/>
                    <Component {...pageProps} />
                </Layout>
            </>
        }
    }
    return(
        <DataProvider>
           {render_App()}
        </DataProvider>
    )
  
}

export default MyApp;