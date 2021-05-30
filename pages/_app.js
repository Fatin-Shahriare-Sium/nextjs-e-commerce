import '../styles/globals.css'
import '../styles/navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../component/navbar'
import Layout from '../component/layout'
function MyApp({ Component, pageProps }) {
    return(
      <Layout>
        <Navbar/>
        <Component {...pageProps} />
      </Layout>
    )
  
}

export default MyApp
