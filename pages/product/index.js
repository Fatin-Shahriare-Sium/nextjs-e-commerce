import React, { useEffect } from 'react'
import { connect, useSelector } from 'react-redux'

const Indexy = () => {
    let product=useSelector(state=>state)
    useEffect(()=>{
        console.log(product);
        
    },[])
    return (
        <div>
        
        </div>
    )
}

export default Indexy;

// let mapStateToProps=(state)=>{
//     return{
//         products:state.count
//     }
// }


// export default connect(mapStateToProps,'')(Indexy);