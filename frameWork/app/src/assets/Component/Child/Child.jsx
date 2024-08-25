import React from 'react'

// function Child({hambozo,x,functionFromP}) {
    function Child(props) {
      const{product,index,deleteProduct, updateProductt }=props;

        const{name, price,caregory,code} = product;
        

  return (
    <> 
    {/* <h1>Child{hambozo}</h1>
    <p onClick={functionFromP}>changeProduct</p>  */}
    <div>
         <h1>index= {index} </h1> 
        <h2> name: {name}</h2>
        <h2>category: {caregory}</h2>
        <h2>price:{price}</h2>
        <button className="bg-red-400 border-red-400 w-full rounded" onClick={() =>deleteProduct(code)}>delete </button>
        <button className="bg-red-400 border-red-400 w-full rounded" onClick={() =>updateProductt(index)}>Update</button>

    </div>
    </>
  )
}

export default Child