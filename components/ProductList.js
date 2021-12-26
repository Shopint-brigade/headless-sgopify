import  ProductCard  from "./ProductCard"
import React, { useRef } from "react";

const ProductList = ({products}) => {
    const ref = useRef(null);
    const scroll = (scrollOffset) => {
        ref.current.scrollTo({
            left:  scrollOffset,
            behavior: 'smooth'
          });
      };

      
    return (
        <div className="bg-white">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className='text-2xl font-extrabold text-gray-900 mb-6'>
                    Products
                </h2>
                <div className="relative right-0 text-right bottom-3.4rem block">
                    <span className="inline-block mr-1 hover:text-gray-400 cursor-pointer" onClick={() => scroll(-2000)}>prev</span>
                    <span className="inline-block ml-1 hover:text-gray-400 cursor-pointer" onClick={() => scroll(+2000)}>next</span>
                </div>
                
                <div className='flex flex-nowrap overflow-x-hidden product-container' ref={ref} >
                    {
                        products.map(product => (  
                            <ProductCard key={product.node.id} product={product} />
                        ))
                    }
                    
                </div>
            </div>
            
        </div>
    )
}

export default ProductList
