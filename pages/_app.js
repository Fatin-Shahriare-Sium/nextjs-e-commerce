import '../styles/globals.css'
import '../styles/navbar.css'
import '../styles/section.css'
import '../styles/offcanvas.css'
import '../styles/login.css'
import '../styles/cart.css'
import '../styles/signup.css'
import '../styles/single-product.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../component/navbar'
import Layout from '../component/layout'
import {createWrapper} from "next-redux-wrapper";
import {Provider} from 'react-redux'
import store from '../redux/store.js'
 


function  MyApp({ Component, pageProps }) {
    return(
     <Provider store={store}>
        <Layout>
          <Navbar/>
          <Component {...pageProps} />
        </Layout>
     </Provider>
    )
  
}

// const makeStore = () => store;
// let wrapper=createWrapper(makeStore)
// //withRedux wrapper that passes the store to the App Component
// export default wrapper.withRedux(MyApp);

export default MyApp;