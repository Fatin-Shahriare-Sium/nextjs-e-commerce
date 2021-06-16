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
import UserSidebar from '../component/user-sidebar.jsx'


function  MyApp({ Component, pageProps }) {
    let router=useRouter()
    function render_App(){
 
        if(router.pathname=='/user'){
            
  
            return <>
                <Navbar/>
                <div className='container-fluid' style={{marginTop:'1%',height:'83vh'}}>
                    <div className='row'>
                        <div style={{overflowY:'scroll',height:'80vh'}} className='col-md-3  user-sidebar__container'>
                            <UserSidebar/>
                        </div>
                        <div style={{overflowY:'scroll'}} className='col-md-9 user-main'>
                            <Component {...pageProps} />
                        </div>
                    </div>
                </div>
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