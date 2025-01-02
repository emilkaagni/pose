import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopContext"
import Title from "./Title.jsx";
import ProductItem from "./ProductItem.jsx";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
    const[latestproducts, setLatestProducts] = useState([]);

    // useEffect(()=>{
    //     setLatestProducts(products.slice(0,10));
    // },[products])

    useEffect(() => {
      if (products && Array.isArray(products)) {
        setLatestProducts(products.slice(0, 10));
      }
    }, [products])    

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3x1">
        <Title text1={'LATEST'} text2={'COLLECTIONS'} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
        New products of pose fashion add any text from components latestproducts
        </p>
      </div>

        {/* RENDERING PRODUCTS  */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">

            {
                latestproducts.map((item,index)=>(
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
                ))
            }
            </div>
    </div>
  )
}

export default LatestCollection



// import React, { useContext } from 'react'
// import { ShopContext } from '../context/ShopContext';

// const LatestCollection = () => {
//     const { products } = useContext(ShopContext);

//   return (
//     <div>
      
//     </div>
//   )
// }

// export default LatestCollection
