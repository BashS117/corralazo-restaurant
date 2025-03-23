import React from 'react'
import { AppContext } from '../../Context/AppContext';
import { useContext } from 'react';

const OrderCart = ({id,name,image,price,quantity,category}) => {

  const { state,dispatch, incrementQuantity, decrementQuantity, removeFromCart } = useContext(AppContext);

   //funcion para aumentar en uno un producto
   const productPlusOne = (id)=>{
  
    dispatch({
      type:'INCREMENT_QUANTITY', 
      payload: id
    })
  }
   //funcion para restar en uno un producto
   const substractOne = (id) => {
    if (quantity === 1) {
      // Si la cantidad es 1, eliminar el producto del carrito
      dispatch({
        type: 'REMOVE_FROM_CART',
        payload: id ,
      });
    } else {
      // Si la cantidad es mayor a 1, decrementar la cantidad
      dispatch({
        type: 'DECREMENT_QUANTITY',
        payload: id,
      });
    }
  };


  return (
  <div className="flex justify-between items-center py-2 border-b-[1px] border-orange ">
      <figure className="w-20 h-20">
            <img className="w-full h-full rounded-lg object-cover" src={image} alt='' />
      </figure>
    <div className="flex flex-col items-center gap-2"> 
       
        <p className="text-sm font-bold pl-2">{name}</p>
        <div className='text-[13px] flex gap-2 items-center'>      
              <span>{price}mil</span>x <span className='font-bold text-[16px]'>{quantity}</span>
        </div>
    </div>
    <div className='flex flex-col'>
    <svg onClick={()=>productPlusOne(id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-11 h-11">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

<svg onClick={()=>substractOne(id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-11 h-11">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>


    </div>
    <div className="flex items-center gap-2">
          <p className="text-lg font-medium"> ${new Intl.NumberFormat("es-CO").format(Math.round(quantity * price * 1000))}</p>
          
      </div>

  </div>
  )
}

export default OrderCart