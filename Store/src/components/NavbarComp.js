import React from 'react'

import { useState,useContext } from 'react'
import {Button,Container,Navbar,Modal} from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import {CartContext} from "../CartContext"
import CartProduct from './CartProduct'
const NavbarComp= () => {
  const cart=useContext(CartContext)
  const [show,setShow]=useState(false);
  const handleClose=()=>setShow(false);
  const handleShow=()=>setShow(true);
  const productsCount=cart.items.reduce((sum,product)=>sum+product.quantity,0)
  const checkout=async ()=>{
    await fetch("http://localhost:4000/checkout",{
      method:"POST",
      headers: {
        "Content-Type": "application/json",
        
      },
      body:JSON.stringify({items:cart.items})
    }).then((response) =>{
      return response.json()
    }).then((response)=>{
        if(response.url)
        {
          window.location.assign(response.url) //forwarding user to stripe
        }
    })
  }
  return (
    <div>
      <Navbar expand='sm'>
        <Navbar.Brand href="/">OneStop Rental</Navbar.Brand>
         <Navbar.Toggle/>
          <NavbarCollapse className='justify-content-end'>
            <Button onClick={handleShow}>Cart {productsCount} Items</Button>
          </NavbarCollapse>
      </Navbar>
     
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {productsCount >0 ?
            <>
              <p>Items in your cart:</p>
              {cart.items.map( (currentProduct, idx) => (
                <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
              ))}

              <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>

              <Button variant="success" onClick={checkout}>
                  Purchase items!
              </Button>
             </>

        :
            <h1>Cart is Empty</h1>
        }
        
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default NavbarComp
