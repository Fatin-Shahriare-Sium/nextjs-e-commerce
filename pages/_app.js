import '../styles/globals.css'
import '../styles/navbar.css'
import '../styles/section.css'
import '../styles/offcanvas.css'
import '../styles/login.css'
import '../styles/cart.css'
import '../styles/signup.css'
import '../styles/single-product.css'
import '../styles/dollar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../component/navbar'
import Layout from '../component/layout'
import DataProvider from '../store'

 


function  MyApp({ Component, pageProps }) {
    return(
        <DataProvider>
            <Layout>
                <Navbar/>
                <Component {...pageProps} />
            </Layout>
        </DataProvider>
    )
  
}

export default MyApp;