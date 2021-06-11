import React, { useState } from 'react'

const Search = () => {
    let categoriesName=[
        {name:'Smart Phone',value:'smart Phone'},
        {name:'Desktop',value:'desktop'},
        {name:"Watch",value:'watch'},
        {name:'Smart Ac',value:'ac'},
        {name:'Motor Bike',value:'motor bike'},
        {name:'Smart TV & Andriod TV',value:'tv'},
        {name:'Laptop',value:'laptop'}

    ]
    let brandsName=[
        {name:'Easy Fashion',value:'easy'},
        {name:'Walton',value:'walton'},
        {name:'Sumsang',value:'sumsang'},
        {name:'Hero',value:'hero'},
        {name:'Xiaomi',value:'xiaomi'},
        {name:'Apple',value:'apple'},
        {name:'Realme',value:'realme'}
    ]
    let[cateArray,setCateArray]=useState(new Array(categoriesName.length).fill(false))
    let[brandArray,setBrandArray]=useState(new Array(brandsName.length).fill(false))
    let[cateValue,setcateValue]=useState([])
    let[brandValue,setbrandValue]=useState([])
    let handleCheckBoxCategory=(position)=>{
        let precateArray=cateArray
        precateArray[position]=precateArray[position]?false:true
        setCateArray([...precateArray])
    
        let filterdCateValue=cateValue.filter((sig,index)=>sig==categoriesName[position].value)
      
        if(filterdCateValue.length>0){
            setcateValue(cateValue.filter((sig,index)=>sig!==categoriesName[position].value))
        }else{
            setcateValue([...cateValue,categoriesName[position].value])
        }

    }

    let handleCheckBoxBrand=(position)=>{
        let prebrandArray=brandArray
        prebrandArray[position]=prebrandArray[position]==true?false:true
        setBrandArray([...prebrandArray])

        let filteredBrandValue=brandValue.filter(sig=>sig==brandsName[position].value)
        if(filteredBrandValue.length>0){
            setbrandValue(brandValue.filter(sig=>sig!==brandsName[position].value))
        }else{
            setbrandValue([...brandValue,brandsName[position].value])
        }
    }
    
    console.log(brandValue);
    
    return (
        <div className='search-panel'>
           <div className="col-md-3 search-panel__sidebar">
                <div className="search-panel__sidebar--rangebox">
                    <p style={{fontSize:'1.5rem',fontWeight:'700'}}>Price</p>
                    <div className="randebox-input">
                        <input type="number" />
                        <p style={{margin:'0px',fontSize:'1.3rem'}}>to</p>
                        <input type="number" />
                    </div>
                    <button style={{width:'23%',fontSize:'1.3rem'}} className='btn btn-outline-success mt-3'>Go</button>
                </div>
                <div className="search-panel__sidebar--category-box">
                    <p>Categories</p>
                    {categoriesName.map((sig,index)=><div class="form-check">
                            <input key={index} class="form-check-input" onChange={()=>handleCheckBoxCategory(index)} checked={cateArray[index]}  type="checkbox" value={sig.value} id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">{sig.name}</label>
                    </div>)}
                </div>
                <div className="search-panel__sidebar--brand">
                    <p>Brands</p>
                    {brandsName.map((sig,index)=><div class="form-check">
                            <input key={index} class="form-check-input" onChange={()=>handleCheckBoxBrand(index)} checked={brandArray[index]}  type="checkbox" value={sig.value} id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">{sig.name}</label>
                    </div>)}
                </div>
           </div>
           <div className="col-md-9 search-panel__main">
               <div className="search-panel__navbar">

               </div>
               <div className="search-panel__results">

               </div>
           </div>
        </div>
    )
}

export default Search;
