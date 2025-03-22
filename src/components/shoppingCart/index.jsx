import React from 'react'
import { Link } from 'react-router-dom'
import OrderCart from '../OrderCart'
import { useContext } from "react";
import { AppContext } from '../../Context/AppContext';


const ShoppingCart = ({sum}) => {

  const {state}=useContext(AppContext)

   const onClick=() => {
      handleCheckout(); // Puedes realizar acciones locales adicionales aquí si es necesario
      window.location.href = whatsappUrl; // Redirigir a WhatsApp
    }


  return (
    <div className='border text-white border-orange rounded-lg '>
        <div className='flex justify-between items-center p-6'>
          <h2 className='font-medium text-xl'>Tu pedido</h2>    
        </div>
    <div className='px-2 overflow-y-scroll flex-1'>
       
        {state.cart.map((productCart,index)=>(
      <OrderCart 
      key={index}
      id={productCart.id}
      name={productCart.name}
      // imageUrl={productCart.images}
      price={productCart.price}
      quantity={productCart.quantity}
      category={productCart.category}
      image={productCart.image}
      />
  ))}
  
    </div>

    <div className='px-6 mb-6'>
      <p className='flex justify-between items-center mb-2'> 
        <span className='font-light'>Total:</span>
        <span className='font-medium '> ${sum}000</span>
      </p>
    
    
      <button className='w-full bg-[#25d366] py-3 text-white rounded-lg' 
      // onClick={() => handleCheckout()}
      >
          <input type="submit" value='Enviar a WhatsApp' />
      </button>
    
    </div>
 
   
  </div>
  )
}

export default ShoppingCart