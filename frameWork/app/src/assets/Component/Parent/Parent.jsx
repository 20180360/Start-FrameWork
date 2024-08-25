import React, { useState } from 'react'
//import Child from '../Child/Child';

function Parent() {
    return(<>
        <h3>hi from parent</h3>
        </>)
//     const[products,setProducts]=useState([
//         { code: 34531, name:'toshiba' , price:'2000' ,caregory: 'tv' },
//         { code: 2132, name:'samsong' , price:'13000' ,caregory: 'tv' },
//         { code: 387, name:'lg' , price:'40000' ,caregory: 'screen' },
//         { code: 4132, name:'hp' , price:'31000' ,caregory: 'IP' },
//         { code: 59098, name:'dell' , price:'25000' ,caregory: 'lap' },
//         { code: 6234, name:'zanosy' , price:'60000' ,caregory: 'washing' },
//         { code: 77856, name:'toshiba' , price:'2000' ,caregory: 'tv' },
//     ]);
//     // function changeProduct(){
//     //     setProduct('samsong')
//     // }
//     function deleteProduct(code){
//         //! deep copy
//         const newProducts= structuredClone(products);
//        const updateProducts= newProducts.filter((item)=>item.code !== code);
//        setProducts(updateProducts);
//     }
//     function updateProduct(index){
    
//         //! deep copy
//          let newProducts = structuredClone(products);
//      newProducts[index].price -=10  ; 
//       setProducts(newProducts);
    
       
//     }
//   return (
//     <>
//         {/* <h2 >Parent com {product}</h2>
     
//     <Child hambozo={product} x='50' functionFromP={changeProduct}/>
//     <h2>parent com</h2> */}
//     <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </h3>
//     {products.map((p,i)=>{
//         return <Child product={p} index={i} deleteProduct={deleteProduct}  updateProductt={ updateProduct} key={p.code}/>

//     })}

 }

export default Parent