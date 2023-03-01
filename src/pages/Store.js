import React from 'react'
import {Row,Col} from 'react-bootstrap'
import {products, getProductData} from '../Products'
import ProductCard from '../components/ProductCard'
const Store = () => {
  return (
    <>
        
        <h1 alig="center" className=''>Welcome to the store</h1>
        <Row xs={1} md={3} className="g-4">
            
            {products.map((product,index)=>(
                
            <Col align='center'>
                <ProductCard product={product}/>
            
            </Col>
            ))}
           
    
        </Row>
    </>
  )
}

export default Store
